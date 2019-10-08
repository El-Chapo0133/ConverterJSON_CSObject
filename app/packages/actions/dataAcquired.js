let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class DataAcquired {
    listen() {
        do {
            setTimeout(() => {
                if (this.isDataAcquired())
                    this.triggerdEvent()
            }, 500)
        } while(this.isDataAcquired())
    }
    triggerdEvent() {
        this.Dispatcher.startListeningTransform()
        this.Dispatcher.triggeredEvent()
    }
    isDataAcquired() {
        if (global.dataAcquired === true)
            return true
        else
            return false
    }
}

module.exports = new DataAcquired()