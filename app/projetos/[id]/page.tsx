import { notFound } from "next/navigation";
import { Projetos } from "../../dados";

export function generateStaticParams() {
  return Projetos.map((p) => ({ id: String(p.id) }));
}

export default async function Projeto({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projeto = Projetos.find((p) => String(p.id) === id);

  if (!projeto) {
    notFound();
  }

  return (
    <main>
      <h1>{projeto.titulo}</h1>
      <p>{projeto.descricao}</p>
    </main>
  );
}