import Image from "next/image";

export default function BlogDetailsPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Full-width header image */}
      <div className="w-full h-[88vh] relative">
        <Image
          src="/image/blogs/Future PropTech Summit 2025 Transforming Real Estate with AI and Innovation.jpg"
          alt="Future PropTech Summit 2025"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-center relative">                                                                                                                                                                                                                                                                                                                    
        <h2 className="text-2xl font-extrabold mb-4">
          Future PropTech Summit 2025: Transforming Real Estate with AI and Innovation
        </h2>

        <p className="text-gray-800 text-base font-semibold mb-4">
          Welcome to the Future of Real Estate in Dubai.
        </p>
                                                                                                                                                  
        <p className="text-gray-800 text-base font-semibold mb-4">
          The global PropTech market, valued at $33.57 billion in 2023, is projected to soar to $89.93 billion by 2032, with an impressive CAGR of 11.9%. PropTech is driving unprecedented change in the real estate industry through AI, blockchain, IoT, and VR, enhancing transparency, efficiency, and investment opportunities. As a global leader in real estate innovation, Dubai is at the forefront of this transformation, championing initiatives like fractional ownership and digital property transactions.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4">
          The Future PropTech Summit 2025 will bring together industry leaders, startups, and investors to explore cutting-edge solutions shaping the real estate landscape. This premier event offers invaluable insights into how technology is redefining real estate management, investment, and sustainability.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Key Topics at the Summit</h3>

        <p className="text-gray-800 text-base font-semibold mb-4">
          <strong>AI and Real Estate Innovation:</strong><br />
          AI-driven technologies are revolutionizing property management, enhancing customer experiences, and streamlining investment strategies. From predictive analytics to AI-powered customer service tools, attendees will explore the latest advancements in real estate automation.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4">
          <strong>Fractional Ownership & Blockchain Investment Strategies:</strong><br />
          Fractional ownership democratizes real estate investment, making it more accessible to a broader audience. The summit will explore how blockchain technology ensures security, transparency, and efficiency in shared property ownership models.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4">
          <strong>Dubai’s Role in the Future of Real Estate:</strong><br />
          Dubai continues to lead as a global hub for real estate investments, leveraging AI and blockchain to drive the sector forward. Experts will discuss trends in the Dubai property market and how digital transformation is shaping the future of property investment.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Why Attend Future PropTech Summit 2025?</h3>

        <ul className="pl-5 text-gray-800 text-base font-semibold text-left list-none mb-4">
          <li>✔️ Gain exclusive insights into the latest PropTech innovations</li>
          <li>✔️ Connect with top industry professionals, investors, and startups</li>
          <li>✔️ Explore cutting-edge AI, VR, and blockchain solutions</li>
          <li>✔️ Discover investment opportunities in Dubai’s evolving real estate market</li>
          <li>✔️ Learn from industry pioneers through engaging panel discussions</li>
        </ul>

        <p className="text-lg font-extrabold mt-4">
          Join the Real Estate Revolution! The Future PropTech Summit 2025 is a must-attend event for real estate professionals, investors and tech innovators looking to stay ahead in an evolving industry.
        </p>

        <p className="text-base mt-1">
          Save the date and register now at{" "}
          <a
            href="https://www.futureproptechsummit.com"
            className="text-blue-500 underline"
          >
            Future PropTech Summit 2025
          </a>.
        </p>

        <p className="text-gray-400 text-right mt-4">by Askar Ali</p>

        <div className="relative w-full h-64 mt-6">
          <Image
            src="/image/blogs/futureproptechblogfooter.jpg"
            alt="Future PropTech Summit Dubai"
            width={1600}
            height={900}
            className="w-full h-auto rounded-lg shadow-md mt-6"
          />
        </div>
      </article>
    </div>
  );
}
