import Image from 'next/image';

export default function FeaturedBlogs() {
  return (
    <section className="bg-gray-100 py-12 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-10">FEATURED BLOGS</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative rounded-xl overflow-hidden border-2 p-2 shadow-lg shadow-[-11px_11px_#AA81D2]">
            <Image
              src="/image.png" 
              alt="Person working remotely"
              width={450}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="relative bg-white shadow-2xl rounded-xl p-6 border border-[#012060] max-w-lg w-full shadow-[12px_8px_#AA81D2]">
            <p className="text-gray-500 text-sm">22 July 2024 • 4 min</p>
            <h3 className="text-2xl font-extrabold text-blue-900 mt-3 leading-tight ">
              How Remote Work Drastically Improved My Design Skills
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace. Without the daily commute and office distractions, I found more time for deep, uninterrupted work, allowing me to refine my design techniques and creativity. Collaborating with a global team challenged me.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="px-5 py-2 border border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition">Design</button>
              <button className="px-5 py-2 border border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition">Product</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
