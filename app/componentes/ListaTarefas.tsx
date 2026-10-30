"use client";
import { useState, type FormEvent } from "react";

type Tarefa = { id: number; texto: string; feita: boolean };

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    { id: 1, texto: "Estudar useState", feita: false },
    { id: 2, texto: "Fazer o formulário de contato", feita: true },
  ]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, feita: false }]);
    setNovaTarefa("");
  }

  function alternar(id: number) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t))
    );
  }

  const faltam = tarefas.filter((t) => !t.feita).length;
  const total = tarefas.length;
  const percentual =
    total === 0 ? 0 : Math.round(((total - faltam) / total) * 100);

  return (
    <section className="max-w-md mx-auto my-10 p-6 rounded-2xl bg-superficie shadow-lg border border-destaque/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-destaque">Minhas tarefas</h2>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-destaque/10 text-destaque">
          {faltam === 0 ? "Tudo feito!" : `Faltam ${faltam} de ${total}`}
        </span>
      </div>

      <div className="h-2 mb-6 rounded-full bg-destaque/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-destaque transition-all duration-500"
          style={{ width: `${percentual}%` }}
        />
      </div>

      <form onSubmit={adicionar} className="flex gap-2 mb-6">
        <input
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
          className="flex-1 px-4 py-2 rounded-lg border border-destaque/30 bg-white outline-none focus:ring-2 focus:ring-destaque/40 placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-destaque text-white font-medium hover:opacity-90 active:scale-95 transition"
        >
          Adicionar
        </button>
      </form>

      <ul className="space-y-2">
        {tarefas.map((t) => (
          <li
            key={t.id}
            className="rounded-lg hover:bg-destaque/5 transition-colors"
          >
            <label className="flex items-center gap-3 px-3 py-2 cursor-pointer">
              <input
                type="checkbox"
                checked={t.feita}
                onChange={() => alternar(t.id)}
                className="size-5 accent-destaque cursor-pointer"
              />
              <span
                className={`transition-colors ${
                  t.feita ? "line-through text-gray-400" : ""
                }`}
              >
                {t.texto}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {total === 0 && (
        <p className="text-center text-gray-400 py-4">
          Nenhuma tarefa por enquanto.
        </p>
      )}
    </section>
  );
}