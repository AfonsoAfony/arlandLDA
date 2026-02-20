"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase"; 
import Image from "next/image";
import { Heading } from "@/components";
import { motion } from "framer-motion";
import crypto from "crypto";



	function getGravatarUrl(email: string) {
		const hash = crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
		return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
	}


export default function Testimonials() {

const [comentarios, setComentarios] = useState<any[]>([]);
 // estado inicial como array

  async function listarComentarios() {
  const { data, error } = await supabase
    .from("comentarios")
    .select("*");

  if (error) throw new Error(error.message);

  setComentarios(data ?? []); // garante que nunca seja null
}

  //eventBus.on('ActualizarComentarios',listarComentarios())

  useEffect(() => {
    const carregar = async () => { 
      await listarComentarios(); // listarComentarios deve actualizar o estado 
      }; 
      carregar();
  }, []);


	const phares = ["Nossos Clientes dizem"];

	return (
		<div className="w-full flex flex-col items-center padding-x py-10 gap-20 bg-white xm:gap-10 sm:gap-10">
			<div className="flex flex-col items-center gap-5">
				
				<div>
					<Heading
						classname="heading font-bold xm:text-center sm:text-center"
						title={phares}
					/>
				</div>
				
			</div>
			<motion.div className="w-full flex gap-5 xm:flex-col sm:flex-col xm:w-full py-10 sm:w-full overflow-hidden h-[750px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10">
				<motion.div
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 25,
					}}
					className="w-1/3 flex flex-col h-fit xm:w-full sm:w-full">
					{[...comentarios, ...comentarios].map(
						(comentario) => (
							<div
								className="flex flex-col gap-5"
								key={comentario.id}>
								<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
									<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
										{comentario.comentario}
									</p>
									<div className="flex items-center gap-5">
										<Image
											src={getGravatarUrl(comentario.email)}
											alt="asd"
											width={60}
											height={60}
										/>
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-lg font-normal leading-tight">
												{comentario.nome}
											</h1>
											<p className="text-[#010D3E] font-dmSans text-lg font-normal leading-tight">
												{comentario.email}
											</p>
										</div>
									</div>
								</div>
							</div>
						),
					)}
				</motion.div>
				<motion.div
					className="w-1/3 flex flex-col h-fit xm:hidden sm:hidden"
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 22,
					}}>
					{[...comentarios, ...comentarios].map(
						(comentario) => (
							<div
								className="flex flex-col gap-5"
								key={comentario.id}>
								<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
									<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
										{comentario.comentario}
									</p>
									<div className="flex items-center gap-5">
										<Image
											src={getGravatarUrl(comentario.email)}
											alt="asd"
											width={60}
											height={60}
										/>
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-lg font-normal leading-tight">
												{comentario.nome}
											</h1>
											<p className="text-[#010D3E] font-dmSans text-lg font-normal leading-tight">
												{comentario.email}
											</p>
										</div>
									</div>
								</div>
							</div>
						),
					)}
				</motion.div>
				<motion.div
					className="w-1/3 flex flex-col h-fit xm:hidden sm:hidden"
					animate={{ y: "-50%" }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						duration: 19,
					}}>
					{[...comentarios, ...comentarios].map(
						(comentario) => (
						<div
							className="flex flex-col gap-5"
							key={comentario.id}>
							<div className="p-10 mb-5 shadow border border-[#222222]/10 rounded-[30px] bg-white flex flex-col gap-5">
								<p className="text-[#010D3E] font-dmSans text-xl font-normal leading-tight">
									{comentario.comentario}
								</p>
								<div className="flex items-center gap-5">
									<Image
										src={getGravatarUrl(comentario.email)}
										alt="asd"
										width={60}
										height={60}
									/>
									<div className="flex flex-col">
										<h1 className="text-[#010D3E] font-dmSans text-lg font-normal leading-tight">
											{comentario.nome}
										</h1>
										<p className="text-[#010D3E] font-dmSans text-lg font-normal leading-tight">
											{comentario.email}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}
