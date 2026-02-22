"use client";
import Links from "./Links";
import Link from "next/link";
import { navigationItems } from "@/constants";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { curve, menuSlide } from "@/motion";
import { usePathname } from "next/navigation";

export default function Navbar({ setIsActive }: any) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[#1e40aff2] fixed right-0 top-0 text-white"
    >
      <div className="box-border h-full z-[999] relative py-[30px] sm:pb-[90px] xm:pb-[90px] px-[60px] sm:px-[40px] xm:px-[40px] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[45px] md:text-[40px] sm:text-[35px] xm:text-[25px] mt-[60px]"
        >
          <div className="text-[#999999] border-b-[1px] border-[#999999] uppercase text-[12px] mb-[20px]">
            <p>Navegação</p>
          </div>
          {navigationItems.map((data, index) => (
            <Link
              key={index}
              href={data.href}
              onClick={() => setIsActive(false)} // fecha ao clicar
              className="text-white"
            >
              {data.title}
            </Link>
          ))}
        </div>

        <div className="flex w-full justify-between text-[12px] gap-[20px]">
          <Link href={"/"} onClick={() => setIsActive(false)}>
            <img src="icons/facebook.png" className="w-9" />
          </Link>
          <Link
            href={"https://wa.me/244924177547?text=Olá,%20Arland%20LDA%20quero%20mais%20informações%20Sobre%20"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsActive(false)}
          >
            <img src="icons/whatsapp.png" className="w-9" />
          </Link>
          <span className="flex items-center gap-2 whitespace-nowrap text-gray-100 hover:text-sky-400 text-xs">
            <img src="icons/email.png" className="w-9 h-9" alt="email" />
            <span>info@arland-lda.ao</span>
          </span>
        </div>
      </div>

      <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-[#1e40af] stroke-none">
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
      </svg>
    </motion.div>
  );
}
