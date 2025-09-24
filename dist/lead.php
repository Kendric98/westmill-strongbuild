<?php
// Simple lead capture and email forwarder for cPanel (Apache + PHP)
// Saves to leads.csv and emails recipients.

// --- Config ---
$PRIMARY_RECIPIENTS = [
  'ken.westmill@gmail.com' // update to your Gmail address
];
$FROM_ADDRESS = 'no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
$DATA_DIR = __DIR__ . '/data';
$CSV_FILE = $DATA_DIR . '/leads.csv';

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

// Ensure data directory exists and is writable
if (!is_dir($DATA_DIR)) {
  if (!@mkdir($DATA_DIR, 0755, true) && !is_dir($DATA_DIR)) {
    error_log('lead.php: Failed to create data dir: ' . $DATA_DIR);
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Storage unavailable']);
    exit;
  }
}
if (!is_writable($DATA_DIR)) {
  error_log('lead.php: Data dir not writable: ' . $DATA_DIR);
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Storage not writable']);
  exit;
}

// Ensure CSV exists with header
if (!file_exists($CSV_FILE)) {
  $header = [
    'timestamp','name','email','phone','product','message','ip','user_agent'
  ];
  $headerWrite = @file_put_contents($CSV_FILE, implode(',', $header) . "\n");
  if ($headerWrite === false) {
    error_log('lead.php: Failed to create CSV file: ' . $CSV_FILE);
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Failed to initialize storage']);
    exit;
  }
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
if (!$fp) {
  error_log('lead.php: Failed to open CSV for append: ' . $CSV_FILE);
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Failed to write lead']);
  exit;
}
if (fputcsv($fp, $row) === false) {
  error_log('lead.php: fputcsv failed for: ' . $CSV_FILE);
  fclose($fp);
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Failed to persist lead']);
  exit;
}
fclose($fp);

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
$mailResult = @mail($to, $subject, $body, implode("\r\n", $headers));
if (!$mailResult) {
  // Log but don't fail the whole request since CSV saved
  error_log('lead.php: mail() failed to: ' . $to);
}

echo json_encode(['ok' => true, 'message' => 'Lead received']);
?>


