import Cabecalho from "./componentes/Cabecalho"
import Cartao from "./componentes/Cartao"
import {Projetos} from "./dados"

export default function Home(){
  const nome = "Gabriel"
  return(
      <main>
        {Projetos.map((p)=>(
          <Cartao key={p.id}
          titulo={p.titulo}
          descricao={p.descricao}/>      
        ))}
        <Cabecalho />
        <h1>Olá, me chamo {nome}</h1>
        <p className = "intro">Bem-vindo!</p>
      </main> 
  );
}