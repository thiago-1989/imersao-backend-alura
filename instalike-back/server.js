// Importa o framework Express para criar e gerenciar o servidor HTTP
import express from "express";
import routes from "./src/routs/postsRoutes.js";

// Inicializa o aplicativo Express
const app = express();

routes(app);

// Função para buscar o índice de um post pelo ID dentro do array `posts`
// (Obs: `posts` não foi definido no código, mas espera-se que seja um array de objetos)
function buscarPostsPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id); // Converte o parâmetro ID em número e compara
    });
}

// Inicia o servidor e faz com que ele escute na porta 3000
// Exibe uma mensagem no console quando o servidor está ativo
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



