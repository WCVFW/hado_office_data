import React from "react";
import CSmainmenu from "../CSmainmenu";

const LayoutAndFormatting: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-12 lg:px-24 py-12">
      {/* Hero Section */}
      <CSmainmenu/>
      <header className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Auity – Layout and Formatting Design Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Whether you are an individual looking for perfect typesetting at a reduced cost, or a publisher who needs a professional outsourcing partner, Nimble Auity is your one-stop destination for any kind of layout design.
        </p>
      </header>

      {/* Why Partner Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Why Partner with Nimble?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Obtain print ready files</li>
          <li>Avoid the costs, time, and effort involved in an in-house design team</li>
          <li>Avoid spending money on expert design professionals</li>
          <li>Avoid nimbling to non English speaking professionals</li>
          <li>Test our service quality completely FREE of cost</li>
          <li>Work in your own time zone</li>
          <li>
            We are a global nimble provider offering cost-effective illustrations, cover designs, and inner layouts. Over the last two decades we've successfully completed 120,000+ designs and aided 2,000+ global clients.
          </li>
        </ul>
      </section>

      {/* Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Layout and Formatting Design Services We Offer
        </h2>
        <p className="mb-4">
          Our page layout design and formatting services include the typesetting and layout of books, newsletters, brochures, etc., using only text or incorporating photographs, artwork and graphic elements to create highly illustrated publications. Nimble has a delivery center in India with qualified designers, illustrators, artists, DTP experts, etc., well versed in print-on-demand (POD) technologies.
        </p>
        <p className="mb-6">Some of the key services we offer include -</p>

        {/* Book Layout Design */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Book Layout Design Services</h3>
          <p className="mb-2">
            At Nimble we get books to press on time at the most affordable business costs. Based on the word count of your manuscript, Nimble can advise on an estimated pagination, depending on your choice of format. Our book designs are used for different genres of books including:
          </p>
          <ul className="list-disc list-inside grid md:grid-cols-2 gap-x-8">
            <li>Children's books</li>
            <li>Cook books</li>
            <li>Comic books</li>
            <li>Art books</li>
            <li>Story books</li>
            <li>Poetry books</li>
            <li>Coffee table books</li>
            <li>Newspapers and Journals</li>
            <li>Magazines</li>
            <li>AR/Newsletters/Fact Books</li>
            <li>Photo Albums</li>
            <li>Catalogs</li>
            <li>Diaries/Planners</li>
            <li>Content localization layout</li>
          </ul>
        </div>

        {/* Book Options */}
        <div className="mb-8">
          <h4 className="font-semibold">Option 1: Basic Book Layout Design</h4>
          <p className="mb-4">
            Basic formatting and layout is used for books with a straight narrative, the author's photo and the publisher's logo. Features include a template-based design, one round of free revision, and recommended for straight narrative books.
          </p>
          <h4 className="font-semibold">Option 2: Customized Book Layout Design</h4>
          <p>
            Nimble takes your layout and formatting ideas and does the overall layout and formatting including insertion of images, drop caps, fonts, chapter titles, page number placement, tables, charts, text boxes, graphs, lists, subheading, block quotes, footnotes, and poetry. Features include fully customizable designs, advanced formatting options, and two rounds of free revisions.
          </p>
        </div>

        {/* Magazine Design */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Magazine Design Services</h3>
          <p className="mb-2">
            We use magazine templates and convert them into attractive, marketable magazine page designs and layouts for formats including:
          </p>
          <ul className="list-disc list-inside grid md:grid-cols-2 gap-x-8">
            <li>Wedding Magazines</li>
            <li>Medical Magazines</li>
            <li>Photo Magazines</li>
            <li>Sports Magazines</li>
            <li>Fashion Magazines</li>
            <li>Community Magazines</li>
            <li>Automobile Magazines</li>
          </ul>
          <p className="mt-2">We also provide customized magazine layout design services.</p>
        </div>

        {/* Typesetting and Prepress */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Typesetting and Formatting Services</h3>
          <p>
            From the selection of the right typography to placement and sizing on the page, we ensure readability and marketability with a careful balance of white space and content.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Prepress Services</h3>
          <p>
            We ensure formats, resolutions, and fonts are print-ready, and handle proofing to check if colors, fonts, and other elements are in the right place. This includes live linking with Adobe InDesign, digital dummies for soft proofs, and pre-flight checking.
          </p>
        </div>
      </section>

      {/* Processes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Processes</h2>

        <h3 className="font-semibold mb-2">Book Layout Design Process</h3>
        <ol className="list-decimal list-inside mb-6 space-y-1">
          <li>Initial Discussion: Project page layout ideas, fonts, readability.</li>
          <li>Inputs: Customer provides proofread manuscript.</li>
          <li>First Layout: Nimble lays out text/images to ISO quality standards.</li>
          <li>Review: Draft sent for review.</li>
          <li>Edits: Changes applied if any.</li>
          <li>Publishing/Printing Guidelines provided.</li>
        </ol>

        <h3 className="font-semibold mb-2">Magazine Layout Process</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Upload: Customer uploads file securely.</li>
          <li>Download & Checking Input: Nimble checks inputs.</li>
          <li>Task Assigned to Designer.</li>
          <li>Quality Check by specialist.</li>
          <li>Customer Approval: Low-res PDF shared.</li>
          <li>Edits applied if any.</li>
          <li>Final Files uploaded securely.</li>
        </ol>
      </section>

      {/* Why Nimble */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Why You Should Choose Nimble Layout and Formatting Services
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quality – ISO standards ensure 100% accuracy</li>
          <li>SLA Adherence – 99% quality</li>
          <li>Turnaround – One business day delivery</li>
          <li>Reduced Costs – Save up to 60%</li>
          <li>Industry-Specific Software – Adobe InDesign, QuarkXpress, etc.</li>
          <li>Multiple Platforms – Font compatibility across Mac/PC</li>
          <li>Skilled Team – 20+ qualified designers & illustrators</li>
          <li>ISO Certified processes</li>
          <li>Free Trial – 2-4 page layout trial</li>
          <li>Data Security – 100% safe</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Nimble provided Magazine Layout Services to a US Entrepreneur: Designed a children's magazine following international standards.
          </li>
          <li>
            Nimble Aided a Leading Print Company with Prepress Requirements: Delivered cost savings using PrintShopMail and PlanetPress.
          </li>
          <li>Provided Prepress Services for an Arizona Client.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <blockquote className="border-l-4 border-green-500 pl-4 italic">
          "The quality of Artwork delivered during the trial period was exceptional and that helped us to decide on our new Nimble Partner from a couple of quotes from companies across the globe."
          <br />
          <span className="block mt-2 font-semibold">Director - Operations, Leading pharmaceutical company</span>
        </blockquote>
      </section>

      {/* Contact */}
      <section className="text-center bg-green-50 rounded-2xl p-8 shadow">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">
          Nimble Auity has been a pioneer in providing the best quality layout and formatting design services and a plethora of other creative design services. Contact us for accurate, cost-effective, and efficient artwork outsourcing.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
          Get a Free Quote
        </button>
      </section>
    </section>
  );
};

export default LayoutAndFormatting;
