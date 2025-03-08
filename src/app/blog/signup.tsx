export default function Newsletter() {
  return (
    <section className="relative bg-gray-100 py-12 px-6 flex flex-col md:flex-row justify-center items-center h-auto md:h-[400px]">
      {/* Background Images */}
      <div
        className="hidden md:block absolute left-0 top-[75%] transform -translate-y-1/2 w-[411px] h-[700px] bg-no-repeat bg-contain bg-left"
        style={{ backgroundImage: "url('/blog/ld.png')" }}
      ></div>
      <div
        className="hidden md:block absolute right-0 top-[59%] transform -translate-y-1/2 w-[374px] h-[461px] bg-no-repeat bg-contain bg-right"
        style={{ backgroundImage: "url('/blog/rd.png')" }}
      ></div>

      {/* Newsletter Content */}
      <div className="max-w-2xl text-center relative z-10 px-4">
        <h2 className="text-[36px] md:text-[50px] font-bold text-[#012060] leading-tight">
          Sign up to our <span className="font-extrabold">Newsletter</span>
        </h2>
        <p className="text-black text-[14px] md:text-[16px] font-bold mt-2">
          Stay up to date with the latest news announcements and articles
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-orange-400 px-4 py-3 rounded-t-lg md:rounded-l-lg md:rounded-t-none focus:outline-none w-full md:w-64 placeholder-orange-400 text-gray-600 text-[14px] bg-transparent"
          />
          <button className="bg-orange-400 text-white px-6 py-3 rounded-b-lg md:rounded-r-lg md:rounded-b-none font-semibold text-[14px] w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
