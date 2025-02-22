"use client";

import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

interface FormValues {
  nome: string;
  email: string;
  telefone: string;
}

export default function Home() {
  const [formValues, setFormValues] = useState<FormValues>({
    nome: "",
    email: "",
    telefone: "",
  });

  const [formErrors, setFormErrors] = useState({
    nome: false,
    email: false,
    telefone: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));

    // Remove erro ao começar a digitar
    setFormErrors((prevErrors) => ({ ...prevErrors, [id]: false }));
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = phoneMaskRegex(event.target.value);
    setFormValues((prevValues) => ({ ...prevValues, telefone: maskedValue }));

    // Remove erro ao começar a digitar
    setFormErrors((prevErrors) => ({ ...prevErrors, telefone: false }));
  };

  const phoneMaskRegex = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const validateForm = () => {
    const errors = {
      nome: formValues.nome.trim() === "",
      email: formValues.email.trim() === "",
      telefone: formValues.telefone.trim() === "",
    };

    setFormErrors(errors);

    return !Object.values(errors).includes(true); // Retorna `true` se não houver erros
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return; // Se houver erros, não envia o formulário

    try {
      const response = await fetch("/api/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.status === 403) {
        Swal.fire({
          title: "Credenciais inválidas",
          timer: 2000,
          icon: "error",
          showConfirmButton: false,
        });
        return;
      }

      if (response.status === 401) {
        Swal.fire({
          title: "E-mail já cadastrado",
          timer: 2000,
          icon: "error",
          showConfirmButton: false,
        });
        return;
      }

      window.location.href = "https://chat.whatsapp.com/J6lNEj834U6DM3szBMyAnR";
    } catch (error) {
      console.error("Erro ao enviar:", error);
      Swal.fire({
        title: "Erro interno no servidor",
        timer: 2000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
  };

  return (
    <main className="flex justify-center items-center">
      <div className="md:h-full h-0 md:w-[60%] p-6">
        <div className="flex w-full justify-center">
          <Image
            draggable={false}
            width={150}
            height={150}
            src="/logo.png"
            alt="logo método PMG"
            className="rounded-full max-w-[50%] max-h-[50%] select-none border-4 border-green-500"
          />
        </div>

        <div>
          <h1 className="text-3xl ms-6 text-black font-extrabold [-webkit-text-stroke:2px_#00D673]">
            CADASTRE-SE
          </h1>
          <p className="ms-6 text-stone-400">
            E transforme seu negócio em algo gigante! Domine o marketing
            digital, conquiste seu público e alcance novos patamares. O sucesso
            online começa com a estratégia certa.
          </p>
        </div>

        <form onSubmit={formSubmit} className="p-6">
          {/* Campo Nome */}
          <label className="relative block">
            <input
              id="nome"
              type="text"
              autoComplete="off"
              maxLength={64}
              value={formValues.nome}
              onChange={handleInputChange}
              className={`md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 ${
                formErrors.nome ? "border-red-500" : "border-stone-400"
              } bg-[var(--background)] text-stone-400 px-4 p-2 focus:border-green-500`}
              placeholder="Nome completo"
            />
            {formErrors.nome && (
              <span className="text-sm text-red-400">Preencha com seu nome completo</span>
            )}
          </label>

          {/* Campo Email */}
          <label className="relative block my-4">
            <input
              id="email"
              type="email"
              maxLength={64}
              value={formValues.email}
              onChange={handleInputChange}
              autoComplete="off"
              className={`md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 ${
                formErrors.email ? "border-red-500" : "border-stone-400"
              } bg-[var(--background)] text-stone-400 px-4 p-2 focus:border-green-500`}
              placeholder="E-mail"
            />
            {formErrors.email && (
              <span className="text-sm text-red-400">Preencha com seu e-mail</span>
            )}
          </label>

          {/* Campo Telefone */}
          <label className="relative block">
            <input
              id="telefone"
              type="tel"
              minLength={14}
              maxLength={15}
              autoComplete="off"
              value={formValues.telefone}
              onChange={handlePhoneChange}
              className={`md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 ${
                formErrors.telefone ? "border-red-500" : "border-stone-400"
              } bg-[var(--background)] text-stone-400 px-4 p-2 focus:border-green-500`}
              placeholder="Telefone com DDD"
            />
            {formErrors.telefone && (
              <span className="text-sm text-red-400">Preencha com seu telefone</span>
            )}
          </label>

          {/* Botão de Envio */}
          <input
            value="Enviar & Entrar no Grupo"
            type="submit"
            className="rounded-md w-full font-extrabold border-2 border-green-500 text-green-500 bg-black hover:bg-green-500 hover:text-black transition-all duration-200 transform scale-100 shadow-lg hover:translate-y-[-10px] hover:shadow-green-500/50 cursor-pointer mt-4 py-2 px-4"
          />
        </form>
      </div>
    </main>
  );
}
