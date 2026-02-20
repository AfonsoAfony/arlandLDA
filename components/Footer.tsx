import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import ScrollRevealWrapper from "../ScrollRevealWrapper";
import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="Footer" className="w-full bg-black py-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollRevealWrapper className="w-full">
          {/* main container: column on small (centered), row on lg/xl */}
          <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Brand / logo */}
            <div className="flex items-center gap-4 lg:items-center lg:gap-6 lg:w-1/4">
              <motion.div
								
					animate={{ y: [-30, 30] }}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "mirror",
						ease: "easeInOut",
					}}
					className=" w-full flex items-center justify-center">
					<Link href="/" aria-label="Arland LDA - Início" className="inline-flex items-center">
						<Image src={logo} alt="Arland LDA" width={79} height={79} />
					</Link>
					
				</motion.div>

              <div className="hidden sm:block text-left">
                <div className="text-white font-semibold">Arland LDA</div>
                <div className="text-sm text-gray-400">Infraestrutura & Segurança</div>
              </div>
            </div>

            {/* Navigation / links - centered on small, inline on larger screens */}
            <nav
              aria-label="Links do rodapé"
              className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 justify-center"
            >
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Início
              </Link>
              <a href="/#Servicos" className="text-sm text-gray-300 hover:text-white">
                Serviços
              </a>
              <a href="/#CCTV" className="text-sm text-gray-300 hover:text-white">
                CCTV
              </a>
              <a href="/#Redes" className="text-sm text-gray-300 hover:text-white">
                Redes
              </a>
			  <a href="/#PorqueNos" className="text-sm text-gray-300 hover:text-white">
                Porquê Nós
              </a>
              <Link href="/sobre" className="text-sm text-gray-300 hover:text-white">
                Sobre Nós
              </Link>
              <a href="#Contacto&Mapa" className="text-sm text-gray-300 hover:text-white">
                Contactos
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                Termos e Privacidade
              </a>
            </nav>

            {/* Contact / social icons - right on large screens, centered on small */}
            <div className="flex items-center gap-3 lg:w-1/4 justify-center lg:justify-end">
              <a
                href="mailto:info@arland-lda.ao"
                aria-label="Email"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                <Mail className="w-4 h-4 text-gray-200" />
              </a>

              <a
                href="https://wa.me/244924177547"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/5 hover:bg-green-500 transition"
              >
                <img src="/icons/whatsapp.png" alt="whatsapp" className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/5 hover:bg-blue-600 transition"
              >
                <Facebook className="w-4 h-4 text-gray-200" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/5 hover:bg-blue-700 transition"
              >
                <Linkedin className="w-4 h-4 text-gray-200" />
              </a>
            </div>
          </div>

          {/* bottom - copyright / legal */}
          <div className="mt-8 border-t border-gray-800 pt-6">
            <div className="flex flex-col items-center text-center gap-2 lg:flex-row lg:justify-between lg:items-center">
              <p className="text-xs text-gray-500">© {year} Arland LDA. Todos os direitos reservados.</p>
              <div className="text-xs text-gray-500">Política de Privacidade • Termos de Serviço</div>
            </div>
          </div>
        </ScrollRevealWrapper>
      </div>
    </footer>
  );
}
