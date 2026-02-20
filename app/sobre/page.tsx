"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button, Footer, Navbar } from "@/components";
import ScrollRevealWrapper from "@/ScrollRevealWrapper";
import { textAnimation, imageAnimation } from "@/motion";

export default function Sobre() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openValue, setOpenValue] = useState<string | null>(null);

  const values = [
    { id: "confianca", title: "CONFIANÇA", desc: "Construímos relações transparentes e entregamos o que prometemos." },
    { id: "experiencia", title: "EXPERIÊNCIA TÉCNICA", desc: "Investimos continuamente na formação da nossa equipa e nas últimas tecnologias." },
    { id: "responsabilidade", title: "RESPONSABILIDADE", desc: "Assumimos a responsabilidade pelo funcionamento contínuo e pela segurança dos seus sistemas." },
    { id: "inovacao", title: "INOVAÇÃO", desc: "Procuramos as soluções mais inteligentes e eficientes para cada desafio." },
  ];

  return (
    <div id="Sobre" className=" dm-sans-uniquifier bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#ffffff,#f4f7ff_50%)]">
      <Navbar />

      <div className=" px-2 mt-24 mb-8 text-black overflow-hidden">
        <ScrollRevealWrapper className="w-full block lg:hidden xl:hidden">
                  <motion.h1
                    variants={textAnimation}
                    initial="initial"
                    whileInView="enter"
                    viewport={{ once: true }}
                    className="mt-6 mb-8 px-6 md:px-14 text-center text-3xl md:text-4xl font-bold"
                  >
                    Sobre a Arland LDA:
                    <span className="text-blue-600 ml-2 text-3xl md:text-4xl font-semibold block md:inline">
                      Conectando Confiança e Segurança
                    </span>
                  </motion.h1>
                </ScrollRevealWrapper>

                <div className="w-full block transicao pt-5 px-4 md:px-10 lg:px-20 xl:px-20">
                  {/* História - imagem interativa à direita em lg/xl, imagem em cima em md e abaixo */}
                  <ScrollRevealWrapper className="w-full">
                    <motion.section
                      variants={imageAnimation}
                      initial="initial"
                      whileInView="enter"
                      viewport={{ once: true }}
                      className="border-b-2 border-blue-200 pb-8 pt-8 lg:pt-12"
                    >
                      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row xl:flex-row items-center gap-8">
                        {/* Image: mobile first (on top), lg+ move to right */}
                        <motion.div
                          className="w-full lg:w-1/2 xl:w-1/2 order-1 lg:order-2 xl:order-2 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.995 }}
                        >
                          <motion.div
                            className="w-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#eef3ff] to-white p-3 cursor-pointer"
                            whileHover={{ rotate: [-1, 0, 1], transition: { duration: 0.6 } }}
                          >
                            <div className="relative w-full h-[430px] md:h-[490px] lg:h-[528px] xl:h-[530px]">
                              {/* layered interactive image: replace src later */}
                              <img
                                src="/man1.jpg"
                                alt="História - interativa"
                                className="hidden lg:block xl:block absolute inset-0 w-[80%] h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                              />
                              {/* layered interactive image: replace src later */}
                              <img
                                src="/man2.png"
                                alt="História - interativa"
                                className="block lg:hidden xl:hidden absolute inset-0 w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                              />
                              {/* subtle overlay and badge */}
                              <div className="absolute left-4 top-4 bg-white/80 text-sm text-blue-800 px-3 py-1 rounded-full shadow">
                                Desde 2011
                              </div>
                              <div className="absolute right-4 bottom-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-3 py-1 rounded-md text-xs shadow-lg">
                                Equipa Certificada
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>

                        {/* Text content: left on lg, below image on small */}
                        <div className="w-full lg:w-1/2 xl:1/2 order-2 lg:order-1 xl:order-1">
                        <ScrollRevealWrapper className="w-full hidden lg:block xl:block">
                                <motion.h1
                                variants={textAnimation}
                                initial="initial"
                                whileInView="enter"
                                viewport={{ once: true }}
                                className="mt-6 mb-8 px-6 md:px-14 text-center text-3xl md:text-4xl font-bold"
                                >
                                Sobre a Arland LDA:
                                <span className="text-blue-600 ml-2 text-3xl md:text-4xl font-semibold block md:inline">
                                Conectando Confiança e Segurança
                                </span>
                                </motion.h1>
                        </ScrollRevealWrapper>
                          <h2 className="mb-4 text-2xl md:text-3xl font-bold text-black text-center lg:text-left xl:text-left">
                            Nossa História e Experiência
                          </h2>
                          <h3 className="text-blue-600 font-semibold mb-4 text-lg md:text-xl text-center lg:text-left xl:text-left">
                            A Base da Sua Conexão Segura
                          </h3>

                          <div className="prose max-w-none text-justify text-gray-800">
                            <p>
                              Fundada em <strong>[2011]</strong>, a ARLAND, LDA nasceu da necessidade de oferecer soluções
                              <strong> tecnológicas robustas e confiáveis</strong> no mercado de infraestrutura de TI e segurança eletrónica.
                              Começámos como uma pequena equipa focada em resolver problemas complexos de redes, e rapidamente expandimos o nosso know-how para incluir a instalação de
                              <strong> sistemas de CCTV de ponta</strong>.
                            </p>
                            <p>
                              Hoje, com mais de uma década de experiência, somos reconhecidos pela nossa <strong>metodologia rigorosa</strong>, pelo uso de equipamentos de alta qualidade e pelo nosso
                              <strong> compromisso inabalável</strong> com a satisfação do cliente.
                            </p>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="bg-sky-50 p-4 rounded-lg border">
                                <div className="text-2xl font-extrabold text-blue-800">100+</div>
                                <div className="text-sm text-gray-600">Projetos de rede concluídos</div>
                              </div>
                              <div className="bg-sky-50 p-4 rounded-lg border">
                                <div className="text-2xl font-extrabold text-blue-800">500+</div>
                                <div className="text-sm text-gray-600">Câmaras de segurança instaladas</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  </ScrollRevealWrapper>

                  {/* Missão & Valores */}
                 
                    <motion.section
                      variants={textAnimation}
                      initial="initial"
                      whileInView="enter"
                      viewport={{ once: true }}
                      className="border-b-2 border-blue-200 mt-8 pb-8"
                    >
                      <div className="max-w-6xl mx-auto">
                        <h2 className="mb-4 text-2xl font-bold text-black text-center">Missão e Valores</h2>
                        <h3 className="text-blue-600 font-semibold mb-6 text-center">O que nos Move</h3>

                        <div className="text-gray-800 max-w-3xl mx-auto text-justify leading-relaxed">
                          <p>
                            <strong>Nossa Missão</strong> é garantir que os nossos clientes operem com <strong>máxima eficiência e segurança</strong>.
                            Proporcionamos infraestruturas de rede estáveis que suportam o crescimento do negócio e sistemas de vigilância que oferecem tranquilidade total.
                          </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                          {values.map((v) => {
                            const isOpen = openValue === v.id;
                            return (
                              <motion.button
                                key={v.id}
                                onClick={() => setOpenValue(isOpen ? null : v.id)}
                                aria-expanded={isOpen}
                                whileHover={{ y: -6 }}
                                whileTap={{ scale: 0.995 }}
                                className={`text-left border rounded-2xl p-5 transition-shadow duration-300 shadow-sm hover:shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white`}
                              >
                                <div className="flex items-start gap-4">
                                  <div className="flex-1">
                                    <h3 className="text-blue-800 font-semibold xl:text-xl lg:text-xl text-[90%]">{v.title}</h3>
                                    <p className="mt-3 text-gray-700 text-sm md:text-base">{v.desc}</p>
                                  </div>

                                  <div className="flex-shrink-0">
                                    <img src="/icons/done.png" alt="" className="xl:w-10 lg:w-10 w-6 xl:h-10 lg:h-10 h-6 object-contain opacity-90" />
                                  </div>
                                </div>

                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                  transition={{ duration: 0.39, ease: "easeInOut" }}
                                  className="overflow-hidden mt-4"
                                >
                                  <p className="text-gray-800 text-sm leading-relaxed">
                                    {v.desc} {isOpen && "— mais detalhes e exemplos de projetos e práticas que adotamos para garantir este valor."}
                                  </p>

                                  <div className="mt-4 flex items-center gap-3">
                                    <a
                                      href="/#Contactar"
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-flex items-center px-4 py-2 text-sm bg-blue-800 text-white rounded-lg"
                                    >
                                      Contacte-nos
                                    </a>
                                  </div>
                                </motion.div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.section>

                  {/* A Equipa e Certificações */}
                  <ScrollRevealWrapper className="w-full">
                    <motion.section
                      variants={imageAnimation}
                      initial="initial"
                      whileInView="enter"
                      viewport={{ once: true }}
                      className="pt-12 pb-8"
                    >
                      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                          <h2 className="mb-4 text-2xl font-bold text-black text-center lg:text-left">A Equipa e Certificações</h2>
                          <h3 className="text-blue-600 font-semibold mb-4 text-center lg:text-left">Conheça Quem o Protege</h3>

                          <div className="text-gray-800 text-justify leading-relaxed">
                            <p>
                              A ARLAND, LDA é composta por uma equipa de <strong>técnicos certificados e especialistas</strong> em cablagem estruturada, configuração de redes (LAN/WAN)
                              e sistemas avançados de videovigilância. Cada membro da nossa equipa é dedicado a fornecer um serviço personalizado, garantindo qualidade e profissionalismo.
                            </p>
                          </div>

                          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 border rounded-lg bg-white">
                              <h4 className="font-semibold text-blue-800 xm:text-[70%] sm:text-[75%] sm:text-center md:text-md lg:text-md xl:text-md ">CISCO</h4>
                            </div>
                            <div className="p-4 border rounded-lg bg-white">
                              <h4 className="font-semibold text-blue-800 xm:text-[70%] sm:text-[75%] sm:text-center md:text-md lg:text-md xl:text-md  ">MICROSOFT</h4>
                            </div>
                            <div className="p-4 border rounded-lg bg-white ">
                              <h4 className="font-semibold text-blue-800 xm:text-[70%] sm:text-[75%] sm:text-center md:text-md lg:text-md xl:text-md">CERTIFICAÇÕES DE CABLAGEM</h4>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center">
                          <div className="w-full rounded-lg overflow-hidden shadow">
                            <img src="/ArlandTeam.jpg" alt="equipa" className="w-full h-full md:h-full lg:h-full xl:h-full object-cover" />
                          </div>
                          <div className="text-sm text-gray-500 text-center">Técnicos certificados prontos para o seu projecto</div>
                        </div>
                      </div>
                    </motion.section>
                  </ScrollRevealWrapper>

                  {/* CTA */}
                  <ScrollRevealWrapper className="w-full">
                    <motion.section
                      variants={textAnimation}
                      initial="initial"
                      whileInView="enter"
                      viewport={{ once: true }}
                      className="mt-12 mb-12"
                    >
                      <div className="flex justify-center">
                        <div className="w-full md:w-3/5 bg-white rounded-xl shadow-2xl border p-6 text-center">
                          <h3 className="text-xl md:text-2xl font-bold">Pronto para elevar a segurança e a performance da sua empresa?</h3>
                          <p className="text-gray-600 mt-3">Fale connosco hoje e descubra a diferença que a ARLAND, LDA pode fazer.</p>

                          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Button 
                            onClick={() => (window.location.href = "/#Contactar")}
                             className="bg-blue-800 text-white px-5 py-3"
                             title="SOLICITAR UMA CONSULTA GRATUITA"/>
                            <a href="/#Contacto&Mapa"
                             className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
                              Ver localização
                              <ArrowRight size={16} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  </ScrollRevealWrapper>

                  {/* Footer area */}
                  
                </div>
              </div>
              <ScrollRevealWrapper className="w-full">
                    <div className="mt-8">
                      <Footer />
                    </div>
                </ScrollRevealWrapper>
          </div>
        );
      }