import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

const colecao = collection(db, "tarefas");

export async function listarTarefas() {
  const consulta = query(colecao, orderBy("criadaEm"));
  const resultado = await getDocs(consulta);
  return resultado.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function criarTarefa(texto) {
  const dados = { texto: texto, feita: false, criadaEm: Date.now() };
  const ref = await addDoc(colecao, dados);
  return { id: ref.id, ...dados };
}

export async function marcarTarefa(id, feita) {
  await updateDoc(doc(db, "tarefas", id), { feita: feita });
}

export async function removerTarefa(id) {
  await deleteDoc(doc(db, "tarefas", id));
}