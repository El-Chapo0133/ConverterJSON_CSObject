let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class Port {
    get Port() {
        return "8085"
    }
}
module.exports = new Port()