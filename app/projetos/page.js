export function generateStaticParams() {
  return Projetos.map((p) => ({ id: String(p.id) }));
}
export default function Projetos(){
    return (
        <main>
            <h1>Meus Projetos</h1>
            <p>Tudo o que já construí.</p>
        </main>
    );
}