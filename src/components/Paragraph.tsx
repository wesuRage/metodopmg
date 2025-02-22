"use client"

interface ParagraphProps {
    children: React.ReactNode
}

export default function Paragraph({children}: ParagraphProps){
    return (
        <p className="text-stone-400">{children}</p>
    )
}