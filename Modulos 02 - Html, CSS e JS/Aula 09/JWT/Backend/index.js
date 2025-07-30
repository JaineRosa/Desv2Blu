/*
Pacotes utilizados
Express
nodemon
cors
JsonWebToken (jwt.io)
*/

//importar o express
const express = require('express');

//importar o cors
const cors = require('cors');

//importar o jsonwebtoken
const jwt = require('jsonwebtoken');

//criar o objeto app
const app = express();

//referencia o cors
app.use(cors());

//aceitar requisições contendo JSON (body)
app.use(express.json());

//palavra / frase secreta
const segredo = "Ready";

//rota para criar o token
app.post('/', (req, res) => {
    //obter o nome
    const { nome } = req.body;

    //gerar token
    const token = jwt.sign({ nome }, segredo, { expiresIn: '1h' });

    //retornar
    res.status(200).json(token)
});

//rota para validar o token
app.get('/',(req,res) =>{
    //extrair bearer do cabeçalho
    const headers = req.headers.authorization;

    //extrair o token
    const token = headers.split(' ')[1];

   //try cat
   try{
    //validar token
    const validarToken = jwt.verify(token, segredo);
    //retornar
    res.status(200).json({mensagem: 'Autenticado! O nome informado é ' + validarToken.nome});
   }catch(erro){
    res.status(400).json({mensagem: 'Falha ' + erro})
   }
    
})

//servidor
app.listen(8080)
