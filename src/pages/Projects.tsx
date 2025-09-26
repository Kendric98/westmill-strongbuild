import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Example images for each project type (replace with your actual image paths)
const projectImages: Record<string, string> = {
  "FAHARI RESIDENCE": "/images/projects/fahari.jpg",
  "KOMAROCK": "/images/projects/komarock.jpg",
  "MADISON LIFE ASSURANCE": "/images/projects/madison.jpg",
  "REHANI": "/images/projects/rehani.jpg",
  "KOMAROCK HEIGHTS": "/images/projects/komarock-heights.jpg",
  "MERU COUNTY": "/images/projects/meru.jpg",
  "ST PETER'S CRAVERS": "/images/projects/paving.jpg",
  "NYERI STAGE": "/images/projects/nyeri.jpg",
  "RUIRU STAGE": "/images/projects/ruiru.jpg",
  "KILIMAMBOGO TEACHERS COLLEGE": "/images/projects/kilimanbogo.jpg",
  "UPGRANDING KIBIRICHA MARKET LOOP ROAD": "/images/projects/kibiricha.jpg",
  "SOGEA SATON KENYA": "/images/projects/sogea.jpg",
  "GIANT MILLERS LIMITED": "/images/projects/giant-millers.jpg",
  "MT KENYA UNIVERSITY": "/images/projects/mt-kenya.jpg",
  "KAHAWA SUKARI PCEA": "/images/projects/kahawa.jpg",
  "RIFT VALLEY ROLLERS KAHAWA BALLACK": "/images/projects/rift-valley.jpg",
  "THIKA WATER & SEWERAGE": "/images/projects/thika.jpg",
  "JUBILEE FEEDS LIMITED": "/images/projects/jubilee.jpg",
  "CHINA RAILWAY SEVENTH GROUP": "/images/projects/china-railway.jpg",
  "STRABAG INTERNATIONAL/THIBA DAM": "/images/projects/strabag.jpg",
  "ALBIZIA LTD": "/images/projects/albizzia.jpg",
  "ACK CATHEDRAW NYERI": "/images/projects/ack-nyeri.jpg",
  "CONSTANT MOTORS & INVESTMENT LTD": "/images/projects/constant-motors.jpg",
};

