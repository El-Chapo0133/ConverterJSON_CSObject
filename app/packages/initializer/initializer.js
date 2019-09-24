const fs = require('fs')
let onError = require('../actions/onError.js')

class Initializer {
    constructor() {
        this.data = this.getFile()
    }
    getData() {
        if (!this.data) {
            return "undefined!"
        } else {
            return this.data
        }
    }
    getFile() {
        const directoryPath = ENTRYPOINT + "resources/"
        this.getDir(directoryPath)
    }
    getDir(p_path) {
        fs.readdir(p_path, (err, files) => {
            if (err) {
                onError.logError(err)
            } else {
                this.foreachFiles(files, p_path)
            }
        })
    }
    foreachFiles(p_files, p_directoryPath) {
        console.log("|-| files loaded")
        p_files.forEach((file) => {
            if (this.isFileRight(file)) {
                this.readFile(file, p_directoryPath)
            }
        })
    }
    readFile(p_file, p_directoryPath) {
        console.log("|-| file selectionned : " + p_file)
        fs.readFile(p_directoryPath + p_file, (err, data) => {
            if (err) {
                onError.logError(err)
            } else {
                this.setVariables(data.toString())
            }
        })
    }
    setVariables(p_data) {
        this.setGlobals()
        console.log("|-| file content getted")
        this.data = p_data.toString()
    }
    isFileRight(p_file) {
        if (p_file.substring(p_file.length - 5, p_file.length) === ".json") {
            return true
        } else {
            return false
        }
    }
    setGlobals() {
        global.dataAcquired = true
    }
}

module.exports = new Initializer()