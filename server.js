// Importar o framework Express para criar o servidor web
import express from "express";
import routes from "./src/routes/postRoutes.js";


// Criação da aplicação Express
const app = express();
app.use(express.static("uploads")),
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("servidor escutando...");
});

