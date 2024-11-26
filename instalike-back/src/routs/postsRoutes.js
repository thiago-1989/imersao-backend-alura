import express from "express";
import multer from "multer";
import { listarPosts, enviarNovoPost, uploadImagem } from "../controller/postsController.js";

// Configura o armazenamento padrão do Multer para salvar arquivos no diretório "./uploads"
const upload = multer({ dest: "./uploads" });

const routes = (app) => {
    // Configura o middleware para aceitar e processar requisições no formato JSON
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);

    // Rota para criar um novo post
    app.post("/posts", enviarNovoPost);

    // Rota para fazer upload de uma imagem, utilizando o middleware Multer para processar o arquivo
    app.post("/upload", upload.single("imagem"), uploadImagem);

    /*
    Rota para buscar um post pelo ID
    app.get("/posts/:id", async (req, res) => {
        const result = await getTodosPosts();
        const index = buscarPostsPorId(req.params.id);
        res.status(200).json(result[index]); 
    });
    */
};

export default routes;
