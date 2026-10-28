export default async function Rodape(){
    "use cache";
    const anoAtual = new Date().getFullYear();
    
    return(
        <footer>
            <p>© {anoAtual} Criado por Gabriel Dantas</p>
        </footer>
    )
}