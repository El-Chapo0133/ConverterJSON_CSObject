let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class DataTransformed {
    listen() {
        do {
            setTimeout(() => {
                if (this.isDataTransformed())
                    this.triggeredEvent()
            }, 500)
        } while (this.isDataTransformed())
    }
    triggeredEvent() {
        this.Dispatcher.triggeredEvent()
    }
    isDataTransformed() {
        if (global.dataTransformed === true)
            return true
        else
            return false
    }
}

module.exports = new DataTransformed()