import {db} from "./firebase";
import {collection, addDoc, updateDoc, deleteDoc, getDocs, doc, query, orderBy} from "firebase/firestore";

export async function salvarDocumento(nomeColecao, dados){
    const ref = await addDoc (collection(db, nomeColecao), dados);
    return ref.id;
}

export async function listarDocumentos(nomeColecao, campoOrdem) {
  const consulta = query(collection(db, nomeColecao), orderBy(campoOrdem));
  const resultado = await getDocs(consulta);
  return resultado.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function atualizarDocumento(nomeColecao, id, campos) {
  await updateDoc(doc(db, nomeColecao, id), campos);
}

export async function removerDocumento(nomeColecao, id) {
  await deleteDoc(doc(db, nomeColecao, id));
}