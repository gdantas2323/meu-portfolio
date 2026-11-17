import { Suspense } from "react";

async function Repositorios() {
  const res = await fetch("https://api.github.com/users/gdantas2323/repos");
  const repos = await res.json();

  return (
    <ul>
      {repos.map((r) => (
        <li key={r.id}>{r.name}</li>
      ))}
    </ul>
  );
} 

export default function Github() {
  return (
    <main>
      <h1>Meus repositórios</h1>
      <Suspense fallback={<p>Carregando repositórios...</p>}>
        <Repositorios />
      </Suspense>
    </main>
  );
}