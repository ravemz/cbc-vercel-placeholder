import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryCard from "@/components/category-card";
import TestimonialCarousel from "@/components/testimonial-carousel";
import WaitlistForm from "@/components/waitlist-form";
import { testimonials } from "@/data/testimonials";

const whyCbcCards = [
  {
    title: "Find Matches That Matter",
    body: "AI finds verified suppliers already making custom parts like yours — in minutes, not months.",
  },
  {
    title: "No Middleman Margins",
    body: "Communicate directly with manufacturers. No markups, no translation loss — just fast, direct access.",
  },
  {
    title: "Supplier Profiles, Reimagined",
    body: "View real parts, factory walkthroughs, audits, and interviews — all from your screen.",
  },
  {
    title: "On-Ground Expertise",
    body: "From factory visits to logistics — tap into our local team of supplier quality engineers.",
  },
  {
    title: "Beat Tariffs",
    body: "Plan smart with suppliers across geographies. Maintain flexibility as tariffs shift.",
  },
  {
    title: "Self-Serve or Full Serve",
    body: "Whether you want full support or prefer to do it yourself— the choice is yours.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Describe Part",
    body: "Upload a photo or a 3D model of your part or describe its shape and material.",
  },
  {
    number: "02",
    title: "AI Matching",
    body: "Get instantly matched to manufacturer's experienced with similar parts and industry.",
  },
  {
    number: "03",
    title: "Review",
    body: "Analyze vetted suppliers with verified videos, financials, certifications & export data to see who is a good fit for you.",
  },
  {
    number: "04",
    title: "Execute",
    body: "Connect directly and execute on your terms",
  },
];

const componentCategories = [
  { imageUri: "/catalog/1/6-f75037ec81b4d248582c7ffd1e9a4afe.png", caption: "Cast Flange Bracket", subtext: "Stainless Steel" },
  { imageUri: "/catalog/1/2-e89d0d40ffc252df0083e53aea18cec6.png", caption: "Connecting Rod", subtext: "Carbon Steel" },
  { imageUri: "/catalog/1/3-1fa40ec5bcbf9fe8ba97d9bd66c83f26.png", caption: "Pipe Fitting", subtext: "Carbon Steel" },
  { imageUri: "/catalog/1/4-3dfa7094d086e1385dc8cdfecb8f5c0f.png", caption: "Pump Housing", subtext: "Aluminium Alloy" },
  { imageUri: "/catalog/1/13-325aefe3484b81a3342ac05b391bf663.png", caption: "Threaded Adapter", subtext: "Brass" },
  { imageUri: "/catalog/1/plastic-housing-677f478f03ffb147546e954f9f995667.png", caption: "Plastic Housing", subtext: "Plastic" },
];

const processCategories = [
  { imageUri: "/catalog/processes/1-28a76cb73396838d46656d15a52e2f19.jpg", caption: "Precision Machining" },
  { imageUri: "/catalog/processes/2-c86590f8a7ffe0da229de2e7709508e0.jpg", caption: "Forging" },
  { imageUri: "/catalog/processes/3-d4001e137a09493d7cdefbcdddd7fc8b.jpg", caption: "Die Casting" },
  { imageUri: "/catalog/processes/sheet-metal-fabrication.jpg", caption: "Sheet Metal Fabrication" },
  { imageUri: "/catalog/processes/5-c851ff0e520de1f90de3cdb630fcac9b.jpg", caption: "Injection Molding" },
  { imageUri: "/catalog/processes/4-203839a0f7104ec2f48a0dafdc503711.jpg", caption: "Investment Casting" },
];

const materialCategories = [
  { imageUri: "/catalog/materials/5-6dd2d5bf1210dcbc410c21112e285a75.jpg", caption: "Aluminium" },
  { imageUri: "/catalog/materials/4-5c0a39adfdada40bc2c0f08171d5c541.jpg", caption: "Carbon Steel" },
  { imageUri: "/catalog/materials/3-fd448b18b4e3bc4563001c64f5453af0.jpg", caption: "Brass" },
  { imageUri: "/catalog/materials/6-plastic-component.jpeg", caption: "Plastic" },
  { imageUri: "/catalog/materials/7-ductile-iron.jpg", caption: "Ductile Iron" },
  { imageUri: "/catalog/materials/2-be206455886d0f7f6b788cdee3485794.jpg", caption: "Stainless Steel" },
];

