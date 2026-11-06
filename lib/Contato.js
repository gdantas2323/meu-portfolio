import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const colecao = collection(db, "mensagens");

export async function salvarMensagem(nome, mensagem) {
  await addDoc(colecao, {
    nome: nome,
    mensagem: mensagem,
    criadaEm: Date.now(),
  });
}