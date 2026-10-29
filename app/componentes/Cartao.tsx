"use client"
import {useState} from "react";
import Link from "next/link";
import Curtir from "./Curtir";

type CartaoProps = {
    id: number;
    titulo: string;
    descricao: string;
    tecnologias: string[];
};


export default function Cartao({id, titulo, descricao, tecnologias}:CartaoProps){

const [aberto, setAberto] = useState(false);
    
    return(
        <div className="bg-superficie rounded-x1 shadow-md p-6 border border-destaque/20">
            <Link href={`/projetos/${id}`}>
            <h2 className="text-x1 font-semibold text-destaque">{titulo}</h2>
            </Link>
                <div>
                    <button onClick={() => setAberto(!aberto)}>
                        {aberto ? "Esconder" : "Ver detalhes"}
                    </button>
                    {aberto && <p>Feito com HTML,CSS e JS</p>}
                </div>
            <ul>
                {tecnologias.map((tec) => (
                    <li key={tec}>{tec}</li>
            ))}
            </ul>

            <Curtir />
        </div>
    );
}