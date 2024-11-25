import getTodosPosts from "../model/postsModel.js";

export async function listarPosts(req, res) {
    // Busca todos os posts no banco
    const posts = await getTodosPosts(); 
    // Retorna os resultados com status HTTP 200 (OK) 
    res.status(200).json(posts); 
};
