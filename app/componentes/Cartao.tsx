import Link from "next/link";
type CartaoProps = {
    id: number;
    titulo: string;
    descricao: string;
    tecnologia: string[];
};

export default function Cartao({id, titulo, descricao, tecnologias}:CartaoProps){
    return(
        <div className="bg-superficie rounded-x1 shadow-md p-6 border border-destaque/20">
            <Link href={`/projetos/${id}`}>
            <h2 className="text-x1 font-semibold text-destaque">{titulo}</h2>
            <p className="mt-2">{descricao}</p>
            <ul>
                {tecnologias.map((tec) => (
                    <li key={tec}>{tec}</li>
            ))}
            </ul>
            </Link>
        </div>
    );
}