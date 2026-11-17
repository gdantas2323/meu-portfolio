"use client";
import { useState } from "react";
import { enviarContato } from "../services/contato";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [aviso, setAviso] = useState("");

  async function enviar(e) {
    e.preventDefault();

    try {
      await enviarContato(nome, mensagem);
      setAviso(`Obrigado, ${nome}! Recebi sua mensagem.`);
      setNome("");
      setMensagem("");
    } catch (erro) {
      setAviso(erro.message);
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