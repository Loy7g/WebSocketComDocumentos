import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const cliente = new MongoClient(process.env.MONGO_URI);

let documentosColecao, usuariosColecao;

try {
    await cliente.connect();

    const db = cliente.db("Websocket");
    documentosColecao = db.collection("Documents");
    usuariosColecao = db.collection("usuarios");

    console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
    console.log(erro);
}

export { documentosColecao, usuariosColecao };
