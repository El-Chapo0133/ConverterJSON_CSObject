const PORT = 8085
global.ENTRYPOINT = "/home/loris/00_Codes/ConverterJSON_CSObject/"
global.dataAcquired = false
global.dataTransformed = false

let initializer = require('../packages/initializer/initializer.js')
let dataAcquired = require('../packages/actions/dataAcquired.js')
let dataTransformed = require('../packages/actions/dataTransormed.js')
let c_dispatcher = require('../packages/dispatcher/dispatcher.js')
let dispatcher = new c_dispatcher(dataAcquired, dataTransformed, initializer)
dispatcher.startListeningAcquire()
let onError = require("../packages/actions/onError.js")
let express = require('express')
let app = express()

app.get('/', (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.write("Everythings ok here :)")
    response.end()
    console.log("|-| page loaded")
    console.log(initializer.getData())
}).listen(PORT, (err) => {
    if (!err) {
        console.log("|-| Server started")
    } else {
        onError.logError(err)
    }
})