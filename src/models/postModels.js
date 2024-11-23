// Importar a função para conectar ao banco de dados
import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

// Estabelece a conexão com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona que busca todos os posts no banco de dados
export async function getTodosPosts(){
    const db = conexao.db("imersao-instabyte"); // Acessa o banco de dados "imersao-instabyte"
    
    const colecao = db.collection("posts"); // Acessa a coleção "posts"
    
    return colecao.find().toArray(); // Retorna os posts como um array
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instabyte"); // Acessa o banco de dados "imersao-instabyte"
    const colecao = db.collection("posts"); // Acessa a coleção "posts"

    return colecao.insertOne(novoPost) // Retorna os posts como um array
}

export async function atualizarPost(id, novoPost){
    const db = conexao.db("imersao-instabyte"); // Acessa o banco de dados "imersao-instabyte"
    const colecao = db.collection("posts"); // Acessa a coleção "posts"
    const objID = ObjectId.createFromHexString(id); 

    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost});

}