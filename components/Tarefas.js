"use client";
import { useState, useEffect } from "react";
import {
  listarTarefas,
  criarTarefa,
  marcarTarefa,
  removerTarefa,
} from "../services/tarefas.js";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    listarTarefas().then(setTarefas);
  }, []);

  async function criar(e) {
    e.preventDefault();
      try {
        const nova = await criarTarefa(texto);
        setTarefas([...tarefas, nova]);
        setTexto("");
      } catch (erro) {
        setAviso(erro.message);
      }
    }
  async function marcar(id) {
    const tarefa = tarefas.find((t) => t.id === id);
    await marcarTarefa(id, !tarefa.feita);
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t))
    );
  }

  async function remover(id) {
    await removerTarefa(id);
    setTarefas(tarefas.filter((t) => t.id !== id));
  }


  return (
    <div>
      <form onSubmit={criar}>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.feita}
              onChange={() => marcar(t.id)}
            />
            {t.texto}
            <button onClick={() => remover(t.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}