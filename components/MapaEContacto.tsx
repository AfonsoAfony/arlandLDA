"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heading } from "@/components";
import { imageAnimation} from "@/motion";
import ScrollRevealWrapper from "../ScrollRevealWrapper";
import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";

export default function MapaEContacto() {
  const phares1 = ["Onde Nos Encontrar"];

  return (
    <section id="Contacto&Mapa" className="w-full padding-x py-12 bg-gradient-to-b from-white to-[#d2dcff]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-8">
          <Heading classname="heading font-bold xm:text-center sm:text-center" title={phares1} />
          
        </div>

        <ScrollRevealWrapper className="w-full">
          {/* layout: column on small, two-column row from md up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* CONTACT CARD (left on md+, top on sm) */}
            <motion.aside
              variants={imageAnimation}
              initial="initial"
              whileInView="enter"
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="sticky md:top-24 bg-white rounded-2xl shadow-2xl border p-6">
                <h3 className="font-bold dm-sans-uniquifier text-black text-2xl mb-4">Contactos</h3>

                <ul className="space-y-6 text-gray-600">
                  <li className="flex gap-4 items-start">
                    <div className="flex-none bg-sky-100 text-blue-600 rounded-full p-3">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">EMAIL</p>
                      <a href="mailto:info@arland-lda.ao" className="text-black font-semibold hover:text-blue-600">
                        info@arland-lda.ao
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="flex-none bg-sky-100 text-blue-600 rounded-full p-3">
                      <PhoneCall size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">TELEFONE</p>
                      <a href="tel:+244924177547" className="text-black font-semibold hover:text-blue-600">
                        +244 924 177 547
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="flex-none bg-sky-100 text-blue-600 rounded-full p-3">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">ENDEREÇO</p>
                      <p className="text-black font-semibold">Talatona, Luanda - Angola</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-600 mb-3">Siga-nos nas redes sociais</p>
                  <div className="flex gap-3">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="p-3 bg-white border rounded-lg hover:bg-blue-50">
                      <Instagram size={18} className="text-gray-700" />
                    </a>
                    <a href="#" className="p-3 bg-white border rounded-lg hover:bg-blue-50">
                      <Linkedin size={18} className="text-gray-700" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="p-3 bg-white border rounded-lg hover:bg-blue-50">
                      <Facebook size={18} className="text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg">
                    Contacte-nos
                  </a>
                  <a href="#map" className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm">
                    Ver Mapa
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* MAP + imagery (right on md+, below on sm) */}
            <motion.div
              id="map"
              variants={imageAnimation}
              initial="initial"
              whileInView="enter"
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="flex flex-col gap-6">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#eef3ff] to-white p-4 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 pt-2 pb-2 flex items-center justify-center">
                    <motion.div
								
								animate={{ y: [-30, 30] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}
								className=" w-full flex items-center justify-center">
								<Image src="/icons/localizacao.png" alt="star" width={160} height={160} className="hidden sm:block" />
								
							</motion.div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-black">Visite-nos pessoalmente</h4>
                    <p className="text-gray-700 mt-2">
                      Estamos prontos para ajudar – agende uma visita ou fale connosco por telefone/email.
                    </p>
                  </div>
                </div>

                <div className="w-full rounded-3xl overflow-hidden shadow-2xl border">
                  <div className="w-full h-[420px] md:h-[520px]">
                    <iframe
                      title="Mapa da Empresa"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15766.364338380958!2d13.2317184!3d-8.91755285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1!5e0!3m2!1spt-PT!2sao!4v1767133736639!5m2!1spt-PT!2sao"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border flex items-center gap-3">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <PhoneCall size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Atendimento</p>
                      <p className="text-sm font-semibold">Seg - Sex 08:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border flex items-center gap-3">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <MapPin size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Local</p>
                      <p className="text-sm font-semibold">Talatona, Luanda</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
}
