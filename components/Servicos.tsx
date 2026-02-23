"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TextMask } from "@/animations";
import ScrollRevealWrapper from '../ScrollRevealWrapper';
import { useRef } from "react";

export default function Servicos() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const cq = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const mq = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const phares1 = ["Nossos"];
	const phares1_2=["Serviços Chaves"];
	const phares2 = [
		"Oferecemos soluções completas e integradas",
		"para modernizar e proteger a infraestrutura",
		"tecnologica da sua empresa",
	];
	const phares3 = [
		"Oferecemos soluções completas e integradas para modernizar e proteger a infraestrutura tecnológica da sua empresa."
	];
	return (
		<div id="Servicos" className="w-full padding-x py-10 bg-gradient-to-b from-white to-[#d2dcff]">
			<div className="w-full flex flex-col gap-10">
				<div className="w-full flex items-center flex-col gap-3">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							type: "spring",
						}}
						viewport={{ once: true }}>
						
					</motion.div>
					<div>
						<h1 className="heading text-center font-bold leading-tight tracking-[-2.7px] bg-gradient-to-b from-black to-[#001E7F] bg-clip-text">
							<TextMask>{phares1}</TextMask>
							<span className="text-blue-800"><TextMask>{phares1_2}</TextMask></span>
						</h1>
					</div>
					<div>
						<h1 className="text-[#010D3E] font-dmSans paragraph font-normal leading-tight text-center block xm:hidden sm:hidden">
							<TextMask>{phares2}</TextMask>
						</h1>
						<h1 className="text-[#010D3E] font-dmSans paragraph font-normal leading-tight text-center hidden xm:block sm:block">
							<TextMask>{phares3}</TextMask>
						</h1>
					</div>
				</div>
				
			</div>







          

            {/* GRID 1 - 3 cards */}
            <ScrollRevealWrapper className="w-full"> 
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 pt-10 px-6 md:px-28">
                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl group p-6 flex flex-col h-full transition-transform transform hover:-translate-y-2">
                    <div className="flex sm:flex-wrap items-center gap-4">
                        <img src="icons/cyber-security.png" alt="CCTV" className="w-14 sm:w-12 md:w-20" />
                        <h3 className="text-sm md:text-xl xl:text-lg font-extrabold text-black dm-sans-uniquifier group-hover:text-blue-700">
                            Segurança e Vigilância (CCTV)
                        </h3>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-gray-700 flex-1">
                        Instalação completa e manutenção de sistemas de Circuito Fechado de Televisão.
                        Proteja seu patrimônio 24/7 com monitorização local e remota.
                    </p>
                </article>

                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl group p-6 flex flex-col h-full transition-transform transform hover:-translate-y-2">
                    <div className="flex sm:flex-wrap items-center gap-4">
                        <img src="icons/lan.png" alt="Redes" className="w-14 sm:w-12 md:w-20" />
                        <h3 className="text-sm md:text-xl xl:text-lg font-extrabold text-black dm-sans-uniquifier group-hover:text-blue-700">
                            Redes Estruturadas
                        </h3>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-gray-700 flex-1">
                        Planeamento e implementação de cablagem estruturada, racks e organização de datacenters
                        para máxima eficiência e organização.
                    </p>
                </article>

                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl group p-6 flex flex-col h-full transition-transform transform hover:-translate-y-2">
                    <div className="flex sm:flex-wrap items-center gap-4">
                        <img src="icons/servers.png" alt="Servidores" className="w-14 sm:w-12 md:w-20" />
                        <h3 className="text-sm md:text-xl xl:text-lg font-extrabold text-black dm-sans-uniquifier group-hover:text-blue-700">
                            Gestão de Servidores
                        </h3>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-gray-700 flex-1">
                        Configuração, manutenção e monitorização de servidores Windows e Linux. Garantimos alta
                        disponibilidade para suas aplicações críticas.
                    </p>
                </article>
                <article className="flex md:hidden lg:hidden xl:hidden bg-white rounded-xl shadow-md hover:shadow-2xl group p-6 flex-col h-full transition-transform transform hover:-translate-y-2">
                    <div className="flex sm:flex-wrap items-center gap-4">
                        <img src="icons/wifi.png" alt="WiFi" className="w-14 sm:w-16 md:w-20" />
                        <h3 className="text-sm md:text-xl xl:text-lg font-extrabold text-black dm-sans-uniquifier group-hover:text-blue-700">
                            Soluções Wireless
                        </h3>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-gray-700 flex-1">
                        Implementação de redes Wi‑Fi corporativas de alta densidade e longo alcance, com gestão centralizada
                        e segurança avançada.
                    </p>
                </article>
            </div>
            </ScrollRevealWrapper> 
                

            {/* GRID 2 - 3 cards */}
            <ScrollRevealWrapper className="w-full"> 
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 pt-10 px-6 md:px-28">
                <article className="hidden md:flex lg:flex xl:flex bg-white rounded-xl shadow-md hover:shadow-2xl group p-6 flex-col h-full transition-transform transform hover:-translate-y-2">
                    <div className="flex sm:flex-wrap items-center gap-4">
                        <img src="icons/wifi.png" alt="WiFi" className="w-14 sm:w-12 md:w-20" />
                        <h3 className="text-sm md:text-xl xl:text-lg font-extrabold text-black dm-sans-uniquifier group-hover:text-blue-700">
                            Soluções Wireless
                        </h3>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-gray-700 flex-1">
                        Implementação de redes Wi‑Fi corporativas de alta densidade e longo alcance, com gestão centralizada
                        e segurança avançada.
                    </p>
                </article>

                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl group p-6 flex flex-col h-full transition-transform transform hover:-translate-y-2">
                    <div className="flex sm:flex-wrap items-center gap-4">
                        <img src="icons/security.png" alt="Cibersegurança" className="w-14 sm:w-12 md:w-20" />
                        <h3 className="text-sm md:text-xl xl:text-lg font-extrabold text-black dm-sans-uniquifier group-hover:text-blue-700">
                            Cibersegurança
                        </h3>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-gray-700 flex-1">
                        Implementação de Firewalls, VPNs e políticas de segurança para proteger a sua rede contra ameaças.
                    </p>
                </article>

                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl group p-6 flex flex-col h-full transition-transform transform hover:-translate-y-2">
                    <div className="flex sm:flex-wrap items-center gap-4">
                        <img src="icons/suport.png" alt="Suporte" className="w-14 sm:w-12 md:w-20" />
                        <h3 className="text-sm md:text-xl xl:text-lg font-extrabold text-black dm-sans-uniquifier group-hover:text-blue-700">
                            Suporte Técnico
                        </h3>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-gray-700 flex-1">
                        Assistência técnica especializada presencial e remota para resolver problemas de hardware e software
                        com rapidez.
                    </p>
                </article>
            </div>
            </ScrollRevealWrapper> 

                                                {/************************************************/}
      		<div className='mt pb-10'>
           
             <ScrollRevealWrapper className="w-full" >      
            <div id="CCTV" className="gap-8 w-3/3 block lg:flex xl:flex justify-between transicao lg:mt-28 xl:mt-28 pt-5 px-10  md:px-28">
                  
                       <div className="w-3/3 lg:w-2/3 xl:w-[58%]  lg:pb-16 pt-16  transicao lg:px-3 xl:px-8 ">
                             <h2 className="mb-5 text-black text-2xl lg:text-3xl font-bold md:text-justify md:leading-relaxed md:tracking-wide ">Segurança e Vigilância (<span className="text-blue-600 font-semibold dm-sans-uniquifier"> CCTV </span>) </h2>
                              
                              <div className=" mb-10">
                                    <h3 className="text-gray-900 text-mdg md:text-lg mb-5 dm-sans-uniquifier md:text-justify md:leading-relaxed md:tracking-wide"> 
                                        Instalação completa e manutenção
                                        de sistemas de
                                         <span className="font-bold"> Circuito Fechado de Televisão (CCTV).
                                        </span> Proteja seu patrimônio 24/7 
                                        com monitorização local e remota.
                                    </h3>
                                    <h2 className="font-bold  mb-5 text-gray-600 text-md md:text-lg "> Pontos Chaves</h2>
                                    
                                    <ol className="space-y-3 list-disc marker:text-blue-800 ml-10 text-gray-800 font-bold text-[90%] dm-sans-uniquifier">
                                        <li>Câmaras IP e Analógicas de Alta Definição.</li> 
                                        <li>Configuração de DVR/NVR e Acesso Remoto. </li>
                                        <li>Sistemas de Vigilância Empresarial e Residencial. </li>
                                        <li>Manutenção Preventiva e Corretiva.</li> 
                                    </ol>
                                </div>
                        </div>
                        <div className="w-full  lg:w-2/3 xl:w-[42%] flex flex-col justify-end overflow-hidden rounded-3xl ">
                              
                            <div className="h-[350px] md:h-[500px] flex items-center justify-center md:px-5">
                                    <img
                                            
                                        src="/cameraman.jpg"
                                        alt="CCTV preview"
                                        className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[520px] lg:w-[520px] xl:h-[600px] xl:w-[600px] object-cover transition-transform duration-300 scale-120 sm:scale-125 xm:scale-125 lg:scale-125 hover:scale-125 transicao rounded-3xl"
                                    />
                             </div>
                             
                        </div>
            </div>
            </ScrollRevealWrapper>
           
            {/******************************************************************/}
            <ScrollRevealWrapper className="w-full">
            <div id="Redes" className="gap-8 w-full block lg:flex xl:flex lg:flex-row-reverse xl:flex-row-reverse justify-between transicao lg:mt-20 xl:mt-20 pt-5 lg:pt-10 xl:pt-10 px-10 md:px-28">
                  

    <div id="filho-1" className="lg:mr-auto w-full lg:w-2/3 xl:w-[58%] lg:pb-16 pt-16 transicao lg:px-3 xl:px-8">
        <h2 className="mb-5 text-black text-2xl lg:text-3xl md:text-justify md:leading-relaxed md:tracking-wide font-bold">
            Infraestrutura de <span className="text-blue-600 font-semibold dm-sans-uniquifier"> Redes Informáticas </span>
        </h2>
        <div className="mb-10">
            <h3 className="text-gray-900 text-mdg md:text-lg mb-5 dm-sans-uniquifier md:text-justify md:leading-relaxed md:tracking-wide">
                Projetamos, implementamos e mantemos <span className="font-bold"> redes de dados </span> rápidas e confiáveis, essenciais para o fluxo de trabalho moderno.
            </h3>
            <h2 className="font-bold mb-5 text-gray-600 text-md md:text-lg"> Pontos Chaves</h2>
            <ol className="space-y-3 list-disc marker:text-blue-800 ml-10 text-gray-800 font-bold text-[90%] dm-sans-uniquifier">
                <li>Estruturação de Cablagem Cat. 6/6A (Cabo de Rede).</li>
                <li>Instalação e Configuração de Routers, Switches e Access Points Wi-Fi.</li>
                <li>Otimização de Redes (LAN e WAN).</li>
                <li> Soluções de Fibra Ótica.</li>
            </ol>
        </div>
    </div>
                        
    <div id="filho-2" className="lg:ml-auto w-full lg:w-2/3 xl:w-[42%] flex flex-col justify-end overflow-hidden rounded-3xl ">
        <div className="h-[350px] md:h-[500px] flex items-center justify-center md:px-5">
            <img
                src="/network.jpg"
                alt="Redes preview"
                className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[520px] lg:w-[520px] xl:h-[600px] xl:w-[600px] object-cover transition-transform duration-300 sm:scale-125 xm:scale-125 scale-120 lg:scale-125 hover:scale-125 transicao rounded-3xl"
            />
        </div>
    </div>
</div>
</ScrollRevealWrapper>
        </div>
      </div>
	);
}
