const fs = require('fs')

class Initializer {
    constructor() {
        this.data = this.getFile()
    }
    getData() {
        if (!this.data) {
            return "underfined!"
        } else {
            return this.data
        }
    }
    getFile() {
        const directoryPath = ENTRYPOINT + "resources/"
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                console.log("|-| ups, something goes wrong on the Initializer")
                console.log("|-| " + err)
            } else {
                console.log("|-| files loaded")
                files.forEach((file) => {
                    if (this.isFileRight(file)) {
                        console.log("|-| file selectionned : " + file)
                        fs.readFile(directoryPath + file, (err, data) => {
                            if (err) {
                                console.log("|-| ups, something goes wrong on fs.readFile")
                                console.log("|-| " + err)
                                throw(err)
                            } else {
                                return data.toString()
                            }
                        })
                    }
                })
            }
        })
    }
    isFileRight(file) {
        if (file.substring(file.length - 5, file.length) === ".json") {
            return true
        } else {
            return false
        }
    }
}

module.exports = new Initializer()