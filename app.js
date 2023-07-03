require("dotenv").config()

const express = require("express")

const app = express();

let PORT = process.env.PORT
let HOST = process.env.HOST

app.get('/', (req,res) => {
    res.send(`<h1>Hello Home!</h1>`)
})
app.get('/:page',(req,res) => {
    let page = req.params.page 
    res.send(`this is ${page}`)
})
app.get('/aboutme/:page' , (req,res) => {
    let page = req.params.page
    if(page === "career"){
        res.send("This is about me" +page)
    } else if (page === "hobbies") {
        res.send("This is about my motorcycle")
    }else {
    res.send("<h1>This is " + page + " page.</h1>")
    }
})
app.get(`/aboutme/career`, (req,res) => {
    res.send(`<h2>This is career stuff</h2>`)
})
app.get("/aboutme/hobbies", (req,res) => {
    let name = req.params.name
    res.send(`<h2>This is about motorcycles</h2><br><h3>You are on ${name}page.`)
})
app.get("/form", (req,res) => {
    res.send (`
        <form action="/testing">
            <input name="name">
                <button type = "submit">GO!</button>
        </form>
    `)
})

app.get("/testing",(req,res) => {
    let {name} = req.query
    res.send(`<h1>Hello, ${name}</h1>`)
})



app.listen(PORT,HOST, () => {
    console.log(`[server]: listening on ${HOST}:${PORT}`)
})