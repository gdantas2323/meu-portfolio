"use client";
import { useState } from "react";
import BuscaCep from "./BuscaCep";

export default function PaginaCep() {
  const [cep, setCep] = useState("");
  const [aviso, setAviso] = useState("");
  const [endereco, setEndereco] = useState(null);

  async function enviarCep(e) {
    e.preventDefault();

    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setAviso("Digite um CEP com 8 números.");
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const dados = await res.json();

      if (dados.erro) {
        setAviso("CEP não encontrado.");
        setEndereco(null);
        return;
      }

      setEndereco(dados);
      setAviso("");
    } catch {
      setAviso("Erro ao buscar o CEP. Tente de novo.");
    }
  }

  return (
    <div>
      <form onSubmit={enviarCep}>
        <input
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite seu CEP"
        />
        <button type="submit">Enviar</button>
      </form>

      <p>{aviso}</p>

      {endereco && <BuscaCep endereco={endereco} />}
    </div>
  );
}