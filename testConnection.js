import tls from 'tls';
tls.DEFAULT_MIN_VERSION = 'TLSv1.2';


import { MongoClient } from "mongodb";

const uri = "mongodb+srv://mateusdesena:gH5dc3Zsm3J6yur6@cluster0.8qjcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  const client = new MongoClient(uri);

  try {
    console.log("Tentando conectar ao MongoDB...");
    await client.connect();
    console.log("Conexão bem-sucedida!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  } finally {
    await client.close();
    console.log("Conexão encerrada.");
  }
}

testConnection();
