let fs = require('fs')
let onError = require("../../packages/actions/onError.js")
let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class ListParam {
    constructor() {
        this.list = []
        this.getData(() => {
            this.setList()
            log.log("params getted successfully")
        })
    }
    get List() {
        return this.list
    }
    setList() {
        this.json.params.forEach((param) => {
            this.list.push(param)
        })
    }
    /** get Content and convert it to json (param list)
     * @param {function} callback 
     */
    getData(callback) {
        fs.readFile("app/modules/Lists/data.json", (err, data) => {
            if (err) {
                onError.logError(err)
            } else {
                this.json = JSON.parse(data)
                callback()
            }
        })
    }
}
module.exports = new ListParam()