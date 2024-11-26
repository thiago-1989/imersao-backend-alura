import fs from "fs"; // Importa o módulo do Node.js para manipulação de arquivos
import { getTodosPosts, criarPost } from "../model/postsModel.js"; // Importa as funções do modelo relacionadas aos posts

// Função para listar todos os posts
export async function listarPosts(req, res) {
    // Busca todos os posts no banco de dados
    const posts = await getTodosPosts(); 
    // Retorna os posts em formato JSON com o status HTTP 200 (OK)
    res.status(200).json(posts); 
};

// Função para enviar (criar) um novo post
export async function enviarNovoPost(req, res) {
    const novoPost = req.body; // Obtém os dados do corpo da requisição
    try {
        // Chama a função para criar o post no banco
        const postCriado = await criarPost(novoPost); 
        // Retorna o post criado em formato JSON com status HTTP 200
        res.status(200).json(postCriado); 
    } catch (erro) {
        // Loga o erro no console e retorna um status HTTP 500 (Erro Interno do Servidor)
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    } 
}

// Função para fazer upload de uma imagem e criar um post associado
export async function uploadImagem(req, res) {
    // Cria um novo objeto de post com informações básicas
    const novoPost = {
        descricao: "", // Descrição vazia inicialmente
        imgUrl: req.file.originalname, // Nome original do arquivo como URL da imagem
        alt: "" // Alt vazio inicialmente
    };

    try {
        // Cria o post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Define o caminho final do arquivo de imagem com base no ID do post criado
        const imagemAtualizada = `uploads/${postCriado.insertedId}.avif`; 
        // Renomeia o arquivo enviado para o caminho final
        fs.renameSync(req.file.path, imagemAtualizada); 
        // Retorna o post criado em formato JSON com status HTTP 200
        res.status(200).json(postCriado); 
    } catch (erro) {
        // Loga o erro no console e retorna um status HTTP 500 (Erro Interno do Servidor)
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    } 
}
