const express = require('express')
const app = express()


app.use((req, res,next)=>{
        console.log('inicio') 
        next()   
})

app.use((req, res,next)=>{
    console.log('Meio')  
    next()  
})

app.get('/pagina1',(req,res,next)=>{
    console.log('fim')
    res.json({
        name: 'Macbook',
        preco: 11000,
        desconto: 0.1
    })
})

/* Essa função só será chamada quando se a url for /sequencia


app.use('/sequencia',(req,res)=>{
    res.send("Voce entrou na /sequencia")
})

 */


app.listen(3000, () =>{
    console.log('Backend executando')
})