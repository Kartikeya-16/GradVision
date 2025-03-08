import React from "react";
import naac from "../../assets/naac.png"
import nirf from "../../assets/nirf.png"
import aacsb from "../../assets/aacsb.png"
import asso from "../../assets/asso.png"
import saqs from "../../assets/saqs.png"
import amdisa from "../../assets/Amdisa.png"
import Image from "next/image";

const accreditations = [
  {
    title: "Accredited with A++ Grade, by NAAC - 2022",
    icon: naac
  },
  {
    title: "#39 on Overall basis, All Over India for its MBA Program, NIRF Ranking 2024",
    icon: nirf
  },
  {
    title: "Accredited for its Regular MBA Program of IBS Hyderabad byAACSB",
    icon: aacsb
  },
  {
    title: "Member, The Association of Common wealth Universities (ACU)",
    icon: asso
  },
  {
    title: "Accredited by SAQS (South Asian Quality Standards),AMDISA",
    icon:saqs
    },
  {
    title: "CDOE is an Institutional Member of AMDISA",
    icon:amdisa
  }
];

const AccreditationsSection = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4  text-center">
        <h2 className="text-blue-950 text-2xl font-bold mb-6">
          Accreditations, Recognitions, Rankings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 ">
          {accreditations.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg "
            >
              <Image
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <p className="text-sm text-gray-600 font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationsSection;

