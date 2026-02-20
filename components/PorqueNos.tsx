"use client";

import { motion } from "framer-motion";
import { Heading } from "@/components";
import ScrollRevealWrapper from "../ScrollRevealWrapper";
import { useState } from "react";

export default function PorqueNos() {
  const phares = ["Porquê Nós"];
  const phares1 = ["Porquê Escolher a Arland LDA?"];

  const cards = [
    {
      id: "experiencia",
      title: "EXPERIÊNCIA",
      short: "Anos de experiência a fornecer soluções tecnológicas de topo.",
      detail: "Equipa especializada com projetos entregues em vários setores. Processos testados e documentação completa.",
      icon: "/icons/done.png",
      color: "border-blue-800 bg-white",
    },
    {
      id: "suporte",
      title: "SUPORTE RÁPIDO",
      short: "Técnicos disponíveis para resolver problemas de rede e segurança com agilidade.",
      detail:
        "Helpdesk e intervenção presencial com SLAs definidos. Suporte remoto 24/7 quando necessário.",
      icon: "/icons/done.png",
      color: "border-blue-800 bg-white",
    },
    {
      id: "qualidade",
      title: "QUALIDADE CERTIFICADA",
      short: "Utilizamos apenas equipamentos e cablagem de fabricantes reconhecidos.",
      detail:
        "Parcerias com fornecedores líderes e testes de qualidade em cada entrega para garantir fiabilidade.",
      icon: "/icons/done.png",
      color: "border-blue-800 bg-white",
    },
    {
      id: "personalizadas",
      title: "SOLUÇÕES PERSONALIZADAS",
      short: "Desde pequenas instalações a grandes infraestruturas empresariais.",
      detail:
        "Soluções desenhadas à medida, escaláveis e com roadmap de evolução para acompanhar o crescimento.",
      icon: "/icons/done.png",
      color: "border-blue-800 bg-white",
    },
  ];

  const [active, setActive] = useState<string | null>(null);

  return (
    <div id="PorqueNos" className="w-full padding-x py-20 bg-white xm:py-10 sm:py-10">
      <div className="max-w-7xl mx-auto">
        <div className=" lg:hidden xl:hidden flex flex-col w-full  gap-8 items-center">
          <Heading classname="heading font-bold" title={phares} />
          <Heading classname="paragraph text-center" title={phares1} />
        </div>

        {/* Layout: on small screens image first then content.
            On lg+ screens image moves to the right and content stays left. */}
        <div className="lg:mt-10 xl:mt-10 px-6 md:px-12 lg:px-0">
          <div className="flex flex-col lg:flex-row xl:flex-row gap-8 items-start">
            {/* Image: default order-1 (mobile first), on lg order-2 (move to right) */}
            <div id="divimg" className="order-1 lg:order-2 xl:order-2 w-full lg:w-5/12 xl:w-5/12  flex items-center justify-center rounded-2xl overflow-hidden">
              <div  className="hidden lg:block xl:block ">
              <motion.div
								
								animate={{ y: [-30, 30] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}
								className=" w-full flex items-center justify-center">
								<img
                  
									src="/why1.jpg"
									alt="porque nos"
                   className="mt-6 w-[300px] lg:w-[500px] xl:w-[550px]  h-auto object-cover transition-transform duration-300 hover:scale-105"
             
								/>
								
							</motion.div>
              </div>
              <div  className="block lg:hidden xl:hidden">
							<motion.div
								
								animate={{ y: [-30, 30] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}
								className=" w-full flex items-center justify-center">
								<img
									src="/why3.png"
									alt="porque nos"
                   className=" mt-8 w-[300px] md:w-[400px]  h-auto object-cover transition-transform duration-300 hover:scale-105"
             
								/>
								
							</motion.div>
              
            </div>
            </div>

            {/* Content: default order-2 (mobile below image), on lg order-1 (left column) */}
            <div id="conteudo" className="order-2 lg:order-1 xl:order-1 w-full lg:w-7/12 xl:w-7/12">
              {/* Cards grid */}
              <div className=" lg:flex xl:flex hidden mb-6 flex-col w-full  gap-8 items-center">
                <Heading classname="heading font-bold" title={phares} />
                <Heading classname="paragraph text-center" title={phares1} />
              </div>
              <ScrollRevealWrapper className="w-full mb-6">
                <div id="card" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {cards.map((c) => {
                    const isOpen = active === c.id;
                    return (
                      <motion.button
                        key={c.id}
                        onClick={() => setActive(isOpen ? null : c.id)}
                        aria-expanded={isOpen}
                        className={`text-left border rounded-2xl p-5 transition-shadow duration-300 shadow-sm hover:shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 ${c.color}`}
                        whileTap={{ scale: 0.995 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-blue-800 font-semibold xl:text-xl lg:text-xl text-[90%] sm:text-center sm:mr-4">{c.title}</h3>
                            <p className="mt-3 text-gray-700 text-sm md:text-base">{c.short}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <img src={c.icon} alt="" className="xl:w-10 lg:w-10 w-6 xl:h-10 lg:h-10 h-6 sm:hidden object-contain" />
                          </div>
                        </div>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.39, ease: "easeInOut" }}
                          className="overflow-hidden mt-4"
                        >
                          <p className="text-gray-800 text-sm leading-relaxed">{c.detail}</p>
                          <div className="mt-4 flex items-center gap-3">
                            <a
                              href="#Contactar"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="inline-flex items-center px-4 py-2 text-sm sm:text-[65%] bg-blue-800 text-white rounded-lg"
                            >
                              Contacte-nos
                            </a>
                          </div>
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </div>
              </ScrollRevealWrapper>

              {/* Highlights / Info boxes below cards (keeps inside left column) */}
              <ScrollRevealWrapper className="w-full mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h4 className="text-black font-bold text-lg">Soluções pensadas para si</h4>
                    <p className="mt-3 text-gray-700">
                      Combinamos experiência técnica e suporte rápido para garantir que a sua infraestrutura esteja sempre disponível.
                    </p>
                    <div className="mt-4 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white rounded-full text-sm">
                        <img src="/icons/checkmark.png" alt="" className="w-4 h-4" />
                        Fiabilidade
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2  bg-white border rounded-full text-sm">
                        Escalável
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between bg-white border rounded-xl p-4 shadow-sm">
                      <div>
                        <h5 className="font-semibold text-sm text-gray-900">Implementação Rápida</h5>
                        <p className="text-xs text-gray-600">Planos e execução sem perda de produtividade.</p>
                      </div>
                      <div className="text-blue-700 font-bold">+24h</div>
                    </div>

                    <div className="flex items-center justify-between bg-white border rounded-xl p-4 shadow-sm">
                      <div>
                        <h5 className="font-semibold text-sm text-gray-900">Garantia</h5>
                        <p className="text-xs text-gray-600">Equipamentos e serviços com garantia.</p>
                      </div>
                      <div className="text-blue-700 font-bold">12m</div>
                    </div>
                  </div>
                </div>
              </ScrollRevealWrapper>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
