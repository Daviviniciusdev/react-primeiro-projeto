import { ReactNode } from "react";

type Props = {
    frase: string;
    autor?: string;
}


export const Card = ( {frase, autor }: Props) => {
    return (
        <div className=" w-96 border-2 border-blue-600 p-5 text-3xl text-center">
           <h3 className="font-bold italic text-2xl">{frase}</h3>
           {autor &&
           <p className=" text-right italic text-sm">{autor}</p>
           }
           
           
        </div>
    )
}