"use client"

interface MainProps {
    children: React.ReactNode;
}

export default function Main({children}: MainProps){
    return (
        <main className="mt-20 w-full h-full ">
            {children}
        </main>
    );
}