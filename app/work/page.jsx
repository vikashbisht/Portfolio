"use client";

import { animate, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Brainwave",
    description:
      "Developed and deployed Brainwave, an innovative AI platform hosted on Vercel. The website explores the possibilities of AI chatting, offering users an open AI chat app that enhances productivity. Key features include AI-driven photo generation, video generation, and photo editing capabilities.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "UI/UX" }],
    image: "/assets/work/bg.png",
    live: "https://brainwave-zeta-seven.vercel.app/",
    github: "https://github.com/vikashbisht/brainwave",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Task Manager App",
    description:
      "Built a Task Manager app using Next.js and SQLite, enabling users to add, edit, delete, and mark tasks as completed, with due dates. Data is stored on Turso, and user authentication is provided via Google or GitHub. This project showcases expertise in full-stack development and secure data handling.",
    stack: [{ name: "Next.js" }, { name: "SQL Lite" }, { name: "Turso" }],
    image: "/assets/work/bg5.png",
    live: "https://task-manager-khaki-nu.vercel.app/sign-in",
    github: "https://github.com/vikashbisht/task-manager",
  },
  {
    num: "03",
    category: "FullStack",
    title: "E-book App",
    description:
      "Designed and implemented a secure eBook store web application using the MERN stack (MongoDB, Express.js,React, Node.js) with user authentication to restrict course access to authorized users.Deployed the application on a cloud platform, achieving high availability, scalability, and optimized performance.",
    stack: [{ name: "MongoDb" }, { name: "Express.js" }, { name: "React" }, { name: "Node.js" }],
    image: "/assets/work/bg2.png",
    live: "https://bookapp-inky.vercel.app/",
    github: "https://github.com/vikashbisht/BookApp",
  },
  {
    num: "04",
    category: "Wordpress",
    title: "Fashion Store",
    description:
      "Developed a fully functional and responsive e-commerce website for clothing utilizing WooCommerce, featuring product variations (sizes and colours), a secure checkout process, and integrated payment gateways(PayPal, Stripe) with an  an interactive system, order tracking, customer contactforms, and live chat support.",
    stack: [{ name: "Wordpress" }, { name: "WooCommerce" }],
    image: "/assets/work/bg3.png",
    live: "https://letscheckthiswebsite.lovestoblog.com/",
    github: "https://letscheckthiswebsite.lovestoblog.com/",
  },
  {
    num: "05",
    category: "Python Automation",
    title: "SpotiCharts",
    description:
      "Designed and implemented an interactive GUI application using Tkinter and Spotipy libraries, offering users an intuitive platform. Integrated Spotify API to dynamically retrieve and showcase the top 100 Billboard songs for any specified week, enabling seamless exploration and enjoyment of trending music.",
    stack: [{ name: "Python" }, { name: "Spotipy API" }, { name: "Tkinter" }],
    image: "/assets/work/bg6.png",
    live: "https://github.com/vikashbisht/Resume_Projects/tree/main/BillBoard_Finder",
    github: "https://github.com/vikashbisht/Resume_Projects/tree/main/BillBoard_Finder",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/*outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}</h2>
              <h3 className="text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h3>
              {/*description */}
              <p className="text-white/60">{project.description}</p>
              {/*stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name} {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>GitHub Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[470px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slide buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:jusitfy-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
