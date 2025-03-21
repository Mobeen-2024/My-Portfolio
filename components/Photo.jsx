"use client";

import { delay, easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className='w-full h-full  relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: easeIn },
        }}
        className='flex justify-center items-center '
      >
        {/* Image  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
          }}
          className='w-[300px] h-[300px] xlw-[798px] xlh-[798px] 
          mix-blend-lighten absolute'
        >
          <Image
            src='/assets/photo.jpg'
            priority
            quality={100}
            fill
            alt=''
            className='object-cover  rounded-full '
          />
        </motion.div>

        {/* circle  */}
        <motion.svg
          className='w-[300px] xl:w-[510px] h-[300px] xl:h-[510px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='251'
            stroke='#00ff99'
            strokeWidth='10'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: "20 10 0 0" }}
            animate={{
              strokeDasharray: ["15 128 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
