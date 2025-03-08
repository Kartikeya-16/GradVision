import Image from 'next/image';
import Link from 'next/link';

export default function ApplicationBanner() {
  return (
    <section className="relative h-64 md:h-80" aria-labelledby="application-banner-heading">
      <Image
        src="/homepage/app.png"
        alt="Application background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
      <div className="relative w-full h-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-start">
        <h2 
          id="application-banner-heading"
          className="text-2xl md:text-4xl font-bold text-white mb-6"
        >
          Submit your application with confidence!
        </h2>
        <Link 
          href="/apply"
          className="bg-orange-500 text-white text-lg font-medium px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}

