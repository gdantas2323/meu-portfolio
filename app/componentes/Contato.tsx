"use client";
import { useState, type FormEvent } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [aviso, setAviso] = useState("");

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nome.trim().length < 3) {
      setAviso("Digite seu nome completo.");
      return;
    }
    setAviso(`Obrigado, ${nome}!`);
    setNome("");
  }

  return (
    <div>
      <form onSubmit={enviar}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
        />
        <button type="submit">Enviar</button>
      </form>
      <p>{aviso}</p>
    </div>
  );
}