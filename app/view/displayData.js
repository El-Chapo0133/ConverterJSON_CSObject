let fs = require('fs')
let onError = require('../packages/actions/onError.js')
let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class Display {
    constructor(p_data) {
        this.data = p_data
        this.display(this.data)
    }
    display(data) {
        fs.writeFile("./resources/outfile.txt", data, (err) => {
            if (err) {
                onError.logError(err)
            } else {
                log.log('successfully displayed in ./resources/outfile.txt ! :D')
            }
        })
    }
}

module.exports = Display