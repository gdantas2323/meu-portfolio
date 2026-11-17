import Cabecalho from "../components/Cabecalho"
import Cartao from "../components/Cartao"
import {Projetos} from "../components/dados"

export default function Home(){
  const nome = "Gabriel"
  return(
      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <h1>Olá, me chamo {nome}</h1>
          <p className = "intro">Bem-vindo!</p>
        <Cabecalho />
        {Projetos.map((p)=>(
          <Cartao key={p.id}
          id={p.id}
          titulo={p.titulo}
          descricao={p.descricao}
          tecnologias={p.tecnologias}/>      
        ))} 
        </div>
      </main> 
  );
}