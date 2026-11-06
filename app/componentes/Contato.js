"use client";
import { useState } from "react";
import { salvarMensagem } from "../../lib/Contato";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [aviso, setAviso] = useState("");

  async function enviar(e) {
    e.preventDefault();

    if (nome.trim().length < 3) {
      setAviso("Digite seu nome completo.");
      return;
    }
    if (mensagem.trim().length < 5) {
      setAviso("Escreva uma mensagem um pouco maior.");
      return;
    }

    try {
      await salvarMensagem(nome.trim(), mensagem.trim());
      setAviso(`Obrigado, ${nome}! Recebi sua mensagem.`);
      setNome("");
      setMensagem("");
    } catch (erro) {
      setAviso("Não foi possível enviar. Tente de novo.");
    }
  }

  return (
    <><div>
      <form onSubmit={enviar}>
        <div>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome" />
        </div>
        <div>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Sua mensagem"
            rows={4} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p>{aviso}</p>
    </div>
    <div>
        <p>Contato:</p>
        <p>gabriel@bravilsistemas.com</p>
    </div></>
  );
}