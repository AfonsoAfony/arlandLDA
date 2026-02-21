"use client";
import { useEffect } from "react";

export default function ScrollRevealWrapper({ children, className }) {
  useEffect(() => {
    // dynamic import to avoid loading this library on the server
    // (some libraries access `window` at import time)
    let mounted = true;
    (async () => {
      if (!mounted) return;
      const ScrollRevealModule = await import("scrollreveal");
      const ScrollReveal = ScrollRevealModule && ScrollRevealModule.default ? ScrollRevealModule.default : ScrollRevealModule;
      ScrollReveal().reveal(".reveal", {
        duration: 2000, // tempo da animação (ms)
        origin: "bottom", // direção de onde vem o conteúdo
        distance: "50px", // distância inicial
        reset: false, // se true, anima toda vez que rolar
      });
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return <div className={`reveal ${className || ""}`}>{children}</div>;
}
