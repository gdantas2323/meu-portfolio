import {salvarDocumento} from "../lib/firestore";

export async function enviarContato (nome, mensagem) {
      
        if (nome.trim().length < 3) {             
            throw new Error("Nome muito curto(precisa ter pelo menos 3 caracteres)");
        }
        if (mensagem.trim().length < 5) {
          throw new Error("Mensagem muito curta(precisa ter pelo menos 5 caracteres)");
        }
     
     return await salvarDocumento("mensagens", {
        nome: nome.trim(),
        mensagem: mensagem.trim(),
        criadaEm: Date.now(),
    });
} 