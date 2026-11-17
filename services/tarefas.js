import {salvarDocumento, atualizarDocumento, listarDocumentos, removerDocumento} from "../lib/firestore";

export async function listarTarefas() {
    return await listarDocumentos("tarefas", "criadaEm");
}
export async function criarTarefa(texto) {
    if (texto.trim() === "") {
        throw new Error("Texto da tarefa não pode ser vazio");
    }
    const dados = {texto: texto, feita: false, criadaEm: Date.now()};
    const id = await salvarDocumento("tarefas", dados);
    return {id, ...dados};
}
export async function marcarTarefa(id, feita) {
    await atualizarDocumento("tarefas", id, {feita: feita});
}
 export async function removerTarefa(id) {
    await removerDocumento("tarefas", id);
}  