import Head from 'next/head';

export default function AdmissionDetails() {
  return (
    <>
      <Head>
        <title>Admission Details | Your Institution Name</title>
        <meta name="description" content="Learn about our admission process, important dates, and how to apply for our MBA and PGDM programs." />
      </Head>
      <section className="w-full py-12 bg-gray-50" aria-labelledby="admission-details-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="admission-details-heading" className="text-[#0A2472] text-3xl sm:text-4xl font-bold text-center mb-12">
            ADMISSION DETAILS
          </h2>

          <div className="relative">
            <div className="flex flex-col sm:flex-row justify-between mb-8">
              {['DATE', 'DATE', 'DATE', 'DATE'].map((date, index) => (
                <div key={index} className="relative w-full sm:w-1/4 mb-4 sm:mb-0">
                  <div className={`h-16 ${
                    index === 0 ? 'bg-[#4169E1]' :
                    index === 1 ? 'bg-[#5F9DF7]' :
                    index === 2 ? 'bg-[#7EC8E3]' :
                    'bg-[#79E0A9]'
                  } text-white flex items-center justify-center font-semibold ${
                    index === 3 ? 'clip-arrow-end' : 'clip-arrow'
                  }`}>
                    {date}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Application Start Date', 'Shortlisting Round', 'Interview Rounds', 'End Date'].map((title, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <h3 className="text-[#0A2472] text-xl font-bold text-center">
                    {title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <button className="bg-[#E98A15] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#d17913] transition-colors">
                APPLY NOW
              </button>
              <button className="bg-[#E98A15] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#d17913] transition-colors">
                CHECK ELIGIBILITY
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}