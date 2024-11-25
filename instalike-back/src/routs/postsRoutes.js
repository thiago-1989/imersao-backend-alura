import express from "express";
import { listarPosts } from "../controller/postsController.js";

const routes = (app) => {
    // Configura o middleware para que o servidor aceite e processe requisições no formato JSON
    app.use(express.json());

    // Rota para buscar todos os posts
    // Faz uma requisição ao banco e retorna os posts em formato JSON
    app.get("/posts", listarPosts);

    // Rota para buscar um post pelo ID
    // Localiza o índice do post com base no ID fornecido e retorna o post correspondente
    /*
    app.get("/posts/:id", async (req, res) => {
        const result = await getTodosPosts();
        // Busca o índice do post pelo ID
        const index = buscarPostsPorId(req.params.id);
        // Retorna o post encontrado (ou gera erro se `posts` não estiver definido) 
        res.status(200).json(result[index]); 
    } );
    */
}
export default routes;
