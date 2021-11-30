const express = require("express")

const app = express()

app.use(express.json())

// GET -> Buscar uma informação do servidor;
// POST -> Inserir uma informação no servidor;
// PUT -> Alterar uma informação no servidor; 
// PATCH -> Alterar uma informação específica no servidor; 
// DELETE -> Deletar uma informação no servidor.

// Route Params (Ex: /:id) -> Identificar, buscar, editar e deletar um recurso;
// Query Params (EX: /page=1&order=asc) -> Paginar e filtrar um recurso;
// Body Params (EX: JSON) -> Alterar ou inserir um  recurso;

app.get("/courses", (request, response) => {
    const query = request.query
    console.log(query)
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response) => {
    const { id } = request.params
    console.log(id)
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 4"])
})

// localhost:3333
app.listen(3333)