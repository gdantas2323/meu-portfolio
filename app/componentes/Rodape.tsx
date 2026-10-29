export default async function Rodape(){
    "use cache";
    const anoAtual = new Date().getFullYear();
    
    return(
        <footer className="border-t border-destaque/20 mt-16">
            <p className="max-w-4x1 mx-auto px-6 py-y text-sm text-center text-foreground/70">© {anoAtual} Criado por Gabriel Dantas
            </p>
        </footer>
    )
}