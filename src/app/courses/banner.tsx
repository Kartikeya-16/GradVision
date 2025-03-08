import Link from 'next/link';

export default function Banner() {
  return (
    <div className="bg-orange-500 text-white text-sm sm:text-base" role="banner">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        <p className="mb-4 sm:mb-0 text-center sm:text-left">
          Deferred from your top school?{' '}
          <span role="img" aria-label="sad face">
            😢
          </span>{' '}
          Craft a compelling deferral letter to improve your chances of admission.
        </p>
        <Link
          href="/deferral-letter-guide"
          className="bg-blue-900 text-white py-2 px-4 sm:px-6 rounded-md hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-sm sm:text-base"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

