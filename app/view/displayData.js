let fs = require('fs')
let onError = require('../packages/actions/onError.js')

class Display {
    constructor(p_data) {
        this.data = p_data
        this.display(this.data)
    }
    display(data) {
        /*fs.writeFile("../../resources/outfile.txt", data, (err) => {
            if (err) {
                onError.logError(err)
            } else {
                console.log('Displayed')
            }
        })*/
        console.log(data)
    }
}

module.exports = Display