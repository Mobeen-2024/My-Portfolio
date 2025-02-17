import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Component } from "lucide-react";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24"
        >
          
          {/* text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl ">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello. I'm <br />
              <span className="text-accent">M Mobeen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              This is my portfolio that i created for my-self for increasing my
              skills as a Web Developer
            </p>

            {/* btn and social */}
            <div className="flex flex-col xl:flex-row gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-8">
                <Social
                  containerStyles="flex  gap-6"
                  iconStyling={
                    "w-9 h-9 border border-accent rounded-full justify-center item-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl-order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
