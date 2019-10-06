let c_getJson = require('../../modules/getJson/getJson.js')
let onError = require('../actions/onError.js')

class Generator {
    constructor(p_data) {
        this.data = p_data
        this.dataTransformed = this.generateData()
    }
    generateData() {
        /** TODO :
         * generate c# code from json
         */
        // try to get a json
        this.getJson()
        if (this.isJsonRight(this.json)) {
            console.log("|-| json successfully getted")
            var data = this.json.data
            data.objects.forEach((element) => {
                /** ToDo :
                 * generate data from object one by one
                 * typeof {element}: {}
                 */
                
            })
        } else {
            onError.logError(this.json.errorsLog)
        }
        return this.data
    }
    getJson() {
        let getJson = new c_getJson(this.data)
        this.json = getJson.getJson()
    }
    isJsonRight(json) {
        if (!json.errors)
            return true
        else
            return false
    }
}

module.exports = Generator