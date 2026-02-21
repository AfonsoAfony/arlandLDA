"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealWrapper({ children, className }) {
  useEffect(() => {
    // initialize ScrollReveal only in the browser
    ScrollReveal().reveal(".reveal", {
      duration: 2000, // tempo da animação (ms)
      origin: "bottom", // direção de onde vem o conteúdo
      distance: "50px", // distância inicial
      reset: false, // se true, anima toda vez que rolar
    });
  }, []);

  return <div className={`reveal ${className || ""}`}>{children}</div>;
}
