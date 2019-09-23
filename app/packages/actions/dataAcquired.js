class DataAcquired {
    data
    constructor(p_initializer) {
        this.initializer = p_initializer
    }
    listen() {
        do {
            setTimeout(500, () => {
                this.data = this.initializer.getData()
            })
        } while(this.data === "undefined!")
        this.triggerdEvent()
    }
    triggerdEvent() {
        this.setGlobals()
    }
    setGlobals() {
        global.dataAcquired = true
    }
}

module.exports = new DataAcquired()