class OnError {
    logError(err) {
        this.logs(err)
        this.throw(err)
        this.setGlobals()
    }
    logs(err) {
        console.log("|-| ups, something goes wrong :(")
        console.log("|-| " + err)
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