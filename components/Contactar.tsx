"use client";


import { motion } from "framer-motion";
import { Heading } from "@/components";

import { imageAnimation, textAnimation } from "@/motion";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollRevealWrapper from "../ScrollRevealWrapper";
import { supabase } from "@/lib/supabase";
import eventBus from "./eventBus";

export default function Contactar() {
  const phares1 = ["Fazer Contacto",
                "Simples ou Comentários"];
  const phares2 = ["Preencha o formulário abaixo e retornaremos em até 24 horas."];

  const [isComment, setIsComment] = useState(true);
  const [buttonText, setButtonText] = useState("Comentário");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sms, setSms] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [errors, setErrors] = useState<{ nome?: boolean; email?: boolean; telefone?: boolean; sms?: boolean }>({});


  async function inserirComentario() {
    const { data, error } = await supabase.from("comentarios").insert({ email, nome, comentario: sms });
    if (error) {
      console.error("Erro ao Salvar comentarios: ", error.message);
      setMessage({ type: "error", text: "Não foi possível salvar comentário." });
      setLoading(false);
      return false;
    } else {
      setMessage({ type: "success", text: "Comentário enviado com sucesso!" });
      eventBus.emit("ActualizarComentarios");
      setNome("");
      setEmail("");
      setTelefone("");
      setSms("");
      setLoading(false);
      return true;
    }
  }

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setErrors({});
    const newErrors: typeof errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome.trim()) newErrors.nome = true;
    if (!email.trim() || !regex.test(email)) newErrors.email = true;
    if (!telefone.trim() || telefone.trim().length < 9) newErrors.telefone = true;
    if (!sms.trim()) newErrors.sms = true;

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setMessage({ type: "error", text: "Por favor corrija os campos assinalados." });
      return;
    }

    setLoading(true);

    try {
      if (isComment) {
        await inserirComentario();
      } else {
        const templateParams = {
          name: nome,
          email,
          telefone,
          message: sms,
          subject: "Contacto Simples.",
        };

        await emailjs.send("service_v173rej", "template_pude0sn", templateParams, "CiodMG3roCbgUv92j");
        setMessage({ type: "success", text: "E-mail enviado com sucesso!" });
        setNome("");
        setEmail("");
        setTelefone("");
        setSms("");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Houve um erro ao enviar. Tente novamente." });
      setLoading(false);
    }
  }

  function toggleMode() {
    setIsComment((v) => !v);
    setButtonText((t) => (t === "Comentário" ? "Email" : "Comentário"));
  }

  return (
    <section id="Contactar" className="w-full padding-x py-12 bg-gradient-to-b from-white to-[#d2dcff]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Heading classname="heading font-bold text-center xl:text-4xl lg:text-4xl text-md " title={phares1} />
          <motion.p
            className="text-center text-gray-700 max-w-xl"
            variants={textAnimation}
            initial="initial"
            whileInView="enter"
            viewport={{ once: true }}
          >
            {phares2}
          </motion.p>
        </div>

        <ScrollRevealWrapper className="w-full ">
          {/* grid: single column on small, two columns from md upward (form left, info right) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Form (left, spans 2 cols on md+) */}
            <motion.div
              variants={imageAnimation}
              initial="initial"
              whileInView="enter"
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6"
            >
              <form onSubmit={sendEmail} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-semibold text-blue-800">{isComment ? "Enviar Comentário" : "Enviar Email"}</div>
                    <div className="text-xs text-gray-500">Modo</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isComment}
                        onChange={toggleMode}
                        aria-label="Alternar modo comentário / email"
                      />
                      <div className="w-12 h-6 bg-blue-600 rounded-full peer-checked:bg-blue-800 peer-focus:ring-2 peer-focus:ring-blue-300 transition" />
                      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-6 transition" />
                    </label>
                    
                    <div className="text-xs text-gray-500">{buttonText}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                      Nome*
                    </label>
                    <input
                      id="nome"
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className={`mt-2 block w-full rounded-lg px-3 py-2 bg-blue-50 focus:ring-2 focus:ring-blue-300 ${
                        errors.nome ? "border-2 border-red-500" : "border border-transparent"
                      }`}
                      placeholder="O Seu Nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email*
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`mt-2 block w-full rounded-lg px-3 py-2 bg-blue-50 focus:ring-2 focus:ring-blue-300 ${
                        errors.email ? "border-2 border-red-500" : "border border-transparent"
                      }`}
                      placeholder="O Seu Email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                    Telefone*
                  </label>
                  <input
                    id="telefone"
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className={`mt-2 block w-full rounded-lg px-3 py-2 bg-blue-50 focus:ring-2 focus:ring-blue-300 ${
                      errors.telefone ? "border-2 border-red-500" : "border border-transparent"
                    }`}
                    placeholder="Seu telefone"
                  />
                </div>

                <div>
                  <label htmlFor="sms" className="text-sm font-medium text-gray-700">
                    Mensagem*
                  </label>
                  <textarea
                    id="sms"
                    value={sms}
                    onChange={(e) => setSms(e.target.value)}
                    className={`mt-2 block w-full rounded-xl px-3 py-3 bg-blue-50 focus:ring-2 focus:ring-blue-300 resize-none h-36 ${
                      errors.sms ? "border-2 border-red-500" : "border border-transparent"
                    }`}
                    placeholder="Escreva a sua mensagem..."
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-3 px-5 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-700 disabled:opacity-60 transition"
                    >
                      {loading ? (
                        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.25" />
                          <path d="M22 12a10 10 0 00-10-10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      <span>{loading ? "Enviando..." : `Enviar ${buttonText}`}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setNome("");
                        setEmail("");
                        setTelefone("");
                        setSms("");
                        setErrors({});
                        setMessage(null);
                      }}
                      className="px-4 py-3 bg-white border rounded-xl text-sm hover:bg-gray-50 transition"
                    >
                      Limpar
                    </button>
                  </div>

                  <div className="text-sm text-gray-600">{/* optional helper text */}</div>
                </div>

                {message && (
                  <div
                    role="status"
                    className={`mt-2 px-4 py-2 rounded-md text-sm ${
                      message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                    }`}
                  >
                    {message.text}
                  </div>
                )}
              </form>
            </motion.div>

          </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
}
