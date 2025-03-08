'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Head from 'next/head';

type ProgramData = {
    title: string;
    specializations: string[];
    Overview?: String,
    topImage: string;
    bottomImage: string;
    // Make optional properties for both programs
    GeneralDefinition?: string;
    GlobalExposure?: string;
    NetworkingOpportunities?: string;
    IndustryCollaboration?: string;
    LeadershipDevelopment?: string;
    IndustryOrientedCurriculum?: string;
    EntrepreneurialFocus?: string;
    IndustryTieUpsAndInternships?: string;
    AGlobalPerspective?: string;
  };

export default function ProgramOverview() {
    const [activeProgram, setActiveProgram] = useState<'MBA' | 'PGDM'>('MBA');

    const programData: Record<string, ProgramData> = {
        MBA: {
            title: 'MBA',
            GeneralDefinition: 'An MBA is a general business degree that is accepted globally and is oriented towards executive training. It is concerned with business strategy, entrepreneurship, innovation, and management, so that candidates can assume executive responsibilities in any sector.',
            GlobalExposure: 'The insight into various business cultures and practices through the case studies and global business notes gives an international outlook to the masters in business administration students that prepare them for a global career.',
            NetworkingOpportunities: 'Keep in touch with industry leaders, alumni, and peers to develop a strong professional network.',
            IndustryCollaboration: 'Many MBA programs include internships, live projects, and corporate sponsor partnerships, which provide students meaningful hands-on experience working on real-world challenges.',
            LeadershipDevelopment: 'Curriculum emphasizes development in leadership qualities through group projects, leadership workshops, and executive mentoring.',
            specializations: [
                'Finance',
                'Marketing',
                'Human Resource',
                'Operations Management',
                'Supply Chain Management',
                'Business Analytics',
                'International Business',
                'Entrepreneurship',
            ],
            topImage: '/courses/pg.png',
            bottomImage: '/courses/pg1.png',
        },
        PGDM: {
            title: 'PGDM',
            Overview: 'It is a postgraduate diploma in management (PGDM) program, duly recognized and acknowledged by industries for academic rigor, which gives all its emphasis on developing advanced management expertise. Other than students desiring for higher positions in business corporations, entrepreneurs aspiring for expansion can take such a program.',
            specializations: [
                'Marketing',
                'Finance',
                'International Business',
                'Operations Management',
                'Business Analytics',
                'HR Management',
                'Strategy',
                'Retail Management',
            ],
            IndustryOrientedCurriculum: 'The PGDM is a program whose curriculum is industry-oriented. The program provides you with on-the-go modifications that allow for a seamless connection with what is practical in the actual business arena.',
            EntrepreneurialFocus: 'The program emphasizes entrepreneurship through the provision of its courses, thereby enabling one to garner skills for the establishment and growth of any venture.',
            IndustryTieUpsAndInternships: 'PGDM programs have these wonderful contacts with industries; work with live case studies, internships, knowing business leaders, etc.',
            AGlobalPerspective: 'PGDM, just like MBA courses, will help you get perspectives on global case studies, exposure to international business trends, and opportunities to learn from international leaders.',
            topImage: '/courses/pg.png',
            bottomImage: '/courses/pg1.png',
        },
    };

    const currentProgram = programData[activeProgram];

    return (
        <section className="bg-[#012060] relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32" aria-labelledby="program-overview-heading">
            <Head>
                <title>{`${activeProgram} Program Overview | Your Institution Name`}</title>
            </Head>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] -bottom-[200px] md:-bottom-[400px]">
                    <Image 
                        src="/homepage/ld.png" 
                        alt=""
                        width={600}
                        height={632}
                        priority
                        className="w-full h-auto"
                    />
                </div>
                <div className="absolute top-0 right-0 w-[300px] md:w-[600px]">
                    <Image 
                        src="/homepage/rd.png" 
                        alt=""
                        width={600}
                        height={600}
                        priority
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 id="program-overview-heading" className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
                    PROGRAM OVERVIEW
                </h2>
                
                <div className="flex justify-center gap-4 sm:gap-6 mb-12">
                    <Button
                        variant={activeProgram === 'MBA' ? 'default' : 'secondary'}
                        onClick={() => setActiveProgram('MBA')}
                        className="w-[120px] h-[48px] text-lg font-bold z-10"
                    >
                        MBA
                    </Button>
                    <Button
                        variant={activeProgram === 'PGDM' ? 'default' : 'secondary'}
                        onClick={() => setActiveProgram('PGDM')}
                        className="w-[120px] h-[48px] text-lg font-bold z-10"
                    >
                        PGDM
                    </Button>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10">{currentProgram.title}</h3>
                        
                        <div className="relative">
                            {/* Shadow moved to the right */}
                            <div className="absolute left-2 top-2 w-full h-full bg-[#BBD5FF] rounded-3xl shadow-[8px_8px_0px_#BBD5FF] z-0"></div>

                            {/* Main content card */}
                            <div className="bg-white rounded-3xl p-6 md:p-8 relative z-10">
                                <div className="space-y-6">

                                    {activeProgram === 'MBA' && (
                                        <>
                                            <div>
                                                <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">GENERAL DEFINITION:</h4>
                                                <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.GeneralDefinition}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">GLOBAL EXPOSURE:</h4>
                                                <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.GlobalExposure}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">NETWORKING OPPORTUNITIES:</h4>
                                                <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.NetworkingOpportunities}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">LEADERSHIP DEVELOPMENT:</h4>
                                                <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.LeadershipDevelopment}</p>
                                            </div>
                                        </>
                                    )}

                                    {activeProgram === 'PGDM' && (
                                        <>
                                        <div>
        <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">OVERVIEW:</h4>
        <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.Overview}</p>
    </div>
                                            <div>
                                                <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">INDUSTRY ORIENTED CURRICULUM:</h4>
                                                <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.IndustryOrientedCurriculum}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">ENTREPRENEURIAL FOCUS:</h4>
                                                <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.EntrepreneurialFocus}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">INDUSTRY TIE-UPS AND INTERNSHIPS:</h4>
                                                <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.IndustryTieUpsAndInternships}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">A GLOBAL PERSPECTIVE:</h4>
                                                <p className="text-[#0A2472] text-sm sm:text-base">{currentProgram.AGlobalPerspective}</p>
                                            </div>
                                        </>
                                    )}

                                    <div>
                                        <h4 className="text-[#0A2472] font-bold text-xl sm:text-2xl mb-2">SPECIALIZATIONS:</h4>
                                        <ul className="text-[#0A2472] list-disc list-inside space-y-1">
                                            {currentProgram.specializations.map((spec, index) => (
                                                <li key={index} className="text-sm sm:text-base">{spec}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Button className="bg-[#E98A15] text-white hover:bg-[#d17913]">
                                            LEARN MORE
                                        </Button>
                                        <Button className="bg-[#E98A15] text-white hover:bg-[#d17913]">
                                            DOWNLOAD BROCHURE
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10">
                            <div className="rounded-full overflow-hidden mb-4 relative">
                                <div className="w-2/3 sm:w-3/4 md:w-2/3 aspect-square relative">
                                    <Image 
                                        src={currentProgram.topImage || "/placeholder.svg"}
                                        alt={`${currentProgram.title} Program Top Image`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                            <div className="rounded-full overflow-hidden ml-auto w-2/3 sm:w-3/4 relative aspect-square">
                                <Image 
                                    src={currentProgram.bottomImage || "/placeholder.svg"}
                                    alt={`${currentProgram.title} Program Bottom Image`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
