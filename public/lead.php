<?php
// Simple lead capture and email forwarder for cPanel (Apache + PHP)
// Saves to leads.csv and emails recipients.

// --- Config ---
$PRIMARY_RECIPIENTS = [
  'ken.westmill@gmail.com' // update to your Gmail address
];
$FROM_ADDRESS = 'no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
$CSV_FILE = __DIR__ . '/leads.csv';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: ' . (isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*'));
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  echo json_encode(['ok' => true]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Read JSON or form-encoded body
$raw = file_get_contents('php://input');
$data = [];
if ($raw) {
  $json = json_decode($raw, true);
  if (json_last_error() === JSON_ERROR_NONE && is_array($json)) {
    $data = $json;
  }
}
if (empty($data)) {
  $data = $_POST;
}

// Honeypot (optional)
if (!empty($data['website'])) {
  http_response_code(200);
  echo json_encode(['ok' => true, 'message' => 'Thanks!']);
  exit;
}

// Extract and sanitize
$name = trim($data['name'] ?? '');
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = trim($data['phone'] ?? '');
$product = trim($data['product'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $phone === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

// Build CSV row
$now = date('c');
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';

// Ensure CSV exists with header
if (!file_exists($CSV_FILE)) {
  $header = [
    'timestamp','name','email','phone','product','message','ip','user_agent'
  ];
  @file_put_contents($CSV_FILE, implode(',', $header) . "\n");
}

$row = [
  $now,
  str_replace(["\r","\n"], ' ', $name),
  $email,
  str_replace(["\r","\n"], ' ', $phone),
  str_replace(["\r","\n"], ' ', $product),
  str_replace(["\r","\n"], ' ', $message),
  $ip,
  str_replace(["\r","\n"], ' ', $ua)
];

// Append CSV safely
$fp = @fopen($CSV_FILE, 'a');
if ($fp) {
  fputcsv($fp, $row);
  fclose($fp);
}

// Build email
$subject = 'New Lead - West Mill Concrete';
$body = "New lead received:\n\n" .
  "Name: $name\n" .
  "Email: $email\n" .
  "Phone: $phone\n" .
  "Product: $product\n" .
  "Message:\n$message\n\n" .
  "Time: $now\nIP: $ip\nUser-Agent: $ua\n";

$headers = [];
$headers[] = 'From: ' . $FROM_ADDRESS;
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$to = implode(',', $PRIMARY_RECIPIENTS);
@mail($to, $subject, $body, implode("\r\n", $headers));

echo json_encode(['ok' => true, 'message' => 'Lead received']);
?>


