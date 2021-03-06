let c_getJson = require('../../modules/getJson/getJson.js')
let onError = require('../actions/onError.js')
let objectValidator = require('../../modules/objectValidator/objectValidator.js')
let generateComms = require('./generateComm.js')
let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class Generator {
    constructor(p_data) {
        this.data = p_data
        this.dataTransformed = this.generateData()
    }
    generateData() {
        /** temp var to store data generated for this object(element) */
        var t_data = ""
        /** temp var to store object dest */
        var t_dest = ""
        var r_data = ""
        var index = 1
        /** TODO :
         * generate c# code from json
         */
        // try to get a json
        this.getJson()
        if (this.isJsonRight(this.json)) {
            log.log("json successfully converted")
            var data = this.json.data
            data.objects.forEach((element) => {
                /** ToDo :
                 * generate data from object one by one
                 * typeof {element}: {}
                 */
                if (this.isUndefined(element.ObjectName)) {
                    onError("no ObjectType gave")
                } else {
                    objectValidator.isObject(element.ObjectName)
                    if (global.isObject) {
                        /** generate comms */
                        t_data += generateComms.generateComms(element)
                        t_data += element.ObjectName + " object" + index + " = new " + element.ObjectName + "() {\n"
                    } else {
                        onError.logError("Wrong object input")
                    }
                }
                /** add every param */
                element.params.forEach((element) => {
                    t_data += "    " + this.addParam(element)
                })
                /** remove last ',' */
                t_data = t_data.substr(0, t_data.length - 2)
                t_data += "\n}\n"
                t_dest += element.dest + ".Controls.Add(object" + index++ + ");\n"
            })
        } else {
            onError.logError(this.json.errorsLog)
        }
        var final_data = (t_data + "\n\n" + t_dest).split("\n")
        final_data.forEach((line) => {
            for (index = 0; index < this.json.data.nbSpace; index++) {
                r_data += " "
            }
            r_data += (line + "\n")
        })
        return r_data
    }
    addParam(param) {
        switch(param.name) {
            case "Name": {
                return 'Name = "' + param.value + '",\n'
            }
            case "Location": {
                if (this.isSeparatedWithSemiColon(param.value))
                    return 'Location = new Point(' + param.value + '),\n'
                else
                    onError.logError("bad value given : " + param.value)
            }
            case "Size": {
                if (this.isSeparatedWithSemiColon(param.value))
                    return 'Size = new Size(' + param.value + '),\n'
                else 
                    onError.logError("bad value given : " + param.value)
            }
            default: {
                onError.logError("Bad param given : " + param.name)
            }
        }
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
    isUndefined(data) {
        if (data === "undefined")
            return true
        else
            return false
    }
    isSeparatedWithSemiColon(data) {
        if (data.split(';').length === 2)
            return true
        else
            return false
    }
}
module.exports = Generator