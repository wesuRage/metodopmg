"use client"

import Header from "@/components/Header";
import Main from "@/components/Main";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import VideoPlayer from "@/components/VideoPlayer";
import { HiMiniFire } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";
import ModulesCarousel from "@/components/Carousel";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <section className="bg-linear-to-tr from-black via-20% via-black to-[#0Aaa68]">
          <div className="w-full pb-26 shadow-[inset_0px_-50px_25px_-5px_#000000] inline-flex flex-col">
            <div className="flex items-center flex-col">
              <VideoPlayer src="/disciplina.webm" />

              <button
                onClick={() => {
                  window.location.href = "https://pay.cakto.com.br/sxqeu5i";
                }}
                className="flex cursor-pointer mt-4 font-extrabold hover:shadow-black/50 shadow-xl items-center text-2xl bg-black px-8 py-4 rounded-full text-[#73D673] border-2 border-[#73D673] transition-all hover:bg-[#73D673] hover:text-black scale-75 hover:scale-110"
              >
                <HiMiniFire className="me-2" /> COMEÇAR AGORA{" "}
                <HiMiniFire className="ms-2" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[url(/background.png)] bg-cover bg-no-repeat border-t-[#73D673] border-t-4 p-6">
          <div className="bg-black/90 rounded-2xl border-[#73D673] border-4 p-6">
            <div className="flex justify-center w-full p-6">
              <Title Icon={HiMiniFire}>O que você vai ter acesso:</Title>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <section>
                <div className="max-w-[500px] p-4 md:mb-28 md:mt-[100px]">
                  <Title Icon={GrGroup}>Networking</Title>
                  <Paragraph>
                    Você terá acesso a um grupo exclusivo de membros do PMG,
                    onde você irá poder trocar networking, tirar dúvidas e
                    compartilhar resultados.
                  </Paragraph>
                </div>
                <div className="max-w-[500px] p-4 md:mb-[300px]">
                  <Title Icon={GoTrophy}>Do Zero ao Avançado</Title>
                  <Paragraph>
                    Mesmo que você seja iniciante no Marketing Digital nós
                    iremos te guiar no caminho certo para você vender no
                    mercado.
                  </Paragraph>
                </div>
              </section>
              <div className="hidden md:block relative border-2 rounded-full border-[#73D673] min-h-[600px] w-0"></div>
              <section>
                <div className="max-w-[500px] p-4 md:mb-28 md:mt-32">
                  <Title Icon={BiSupport}>Suporte</Title>
                  <Paragraph>
                    Além do grupo networking você também terá suporte da nossa
                    equipe especializada para te atender e te ajudar com tudo o
                    que você precisar.
                  </Paragraph>
                </div>
                <div className="max-w-[500px] p-4 md:mb-28">
                  <Title Icon={GoCheckCircle}>Estratégias validadas</Title>
                  <Paragraph>
                    Nossa metodologia de ensinamento é aplicada e comprovada,
                    você irá aprender estratégias para vender diariamente no
                    mercado.
                  </Paragraph>
                </div>
              </section>
            </div>
            <div className="w-full flex justify-center items-center md:relative bottom-10">
              <button
                onClick={() => {
                  window.location.href = "https://pay.cakto.com.br/sxqeu5i";
                }}
                className="flex cursor-pointer mt-4 font-extrabold hover:shadow-black/50 shadow-xl items-center text-2xl bg-black px-8 py-4 rounded-full text-[#73D673] border-2 border-[#73D673] transition-all hover:bg-[#73D673] hover:text-black scale-75 hover:scale-110"
              >
                <HiMiniFire className="me-2" /> COMEÇAR AGORA
                <HiMiniFire className="ms-2" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-black w-full border-t-4 border-[#73D673] p-6 bg-linear-to-br from-[#0Aaa68] via-black to-black">
          <div className="w-full flex justify-center py-8">
            <Title Icon={HiMiniFire}>Módulos</Title>
          </div>

          <ModulesCarousel />
          
          <div className="w-full flex justify-center py-8">
            <button
              onClick={() => {
                window.location.href = "https://pay.cakto.com.br/sxqeu5i";
              }}
              className="flex cursor-pointer mt-4 font-extrabold hover:shadow-black/50 shadow-xl items-center text-2xl bg-black px-8 py-4 rounded-full text-[#73D673] border-2 border-[#73D673] transition-all hover:bg-[#73D673] hover:text-black scale-75 hover:scale-110"
            >
              <HiMiniFire className="me-2" /> COMEÇAR AGORA{" "}
              <HiMiniFire className="ms-2" />
            </button>
          </div>
        </section>
      </Main>
    </>
  );
}