const groupedProjects = [
  {
    group: "Residential Projects",
    projects: [
      {
        name: "Fahari Grounds- Levelling 3/4 Acre Land",
        customer: "FAHARI RESIDENCE",
        location: "Fahari Estate, Nairobi",
        details: "Land levelling and site preparation for new residential development.",
      },
      {
        name: "Fahari Phase 2, Civil works",
        customer: "FAHARI RESIDENCE",
        location: "Fahari Estate, Nairobi",
        details: "Civil works including drainage and access roads for Phase 2.",
      },
      {
        name: "Fahari Phase 4 & 5 Clearance & Excavation Works",
        customer: "FAHARI RESIDENCE",
        location: "Fahari Estate, Nairobi",
        details: "Clearance and excavation for new housing units.",
      },
      {
        name: "Fahari Residence by THETA DAM construction of Access and circulation Roads within Phase 4&5",
        customer: "FAHARI RESIDENCE",
        location: "Fahari Estate, Nairobi",
        details: "Construction of access and circulation roads for improved connectivity.",
      },
      {
        name: "Fahari Wall Phase 3",
        customer: "FAHARI RESIDENCE",
        location: "Fahari Estate, Nairobi",
        details: "Perimeter wall construction for enhanced security.",
      },
      {
        name: "Villa Kazi Homes Development (Parking and Entrance Roadworks)",
        customer: "MADISON LIFE ASSURANCE",
        location: "Villa Kazi, Nairobi",
        details: "Parking area and entrance roadworks for new homes.",
      },
      {
        name: "Villa Kazi Homes Development (Sewer and Reticulation Phase 1)",
        customer: "MADISON LIFE ASSURANCE",
        location: "Villa Kazi, Nairobi",
        details: "Sewer system installation and reticulation for Phase 1.",
      },
      {
        name: "Rehani Beautification, Phase 1",
        customer: "REHANI",
        location: "Rehani Estate, Nairobi",
        details: "Beautification and landscaping for residential estate.",
      },
      {
        name: "Perimeter wall & cabros work at Komarock Height",
        customer: "KOMAROCK HEIGHTS",
        location: "Komarock Heights, Nairobi",
        details: "Perimeter wall and cabro paving for residential complex.",
      },
    ],
  },
  {
    group: "Commercial & Institutional Projects",
    projects: [
      {
        name: "K-MALL Project, Komarock",
        customer: "KOMAROCK",
        location: "Komarock, Nairobi",
        details: "Construction of commercial mall including parking and access roads.",
      },
      {
        name: "Komarock Civil Works, Phase 2",
        customer: "KOMAROCK",
        location: "Komarock, Nairobi",
        details: "Civil works for commercial and institutional buildings.",
      },
      {
        name: "Komarock Wall Phase 3",
        customer: "KOMAROCK",
        location: "Komarock, Nairobi",
        details: "Boundary wall construction for commercial property.",
      },
      {
        name: "MACADAMIA PROCESSING PLANT",
        customer: "MERU COUNTY",
        location: "Meru County",
        details: "Construction of macadamia processing facility.",
      },
      {
        name: "CONSTRUCTION OF A COMMERCIAL BUILDING",
        customer: "CONSTANT MOTORS & INVESTMENT LTD",
        location: "Nairobi",
        details: "Commercial building construction for automotive business.",
      },
      {
        name: "NTHARENE MARKET 1",
        customer: "MERU COUNTY",
        location: "Ntharene, Meru County",
        details: "Market construction for local vendors.",
      },
      {
        name: "NTHARENE MARKET 2",
        customer: "MERU COUNTY",
        location: "Ntharene, Meru County",
        details: "Expansion of market facilities.",
      },
    ],
  },
  {
    group: "Paving & Drainage Projects",
    projects: [
      {
        name: "PAVING WORKS",
        customer: "ST PETER'S CRAVERS",
        location: "Nairobi",
        details: "Paving works for church grounds.",
      },
      {
        name: "PAVING WORKS",
        customer: "NYERI STAGE",
        location: "Nyeri",
        details: "Paving works for public transport stage.",
      },
      {
        name: "PAVING WORKS",
        customer: "RUIRU STAGE",
        location: "Ruiru",
        details: "Paving works for public transport stage.",
      },
      {
        name: "PAVING WORKS",
        customer: "KILIMAMBOGO TEACHERS COLLEGE",
        location: "Kilimambogo, Thika",
        details: "Paving works for college campus.",
      },
      {
        name: "PAVING WORKS",
        customer: "UPGRANDING KIBIRICHA MARKET LOOP ROAD",
        location: "Kibiricha, Meru",
        details: "Upgrading market loop road with paving blocks.",
      },
      {
        name: "PAVING WORKS & DRAINAGE",
        customer: "SOGEA SATON KENYA",
        location: "Nairobi",
        details: "Paving and drainage works for commercial site.",
      },
      {
        name: "PAVING WORKS",
        customer: "GIANT MILLERS LIMITED",
        location: "Nairobi",
        details: "Paving works for milling facility.",
      },
      {
        name: "PAVING WORKS",
        customer: "MT KENYA UNIVERSITY",
        location: "Thika",
        details: "Paving works for university campus.",
      },
      {
        name: "PAVING WORKS",
        customer: "KAHAWA SUKARI PCEA",
        location: "Kahawa Sukari, Nairobi",
        details: "Paving works for church compound.",
      },
      {
        name: "SUPPLY OF PAVING BLOCK",
        customer: "RIFT VALLEY ROLLERS KAHAWA BALLACK",
        location: "Kahawa Ballack, Nairobi",
        details: "Supply of paving blocks for sports facility.",
      },
      {
        name: "PAVING WORKS",
        customer: "THIKA WATER & SEWERAGE",
        location: "Thika",
        details: "Paving works for water and sewerage company.",
      },
      {
        name: "PAVING WORKS",
        customer: "JUBILEE FEEDS LIMITED",
        location: "Nairobi",
        details: "Paving works for animal feeds factory.",
      },
      {
        name: "PAVING WORKS",
        customer: "CHINA RAILWAY SEVENTH GROUP",
        location: "Nairobi",
        details: "Paving works for railway construction site.",
      },
      {
        name: "PAVING WORKS & SUPPLY OF MATERIALS",
        customer: "STRABAG INTERNATIONAL/THIBA DAM",
        location: "Thiba Dam, Kirinyaga",
        details: "Paving works and supply of materials for dam construction.",
      },
      {
        name: "ACCESS ROAD & DRAINAGE WORKS AT ALBIZZIA",
        customer: "ALBIZIA LTD",
        location: "Nairobi",
        details: "Access road and drainage works for commercial property.",
      },
      {
        name: "PAVING WORKS",
        customer: "ACK CATHEDRAW NYERI",
        location: "Nyeri",
        details: "Paving works for cathedral grounds.",
      },
    ],
  },
];

const Projects = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Projects | Westmill Concrete | Kenya’s Trusted Precast Solutions"
      description="View our completed projects across Kenya. From roads, drainage, and housing to industrial construction—Westmill Concrete delivers reliable precast solutions."
      canonicalUrl="https://www.westmillconcrete.co.ke/projects"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Westmill Concrete Projects",
        url: "https://westmillconcrete.co.ke/projects",
        about: "Showcase of Westmill Concrete's precast concrete projects in Kenya.",
      }}
    />
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#f66202] to-yellow-400 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl mb-4">Our Completed Projects</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Explore a selection of our recent work, grouped by project type.
        </p>
      </div>
    </section>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-12">
        {groupedProjects.map((group) => (
          <div key={group.group}>
            <h2 className="font-heading text-steel-gray text-2xl mb-6">{group.group}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.projects.map((project, idx) => (
                <div
                  key={project.name + project.customer + idx}
                  className="bg-concrete-gray rounded-xl shadow-lg p-0 flex flex-col hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <img
                    src={projectImages[project.customer] || "/images/projects/default.jpg"}
                    alt={project.customer}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-semibold text-steel-gray text-lg mb-2">{project.name}</h3>
                    <p className="text-construction-yellow font-medium mb-1">{project.customer}</p>
                    <p className="text-steel-gray text-sm mb-1">
                      <span className="font-semibold">Location:</span> {project.location}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">{project.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Projects;