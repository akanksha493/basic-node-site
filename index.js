const http = require("http");
const fs = require('fs')
const port = 8000

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'text/html'})
    if(req.url==='/' || req.url==='/index.html'){
        fs.readFile("index.html", (error, data) => {
            if(error){
                console.log(error)
            }else{
                res.write(data)
                res.end()
            }
        })
    }
    else if(req.url==='/about' || req.url==='/about.html'){
        fs.readFile("about.html", (error, data) => {
            if(error){
                console.log(error)
            }else{
                res.write(data)
                res.end()
            }
        })
    }
    else if(req.url==='/contact-me' || req.url==='/contact-me.html'){
        fs.readFile("contact-me.html", (error, data) => {
            if(error){
                console.log(error)
            }else{
                res.write(data)
                res.end()
            }
        })
    }
    else{
        fs.readFile("404.html", (error, data) => {
            if(error){
                console.log(error)
            }else{
                res.write(data)
                res.end()
            }
        })
    }
})

server.listen(port, (error, data)=>{
    if(error) console.log(error)
    else console.log("server is running on port "+port)
});