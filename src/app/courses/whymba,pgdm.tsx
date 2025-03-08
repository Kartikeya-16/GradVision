import Image from "next/image";

export default function ComparisonSection() {
  return (
    <section
      className="w-full mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="comparison-heading"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {/* Left Image (hidden on small screens) */}
        <div className="w-full lg:w-1/4 flex justify-center hidden lg:block">
          <Image
            src="/courses/mba.png"
            alt="Illustration representing the MBA program"
            width={400}
            height={600}
            className="object-contain w-full h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-full"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/4 flex flex-col justify-center text-center lg:text-left">
          <h1
            id="comparison-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1B1B3D] mb-6 sm:mb-8"
          >
            WHY DO MBA OR PGDM?
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia.
          </p>
        </div>

        {/* Right Image (hidden on small screens) */}
        <div className="w-full lg:w-1/4 flex justify-center hidden lg:block">
          <Image
            src="/courses/pgdm.png"
            alt="Illustration representing the PGDM program"
            width={400}
            height={600}
            className="object-contain w-full h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
