/* Express = Framework que lida com requisição e resposta */
const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const data = require("./data");

/* Permitir que o express acesse arquivos estáticos */
server.use(express.static("styles"));
server.use(express.static("images"));
server.use(express.static("js"));

/* Setando o nunjucks como template engine */
server.set("view engine", "njk");

/* Setando o diretório onde está o conteúdo a ser exibido (pages) */
nunjucks.configure("pages",{
    express: server,
    autoescape: false
});

server.get("/", (request,response) =>{
    return response.render("index", {items: data});
});

server.get("/about", (request,response) =>{
    return response.render("about");
});

server.get("/recipes", (request,response) =>{
    return response.render("recipes", {items: data});
});

server.get("/recipe/:index", (request,response) =>{
    //  const id = request.query.id,
    const id = request.params.index,
    recipe = data[id]; 
    return response.render("recipe", {item: recipe});
});

server.listen(5000, ()=>{
    console.log("Server is Running.");
});