const PORT = 8085

let express = require('express')
let app = express()

app.get('/', (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.write("Everythings ok here :)")
    response.end()
    console.log("|-| page loaded")
}).listen(PORT, (err) => {
    if (!err) {
        console.log("|-| Server started")
    } else {
        console.log("|-| Error on server's start")
        console.log("|-| " + err)
    }
})