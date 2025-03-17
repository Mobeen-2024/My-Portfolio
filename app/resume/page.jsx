"use client";

import * as React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

// experiance data
const experiance = {
  icon: "/assets/work/file.svg",
  title: "My Experiance",
  description:
    " I am a student . I like to do new this and i enjoy learning new this and the experiance that i had all this year is below.",
  item: [
    {
      company: "Web Development",
      position: "Junior Developer",
      duration: "Dec 2023 - Present",
    },
    {
      company: "Arduino",
      position: "Self",
      duration: "Summer 2023",
    },
    {
      company: "Elecronics Repairing",
      position: "Self",
      duration: "2022 - 2023",
    },
    {
      company: "The Jannah Institude",
      position: "Communication",
      duration: "2021 - 2022",
    },
    {
      company: "The Super Wing Collage",
      position: "Team-Head",
      duration: "2019 - 2021",
    },
    {
      company: "The Educator",
      position: "Computor Science - Student and Teacher.",
      duration: "2018 - 2019",
    },
  ],
};

// education data
const education = {
  icon: "/assets/work/file.svg",
  title: "My Education",
  description: " I like to learn AI in future and its uses in dailylife. ",
  item: [
    {
      institution: "JS Mastery",
      degree: " React in Deep  and Next.Js ",
      duration: "2025",
    },
    {
      institution: "Chia or React",
      degree: "React Framework and Tailwind",
      duration: "2024",
    },
    {
      institution: "Apna Collage",
      degree: "HTML , CSS and JavaScript",
      duration: "Dec 2023 - 2024",
    },
    {
      institution: "IELTS Academic",
      degree: "B1",
      duration: "25 March 2023",
    },
    {
      institution: "The Super Wing Collage",
      degree: "The Intermidate",
      duration: "2021 - 2023",
    },
    {
      institution: "The Educator",
      degree: "Matric Education",
      duration: "2018 - 2020",
    },
  ],
};

// Skills
const skills = {
  title: "My Skills",
  description:
    " I am a Junior Developer in the Web Development. The skills that i learn and have are below .",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

// about data
const about = {
  title: "About me",
  description:
    "My all information is available her and feel free to contact me.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "M Mobeen",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 328 5566943",
    },
    {
      fieldName: "Experiance",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "m.mobeen.2024@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English , Urdu",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl-py-0 '
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experiance'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 '>
            <TabsTrigger value='experiance'>Experiance</TabsTrigger>
            <TabsTrigger value='education'>Eduacation</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          {/* Content  */}
          <div className='min-h-[70px] w-full'>
            {/* experiance */}
            <TabsContent value='experiance' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experiance.title}</h3>
                <p className='max-w-[600px] text-white/60 max-auto xl:mx-0'>
                  {experiance.description}
                </p>

                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experiance.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-4 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-33'>
                            {/* dot  */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 ml-2'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 max-auto xl:mx-0'>
                  {education.description}
                </p>

                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-4 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-33'>
                            {/* dot  */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 ml-2'>
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-200'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value='about'
              className='w-full text-center xl:test-left'
            >
              <div className='flex flex-col gap-[30px] '>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[680px] text-white/60 max-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}:</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
