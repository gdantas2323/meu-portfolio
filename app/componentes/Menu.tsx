import Link from "next/link";

const links = [
    {href: "/",texto: "Inicio"},
    {href: "/projetos",texto: "Projetos"},
    {href: "/contatos",texto: "Contatos"},

];

export default function Menu(){
return(
<nav className="bg-superficie border-b border-destaque/20">
    <div className="max-w-4xl mx-auto px-6 py-4 flex gap-6">
        {links.map((link) => (
        <Link
            key={link.href}
            href={link.href}
            className="font-medium hover:text-destaque transition-colors">
            {link.texto}
            </Link>
        ))}
        
    </div>
</nav>
);
}