const industryCategories = [
  { imageUri: "/catalog/industries/automotive.jpg", caption: "Automotive" },
  { imageUri: "/catalog/industries/auto-aftermarket.jpg", caption: "Auto Aftermarket" },
  { imageUri: "/catalog/industries/industrial-equipment.jpg", caption: "Industrial Equipment" },
  { imageUri: "/catalog/industries/oil-and-gas.jpg", caption: "Oil & Gas" },
  { imageUri: "/catalog/industries/construction.jpg", caption: "Construction" },
  { imageUri: "/catalog/industries/agriculture.jpg", caption: "Agriculture" },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Accelerate Global Sourcing &amp; Contract Manufacturing with AI
            </h1>
            <h2 className="text-neutral-600 text-base md:text-lg font-normal mb-10">
              Find suppliers in India who&apos;ve made custom parts like yours — matched by geometry,
              application &amp; industry
            </h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm max-w-xl mx-auto">
              <p className="text-gray-900 font-semibold mb-1">We&apos;re rebuilding.</p>
              <p className="text-gray-600 text-sm mb-4">
                Join the waitlist to get early access when we relaunch.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* Static category imagery */}
        <div className="w-full bg-white py-3">
          <div className="max-w-7xl mx-auto px-4">
            <div className="my-4">
              <h2 className="text-gray-900 font-medium text-2xl mb-5">
                Industrial Components Sourced from India
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {componentCategories.map((c) => (
                <CategoryCard key={c.caption} {...c} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-2">
          <div className="max-w-7xl mx-auto px-4">
            <div className="my-3">
              <h2 className="text-gray-900 font-medium text-2xl mb-5">
                High-Precision Manufacturing Processes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {processCategories.map((c) => (
                <CategoryCard key={c.caption} {...c} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-2">
          <div className="max-w-7xl mx-auto px-4">
            <div className="my-3">
              <h2 className="text-gray-900 font-medium text-2xl mb-5">
                Featured Export-Ready Materials &amp; Grades
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {materialCategories.map((c) => (
                <CategoryCard key={c.caption} {...c} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-2 mb-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="my-3">
              <h2 className="text-gray-900 font-medium text-2xl mb-5">Industries We Serve</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {industryCategories.map((c) => (
                <CategoryCard key={c.caption} {...c} />
              ))}
            </div>
          </div>
        </div>

        {/* Stat tiles + secondary hero */}
        <section className="bg-gradient-to-b from-[#f653351a] to-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto">
              CBCatalyst helps purchasing teams identify new suppliers in India &amp; simplify sourcing
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
              AI-powered tool connects you directly with manufacturers, streamlining contract manufacturing
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-cb-orange text-2xl font-semibold text-center">50K+</h3>
                <p className="text-gray-700 text-center text-sm">Custom Parts Catalog</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-cb-orange text-2xl font-semibold text-center">20%</h3>
                <p className="text-gray-700 text-center text-sm">Average Cost Savings</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-cb-orange text-2xl font-semibold text-center">5 Days</h3>
                <p className="text-gray-700 text-center text-sm">Average Quote Time</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-cb-orange text-2xl font-semibold text-center">1000+</h3>
                <p className="text-gray-700 text-center text-sm">Verified Manufacturers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why CBCatalyst */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-2">Why CBCatalyst?</h2>
            <p className="text-center text-gray-600 mb-12">
              Find the Perfect Manufacturer in Minutes, Not Months
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyCbcCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:scale-95 transition-transform duration-300"
                >
                  <h3 className="text-cb-orange text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 text-lg">Trusted by procurement professionals worldwide</p>
            </div>
            <TestimonialCarousel
              testimonials={testimonials}
              autoPlay
              autoPlayInterval={5000}
              showDots
              showArrows
              pauseOnHover
              className="w-full"
            />
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Streamline Your Sourcing Process</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Experience end-to-end transparency from part upload till you receive your part
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-16 h-16 bg-cb-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="py-16 bg-gradient-to-b from-[#f653351a] to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-cb-orange mb-4">Founding Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-b from-cb-orange to-[#d94b2c] rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-semibold text-white mb-3">Nikhil Jaipuria</h3>
                <p className="text-base mb-4">
                  <em>Harvard MBA | BTech Computer Science</em>
                </p>
                <p className="text-base leading-relaxed">
                  Ex-Microsoft and Product leader at unicorn supply chain startups (Zetwerk, Convoy). Family
                  manufactures SS components for Auto T1s in Germany and the US.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    href="https://www.linkedin.com/in/nikhiljaipuria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="Nikhil Jaipuria on LinkedIn"
                  >
                    <svg className="w-6 h-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-cb-orange rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-semibold text-white mb-3">Gaurav Sahni</h3>
                <p className="text-base mb-4">
                  <em>IIT Kharagpur | B.Tech Computer Science</em>
                </p>
                <p className="text-base leading-relaxed">
                  Founding CTO at Full Harvest, a leading B2B marketplace addressing produce waste. Previously
                  held a senior engineering leadership position at Nomura.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    href="https://www.linkedin.com/in/ravemz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="Gaurav Sahni on LinkedIn"
                  >
                    <svg className="w-6 h-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA band */}
        <section id="waitlist" className="py-16 bg-gray-900">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-white mb-3">Get Early Access</h2>
            <p className="text-gray-300 mb-8">
              We&apos;re rebuilding CBCatalyst. Leave your email and we&apos;ll invite you the moment we&apos;re
              back online.
            </p>
            <WaitlistForm className="max-w-md mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
