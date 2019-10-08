let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class OnError {
    logError(err) {
        this.logs(err)
        this.throw(err)
        this.setGlobals()
    }
    logs(err) {
        log.log("ups, something goes wrong :(")
        log.log(err)
    }
    throw(err) {
        throw(err)
    }
    setGlobals() {
        global.dataAcquired = false
        global.dataTransformed = false
    }
}

module.exports = new OnError()