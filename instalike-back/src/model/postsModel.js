// Importa a função para conectar ao banco de dados, definida em outro arquivo
import conectarAoBanco from "../config/dbConfig.js";


// Conecta ao banco de dados usando a string de conexão armazenada na variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts no banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados
    const db = conexao.db("imersao-instabytes"); 
    // Seleciona a coleção (documentos)
    const colecao = db.collection("posts"); 
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray(); 
}

export async function criarPost(novoPost) {
    // Seleciona o banco de dados
    const db = conexao.db("imersao-instabytes"); 
    // Seleciona a coleção (documentos)
    const colecao = db.collection("posts"); 
    // Insere um novo post
    return colecao.insertOne(novoPost); 
}
