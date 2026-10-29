import Cabecalho from "./componentes/Cabecalho"
import Cartao from "./componentes/Cartao"
import {Projetos} from "./dados"

export default function Home(){
  const nome = "Gabriel"
  return(
      <main className="max-w4x1 mx-auto px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Cabecalho />
        {Projetos.map((p)=>(
          <Cartao key={p.id}
          id={p.id}
          titulo={p.titulo}
          descricao={p.descricao}
          tecnologias={p.tecnologias}/>      
        ))}
        <h1>Olá, me chamo {nome}</h1>
        <p className = "intro">Bem-vindo!</p>
        </div>
      </main> 
  );
}