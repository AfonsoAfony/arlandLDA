"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";
import { navVariants } from "@/motion";
import { MobileMenu } from "@/animations";
import { navigationItems } from "@/constants";
import {  logo } from "@/public";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 0) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	return (
		<>
			<motion.div
				initial="initial"
				whileInView="enter"
				variants={navVariants}
				className="fixed w-full top-0 z-50 xm:hidden sm:hidden">
				
				<motion.div
					className="w-full flex items-center justify-between gap-2 padding-x py-3 backdrop-blur-sm"
					animate={hidden ? { y: -9 } : { y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}>
					
						<Link href="/" className="cursor-pointer text-sm text-gray-300 hover:text-white">
							<Image
								src={logo}
								alt="logo"
								width={72}
								height={72}
							/>
						</Link>
					
					<div className="flex items-center gap-4 xm:hidden sm:hidden">
						{navigationItems.map((item) => (
							<Link
								href={item.href}
								key={item.id}
								className="text-[18px] md:text-[13px] font-normal leading-tight hover:text-[#1e40aff2] text-[#00000099]">
								{item.title}
							</Link>
						))}
						<Button
							onClick={() => window.location.href = "/#Servicos"}
							className="text-white bg-blue-700 py-2 px-4 md:px-2 md:text-[13px]"
							title="Solicitar Orçamento Grátis"
						/>
					</div>
				</motion.div>
			</motion.div>
			<div className="fixed w-full top-0 z-50 hidden xm:block sm:block">
				<MobileMenu />
			</div>
		</>
	);
}
