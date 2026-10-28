import Link from "next/link";

export default function Menu(){
return(
<nav>
    <Link href="/">Início</Link>
    <Link href="/projetos">Projetos</Link>
    <Link href="/contatos">Contatos</Link>
</nav>
)
}