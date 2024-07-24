"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We provide web development services for all types of businesses. Whether you need a new website built from the ground up or want to update and modernize an existing site,we have the expertise to deliver solutions.",
  },
  {
    num: "02",
    title: "Python App Development",
    description:
      "We specialize in creating custom Python applications to streamline your business processes. Whether you need web apps, automation, or data solutions, we deliver high-quality software tailored to your needs.",
  },
  {
    num: "03",
    title: "Wordpress Development",
    description:
      "We offer WordPress development services to build and enhance your website. From custom themes to plugin integration, we create user-friendly, responsive sites that meet your goals.",
  },
  {
    num: "04",
    title: "E-commerce",
    description:
      "We can help you build a user-friendly and secure e-commerce website. We can also help you with payment processing, shipping integration, ensuring a smooth experience.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href="/contact"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                    transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
