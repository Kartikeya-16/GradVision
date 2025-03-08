"use client";
import Head from "next/head";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState("MBA");
  const [isYearIIDetailsVisible, setIsYearIIDetailsVisible] = useState(false);

  const mbaSubjects = ["MBA Subject 1", "MBA Subject 2", "MBA Subject 3", "MBA Subject 4"];
  const pgdmSubjects = ["PGDM Subject 1", "PGDM Subject 2", "PGDM Subject 3", "PGDM Subject 4"];

  return (
    <>
      <Head>
        <title>Curriculum - MBA & PGDM | Your Institution Name</title>
      </Head>

      <section className="bg-gray-100 py-12" aria-labelledby="curriculum-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="curriculum-heading" className="text-3xl font-bold text-blue-900 mb-8 text-center">
            CURRICULUM
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab("MBA")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "MBA" ? "bg-[#012060] text-white" : "bg-gray-200 text-[#012060]"
                }`}
              >
                MBA
              </button>
              <button
                onClick={() => setActiveTab("PGDM")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "PGDM" ? "bg-[#012060] text-white" : "bg-gray-200 text-[#012060]"
                }`}
              >
                PGDM
              </button>
            </div>

            {activeTab === "MBA" && (
              <>
              <p className="text-gray-600 mb-6">
              The MBA curriculum covers core subjects such as Accounting, Economics, Marketing, Operations Management, Strategy, and Leadership. Thereafter, students are free to specialize in multiple directions depending on career interests, such as finance, marketing, human resources, or business analytics.            </p>
              </>
            )}

{activeTab === "PGDM" && (
              <>
              <p className="text-gray-600 mb-6">
              Just as in the case of an MBA, the PGDM curriculum includes a good mix of core foundational business subjects and a good sprinkling of electives. It lays strong emphasis on current industry practices, managerial capabilities, and problem-solving skills. The students are encouraged to choose electives according to their career aspirations such as digital marketing, supply chain, or entrepreneurship.     </p>          
              </>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{activeTab} Year I</h3>
              <table className="w-full border border-black border-collapse">
                <thead>
                  <tr className="bg-[#012060] text-white border border-black">
                    <th className="px-4 py-3 text-left border border-black">SUBJECT</th>
                    <th className="px-4 py-3 text-left border border-black">CREDITS</th>
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === "MBA" ? mbaSubjects : pgdmSubjects).map((subject, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100 border border-black" : "bg-white border border-black"}>
                      <td className="px-4 py-3 text-black border border-black">{subject}</td>
                      <td className="px-4 py-3 text-black border border-black">5</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">{activeTab} Year II</h3>
            <div className="flex justify-end">
              <button 
                onClick={() => setIsYearIIDetailsVisible(!isYearIIDetailsVisible)}
                className="p-2 rounded-full"
              >
                {isYearIIDetailsVisible ? <FiChevronUp size={24} color="#012060" /> : <FiChevronDown size={24} color="#012060" />}
              </button>
            </div>

            {isYearIIDetailsVisible && (
              <div className="mt-4">
                <p className="text-gray-600 mb-4">Details for Year II curriculum...</p>
                <table className="w-full border border-black border-collapse">
                  <thead>
                    <tr className="bg-[#012060] text-white border border-black">
                      <th className="px-4 py-3 text-left border border-black">SUBJECT</th>
                      <th className="px-4 py-3 text-left border border-black">CREDITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(activeTab === "MBA" ? mbaSubjects : pgdmSubjects).map((subject, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-100 border border-black" : "bg-white border border-black"}>
                        <td className="px-4 py-3 text-black border border-black">{subject}</td>
                        <td className="px-4 py-3 text-black border border-black">5</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}