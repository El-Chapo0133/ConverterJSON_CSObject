let fs = require('fs')
let onError  =require("../../packages/actions/onError.js")
let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class ListObjects {
    constructor() {
        this.list = []
        this.getData(() => {
            this.setList()
            log.log("objects getted successfully")
        })
    }
    get List() {
        return this.list
    }
    setList() {
        this.json.objects.forEach((object) => {
            this.list.push(object)
        })
    }
    /** get Content and convert it to json (object list)
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

module.exports = new ListObjects()