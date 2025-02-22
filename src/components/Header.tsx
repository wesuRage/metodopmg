import { IoIosRocket } from "react-icons/io";

export default function Header(){
    return (
        <header className="fixed z-10 h-20 top-0 flex flex-col justify-center items-center w-full bg-black border-b-4 border-b-[#73D673]">
            <h1 className="text-white flex justify-center items-center text-lg md:text-3xl">
                IMPULSIONE SEU NEGÓCIO <span className="ms-2 underline text-black font-extrabold [-webkit-text-stroke:2px_#73D673]">AGORA</span> <IoIosRocket className="ms-2"/>
            </h1>
        </header>
    );
}