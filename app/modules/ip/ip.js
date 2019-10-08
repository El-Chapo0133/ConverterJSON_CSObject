let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class Ip {
    get Ip() {
        return "127.0.0.1"
    }
}
module.exports = new Ip()