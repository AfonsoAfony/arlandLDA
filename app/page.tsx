"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import {
	Navbar,
	MapaEContacto,
	Footer,
	Hero,
	LogoTicker,
	PorqueNos,
	Servicos,
	Testimonials,
	Contactar,
} from "@/components";

export default function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
		<div className="sticky z-50">
			<Navbar />
		</div>
		<div className="relative z-10">
			<Hero />
		</div>
		<div className="relative z-40">
			<LogoTicker/>
		</div>
		<div className="relative z-20">
			<Servicos />
		</div>
			<PorqueNos />
			<MapaEContacto />
			<Testimonials />
			<Contactar />
			<Footer />
		</>
	);
}
