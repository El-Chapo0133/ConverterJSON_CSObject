let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class Status {
    get OK() {
        return 200
    }
}
module.exports = new Status()