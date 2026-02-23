

"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Heading } from "@/components";
import { imageAnimation, textAnimation } from "@/motion";
import { ArrowRight} from "@/public";
import { useRef,useState,useEffect } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


export default function Hero() {
	const container = useRef(null);
	const [activeSlide, setActiveSlide] = useState(0);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const cq = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const mq = useTransform(scrollYProgress, [0, 1], [0, -200]);

	const phares1 = ["Soluções tecnológicas para a"];
	const phares1_1 = [" sua infraestrutura informática"];
	const phares1_2 = [
		" Especialistas em Instalação e Manutenção de Redes Informáticas e Sistemas de CCTV de alta performance para proteger e conectar o seu negócio."
	];
{/******************************************* */}
	const phares2 = ["Conectividade sem limites"];
	const phares2_1 = ["para o seu negócio"];
	const phares2_2 = [
		"Oferecemos soluções wireless de alta performance que garantem mobilidade e estabilidade. Projetamos redes Wi‑Fi seguras e escaláveis para acompanhar o crescimento da sua empresa." 
	];
{/******************************************* */}
const phares3 = ["Proteção digital e gestão"];
	const phares3_1 = ["inteligente de servidores"];
	const phares3_2 = [
		"Garantimos cibersegurança e gestão de servidores para proteger seus dados. Com suporte técnico especializado, mantemos sua operação segura, eficiente e confiável."
	];

 useEffect(()=>{
        
        //efeito show e transição no slide
        document.querySelector("#image_slide1")?.classList.add('show')
    }, [])
	return (
		<div
			ref={container}
			className="w-full h-[738px] xm:min-h-screen sm:min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)]">
			
		<Swiper 
		onSlideChange={(swiper) => {
			setActiveSlide(swiper.activeIndex)
			const image_slide1=document.querySelector("#image_slide1")
			const image_slide2=document.querySelector("#image_slide2")
			const image_slide3=document.querySelector("#image_slide3")

		  		
                  
				 if (swiper.activeIndex==0) {
                    //remover do 2 que último
                    image_slide3?.classList.remove('show')
                    //add no primeiro
                    image_slide1?.classList.add('show')
                   
                }

                else if (swiper.activeIndex==1){
                //remover do 0
                    image_slide1?.classList.remove('show')
                //add no 1 conteudo:
                    image_slide2?.classList.add('show')

                 }

                  else if (swiper.activeIndex==2){
                //remover do 1
                    image_slide2?.classList.remove('show')
                //add no 2 conteudo:
                    image_slide3?.classList.add('show')

                 }
		}}
          
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={40}
        centeredSlides={true}
        effect="cube"
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false} 
        className=' h-[738px]'>
			 <SwiperSlide id="slide-1" >
				
					<div className="flex w-full padding-x h-full items-center  gap-4 justify-between overflow-hidden xm:flex-col sm:flex-col xm:pt-20 sm:pt-20">
						<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-6 xm:gap-4 sm:gap-4 relative xm:flex-col sm:flex-col">
						

							<div>
								<Heading
									key={`heading-0-title1-${activeSlide === 0 ? "active" : "idle"}`}
									classname="heading font-bold text-blue-800"
									title={phares1}
								/>
								<Heading
									key={`heading-0-title2-${activeSlide === 0 ? "active" : "idle"}`}
									classname="heading font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent "
									title={phares1_1}
								/>
							</div>
							<div>
								<Heading
									key={`heading-0-paragraph-${activeSlide === 0 ? "active" : "idle"}`}
									classname="paragraph font-normal  "
									title={phares1_2}
								/>
							</div>
							<div className="overflow-hidden">
								<motion.div
									className="flex gap-4 items-center"
									
									key={activeSlide} // força recriação do componente
									variants={textAnimation}
									initial="initial"
									animate="enter">
									<Button
										onClick={() => window.location.href = "/#"}
										
										className="text-white bg-blue-800 py-2 px-4"
										title="Orçamento Grátis"
									/>
									<div className="flex items-center gap-2">
										<Button
											onClick={() => window.location.href = "/#Servicos"}
											className="text-black"
											title="Nossos Serviços"
										/>
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											width={20}
											height={20}
											className="text-black"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="w-1/2 xm:w-full sm:w-full h-full relative items-center justify-center flex">
							
							<motion.div
								
								animate={{ y: [-30, 30] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}
								className=" w-full flex items-center justify-center">
								<Image
									id="image_slide1"
									src="/server2.png"
									alt="server"
									width={500}
									height={500}
									className=" hide xm:w-[260px] xm:h-[260px] sm:w-[320px] sm:h-[320px] object-cover"

								/>
								
							</motion.div>
							
							<motion.div
								className="absolute -right-16 bottom-10 rotate-[30deg] xm:hidden sm:hidden"
								variants={imageAnimation}
								key={activeSlide} // força recriação do componente
								initial="initial"
								animate="enter"
								style={{ y: mq }}>
								<Image
									src="/wifi2.png"
									alt="wifi-img"
									width={200}
									height={200}
									className=" md:w-[140px] md:h-[140px] md:mr-8 lg:mr-12"
								/>
							</motion.div>
							<motion.div
								className="absolute -left-20 top-20 xm:hidden sm:hidden"
								variants={imageAnimation}
								key={activeSlide} // força recriação do componente
								initial="initial"
								animate="enter"
								style={{ y: cq }}>
								<Image
									src="/camara.png"
									alt="camara-img"
									width={200}
									height={200}
									className="lg:w-[170px] lg:h-[170px] md:w-[140px] md:h-[140px] "
								/>
							</motion.div>
						
						</div>
					</div>

					
			 </SwiperSlide>
{/*********************************************************************************************** */}
			 <SwiperSlide id="slide-2" >
						
					<div id="slideContent_1" className="flex w-full padding-x h-full items-center  gap-4 justify-between overflow-hidden xm:flex-col sm:flex-col xm:pt-20 sm:pt-20">
						<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-6 xm:gap-4 sm:gap-4 relative xm:flex-col sm:flex-col">
							
							<div>
								<Heading
									key={`heading-0-title1-${activeSlide === 0 ? "active" : "idle"}`}
									classname="heading font-bold text-blue-800"
									title={phares2}
								/>
								<Heading
									key={`heading-0-title2-${activeSlide === 0 ? "active" : "idle"}`}
									classname="heading font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent "
									title={phares2_1}
								/>
							</div>
							<div>
								<Heading
									key={`heading-0-title3-${activeSlide === 0 ? "active" : "idle"}`}
									classname="paragraph font-normal  "
									title={phares2_2}
								/>
							</div>
							<div className="overflow-hidden">
								<motion.div
									className="flex gap-4 items-center"
									variants={textAnimation}
									key={activeSlide} // força recriação do componente
									initial="initial"
									animate="enter"
									>
									<Button
										onClick={() => window.location.href = "/#"}
										
										className="text-white bg-blue-800 py-2 px-4"
										title="Orçamento Grátis"
									/>
									<div className="flex items-center gap-2">
										<Button
											onClick={() => window.location.href = "/#Servicos"}
											className="text-black"
											title="Nossos Serviços"
										/>
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											width={20}
											height={20}
											className="text-black"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						<div id="image_slide2" className="hide w-1/2 xm:w-full sm:w-full h-full relative items-center justify-center flex">
								<div className="hidden md:block lg:block xl:block">
									<Image
										src="/man3.png"
										alt="man"
										width={800}
										height={400}
										className="w-[70%] mt-28 md:mt-38 xl:w-[450px] lg:w-[440px] md:w-[440px] h-auto object-cover"
									/>
								</div>
								
								
							<motion.div
								animate={{ y: [-30, 30] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}
								className="flex md:hidden lg:hidden xl:hidden  w-full items-center justify-center">
								<Image
									
									src="/man8.png"
									alt="cog-hero-img"
									width={200}
									height={200}
									className="  xm:w-[200px] xm:h-[290px] sm:w-[300px] sm:h-[390px] object-cover"

								/>
							</motion.div>
							</div>
					</div>

			 </SwiperSlide>
{/******************************************************************************************** */}
			 <SwiperSlide id="slide-3" >
					
					<div id="slideContent_2" className="flex w-full padding-x h-full items-center gap-4 justify-between overflow-hidden xm:flex-col sm:flex-col xm:pt-20 sm:pt-20">
						<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-6 xm:gap-4 sm:gap-4 relative xm:flex-col sm:flex-col">
							
							<div>
								<Heading
									key={`heading-0-title1-${activeSlide === 0 ? "active" : "idle"}`}
									classname="heading font-bold text-blue-800"
									title={phares3}
								/>
								<Heading
									key={`heading-0-title2-${activeSlide === 0 ? "active" : "idle"}`}
									classname="heading font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent "
									title={phares3_1}
								/>
							</div>
							<div>
								<Heading
									key={`heading-0-title3-${activeSlide === 0 ? "active" : "idle"}`}
									classname="paragraph font-normal  "
									title={phares3_2}
								/>
							</div>
							<div className="overflow-hidden">
								<motion.div
									className="flex gap-4 items-center"
									variants={textAnimation}
									key={activeSlide} // força recriação do componente
									initial="initial"
									animate="enter"
									>
									<Button
										onClick={() => window.location.href = "/#"}
										
										className="text-white bg-blue-800 py-2 px-4"
										title="Orçamento Grátis"
									/>
									<div className="flex items-center gap-2">
										<Button
											onClick={() => window.location.href = "/#Servicos"}
											className="text-black"
											title="Nossos Serviços"
										/>
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											width={20}
											height={20}
											className="text-black"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="w-1/2 xm:w-full sm:w-full h-full relative items-center justify-center flex">
							
							<motion.div
								animate={{ y: [-30, 30] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}
								className="w-full flex items-center justify-center">
								<Image
									id="image_slide3"
									src="/bg2.png"
									alt="cog-hero-img"
									width={800}
									height={400}
									className="xm:mr-8 sm:mr-12 hide w-[100%] xm:w-full sm:w-full h-auto object-cover"
								/>
							</motion.div>
							
							<motion.div
								className="absolute -right-16 bottom-10 rotate-[30deg] xm:hidden sm:hidden"
								variants={imageAnimation}
								key={activeSlide} // força recriação do componente
								initial="initial"
								animate="enter"
								style={{ y: mq }}>
								<Image
									src="/bg.jpg"
									alt="noodle-hero-img"
									width={200}
									height={200}
								/>
							</motion.div>
							<motion.div
								className="absolute -left-20 top-20 xm:hidden sm:hidden"
								variants={imageAnimation}
								key={activeSlide} // força recriação do componente
								initial="initial"
								animate="enter"
								style={{ y: cq }}>
								<Image
									src="/bg3.png"
									alt="cylinder-hero-img"
									width={200}
									height={200}
								/>
							</motion.div>
						</div>
					</div>
			 </SwiperSlide>
        </Swiper>

		</div>
	);
}
