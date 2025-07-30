/*
Pacotes/ dependencias
    -Express
    -Nodemon
    -cors
    -express-fileupload
 */

//importar o express
const express = require('express');

//importar o cors
const cors = require('cors');

//importar o express-fileupload
const fileUpload = require('express-fileupload');

//importar o path
const path = require('path');

//Criar um objeto app
const app = express();

//adicionar o cors
app.use(cors());

//adicionar o fileupload
app.use(fileUpload());

console.log(__dirname)

////criar rota para realizar o upload (form-data)
app.post('/', (req, res) => {
    //obter o arquivo
    const arquivo = req.files.arquivo;

    //definir caminho d oupload e nome do arquivo
    const destino = path.join(__dirname, 'uploads', arquivo.name);

    //mover o arquivo
    arquivo.mv(destino);

    //retorno api
    res.status(200).json({ mensagem: 'Upload realizado com sucesso!' })

});

//servidor
app.listen(8080);