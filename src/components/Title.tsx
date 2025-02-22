import { IconType } from "react-icons";

interface TitleProps {
    children: React.ReactNode;
    Icon: IconType;
}

export default function Title({children, Icon}: TitleProps) {
    return (
        <h2 className="text-[#73D673] font-bold flex items-center text-2xl md:text-4xl">
           <Icon className="me-2"/> {children} 
        </h2>
    )
}