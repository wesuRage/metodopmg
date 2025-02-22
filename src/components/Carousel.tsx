// @ts-nocheck

"use client"

import { Carousel } from 'primereact/carousel'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function ModulesCarousel() {
    const images = [
        { src: "/INICIO.png", alt: "O início da sua jornada método PMG" },
        { src: "/DISCIPLINA.png", alt: "Disciplina no marketing digital método PMG" },
        { src: "/COMUNIDADE.png", alt: "Comunidade método PMG" },
        { src: "/AFILIANDO.png", alt: "Se afiliando e vendendo método PMG" },
        { src: "/PRODUTOR.png", alt: "Sendo um produtor método PMG" },
        { src: "/ORGANICO.png", alt: "Tráfego orgânico método PMG" }
    ];

    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
        { breakpoint: '767px', numVisible: 2, numScroll: 1 }
    ];

    const imageTemplate = (image: {src: string, alt: string}) => (
        <img
            draggable={false}
            width={300}
            height={420}
            className="min-w-[120px] min-h-[100px] select-none border-4 border-[#73D673] rounded-2xl shadow-lg"
            src={image.src}
            alt={image.alt}
        />
    );

    return (
        <div className="card mx-auto w-full md:w-[80%] text-[#73D673] text-6xl">
            <Carousel 
                value={images}
                prevIcon={MdKeyboardArrowLeft}
                nextIcon={MdKeyboardArrowRight}
                circular={true}
                showIndicators={true}
                numVisible={3}
                numScroll={1} 
                responsiveOptions={responsiveOptions} 
                itemTemplate={imageTemplate} 
            />
        </div>
    );
}