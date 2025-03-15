"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      " I am a Junior Web Developer . The like doing my job as a Web Developer.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      " I am starting to learn a bit about UI design . And how to give it a UX look.",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      " At the time of school i like to design games logo for my friends. ",
  },
  {
    num: "04",
    title: "Electronics",
    description: " I am good with many electronic this as i know Arduino  ",
  },
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex justify-center items-center p-5 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'
              >
                {/* Top  */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {services.num}
                  </div>
                </div>

                {/* heading  */}
                <h2 className='text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {services.title}
                </h2>

                {/* description  */}
                <p className='text-white/60 '>{services.description}</p>

                {/* border  */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
