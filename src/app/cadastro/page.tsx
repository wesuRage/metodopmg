"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";

const formSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").max(64),
  email: z.string().email("Digite um e-mail válido"),
  telefone: z
    .string()
    .min(14, "Digite um telefone válido com DDD")
    .max(15)
    .regex(/\(\d{2}\) \d{4,5}-\d{4}/, "Formato inválido"),
});

export default function Home() {
  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const phoneMask = (event: any) => {
    const input = event.target;
    input.value = phoneMaskRegex(input.value);
  };

  const phoneMaskRegex = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const formSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status == 401) {
        Swal.fire({
          title: "E-mail já cadastrado",
          timer: 2000,
          icon: "error",
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        return;
      }

      window.location.href = "https://chat.whatsapp.com/J6lNEj834U6DM3szBMyAnR";
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <main className="md:flex justify-center items-center min-h-screen">
      <div className="md:h-full h-0 md:w-[40%]">
        <div className="md:block hidden">
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
              digital, conquiste seu público e alcance novos patamares. O
              sucesso online começa com a estratégia certa.
            </p>
          </div>

          <form onSubmit={handleSubmit(formSubmit)} className="p-6">
            <label className="relative block">
              <input
                id="nome"
                type="text"
                autoComplete="off"
                {...register("nome", { required: true })}
                className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                placeholder=" "
              />
              <span className="absolute left-2 top-[-10] text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                Nome completo
              </span>
              {errors.nome && (
                <span className="text-sm text-red-400">
                  Preencha com seu nome completo
                </span>
              )}
            </label>

            <label className="relative block my-4">
              <input
                id="email"
                type="email"
                autoComplete="off"
                {...register("email", { required: true })}
                className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                placeholder=" "
              />
              <span className="absolute left-2 top-[-10] text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                E-mail
              </span>
              {errors.email && (
                <span className="text-sm text-red-400">
                  Preencha com seu e-mail
                </span>
              )}
            </label>

            <label className="relative block">
              <input
                id="telefone"
                type="tel"
                autoComplete="off"
                {...register("telefone", {
                  required: true,
                  onChange: (e) => {
                    phoneMask(e);
                  },
                })}
                className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                placeholder=" "
              />
              <span className="absolute left-2 top-[-10] text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                Telefone com DDD
              </span>
              {errors.telefone && (
                <span className="text-sm text-red-400">
                  Preencha com seu telefone
                </span>
              )}
            </label>

            <input
              value="Enviar & Entrar no Grupo"
              type="submit"
              className="rounded-md font-extrabold border-2 border-green-500 text-green-500 bg-black hover:bg-green-500 hover:text-black transition-all duration-200 transform scale-100 shadow-lg hover:translate-y-[-10px] hover:shadow-green-500/50 cursor-pointer mt-4 py-2 px-4"
            />
          </form>
        </div>
      </div>

      <div className="relative w-full md:w-[60%] h-[60%] md:h-full bg-white">
        <div className="absolute inset-0 bg-transparent shadow-[inset_0px_-50px_23px_0px_#0A0A0A] md:shadow-[inset_50px_0px_23px_0px_#0A0A0A] z-10" />
        <div className="relative w-full h-full">
          <Image
            src="/marketing.jpg"
            width={600}
            height={600}
            priority
            alt="marketing digital"
            className="w-full min-h-screen md:min-h-screen object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="block md:hidden mt-6 p-6">
        <div className="flex w-full justify-center m-4">
          <Image
            draggable={false}
            width={300}
            height={300}
            src="/logo.png"
            alt="logo método PMG"
            className="rounded-full max-w-[50%] max-h-[50%] select-none border-4 border-green-500"
          />
        </div>

        <div className="mb-4">
          <h1 className="text-3xl text-black font-extrabold [-webkit-text-stroke:2px_#00D673]">
            CADASTRE-SE
          </h1>
          <p className="text-stone-400">
            E transforme seu negócio em algo gigante! Domine o marketing
            digital, conquiste seu público e alcance novos patamares. O sucesso
            online começa com a estratégia certa.
          </p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)}>
          <label className="relative block">
            <input
              id="nome"
              type="text"
              autoComplete="off"
              {...register("nome", { required: true })}
              className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
              placeholder=" "
            />
            <span className="absolute left-2 top-[-10] text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
              Nome completo
            </span>
            {errors.nome && (
              <span className="text-sm text-red-400">
                Preencha com seu nome completo
              </span>
            )}
          </label>

          <label className="relative block my-4">
            <input
              id="email"
              type="email"
              autoComplete="off"
              {...register("email", { required: true })}
              className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
              placeholder=" "
            />
            <span className="absolute left-2 top-[-10] text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
              E-mail
            </span>
            {errors.email && (
              <span className="text-sm text-red-400">
                Preencha com seu e-mail
              </span>
            )}
          </label>

          <label className="relative block">
            <input
              id="telefone"
              type="tel"
              autoComplete="off"
              {...register("telefone", {
                required: true,
                onChange: (e) => {
                  phoneMask(e);
                },
              })}
              className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
              placeholder=" "
            />
            <span className="absolute left-2 top-[-10] text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
              Telefone com DDD
            </span>
            {errors.telefone && (
              <span className="text-sm text-red-400">
                Preencha com seu telefone
              </span>
            )}
          </label>

          <input
            value="Enviar & Entrar no Grupo"
            type="submit"
            className="rounded-md font-extrabold border-2 border-green-500 text-green-500 bg-black hover:bg-green-500 hover:text-black transition-all duration-200 transform scale-100 shadow-lg hover:translate-y-[-10px] hover:shadow-green-500/50 cursor-pointer mt-4 py-2 px-4"
          />
        </form>
      </div>
    </main>
  );
}
