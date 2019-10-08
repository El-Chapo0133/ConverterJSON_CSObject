let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class GetJson {
    constructor(p_data) {
        this.data = p_data
    }
    getJson() {
        try {
            var json = {}
            json.data = JSON.parse(this.data)
            json.errors = false
            json.errorsLog = "null"
            return json
        } catch(ex) {
            var json = JSON.parse('{"data": "null", "errors": true, "errorsLog": "' + ex + '"}');
            return json
        }
    }
}
module.exports = GetJson