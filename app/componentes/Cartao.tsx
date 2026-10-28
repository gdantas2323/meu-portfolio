import Link from "next/link";
type CartaoProps = {
    id: number;
    titulo: string;
    descricao: string;
}
export default function Cartao({id, titulo, descricao}:CartaoProps){
    return(
            <Link href={`/projetos/${id}`}>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        </Link>
    );
}