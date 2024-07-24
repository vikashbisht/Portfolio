"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-9756345567",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "vikashbisht91@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Uttarakhand, India"
  }
]

import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* Contact Form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" method="post" action="https://formspree.io/f/mqkvzkej">
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">Whether you're looking to create a new website, enhance an existing one, or need support with specific web technologies, I'm ready to help. Let's collaborate and bring your digital ideas to life!</p>
          {/*input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input name="firstname" type="firstname" placeholder="FirstName" />
            <Input name="lastname" type="lastname" placeholder="LastName" />
            <Input name="email" type="email" placeholder="Email Address" />
            <Input name="phone" type="phone" placeholder="Phone Number" />
          </div>
          {/* Select */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a value"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="est">Web Development</SelectItem>                
                <SelectItem value="mst">E-Commerce</SelectItem>
                <SelectItem value="cst">Hire Me for a Job</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Textarea */}
          <Textarea className="h-[200px]" placeholder="Type your message here"/>
          {/* Button */}
          <Button size="md" className="max-w-40">Send Message</Button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item,index)=> {
              return <li key={index} className="flex items-center gap-10">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
    </motion.section>
  )
}
export default Contact