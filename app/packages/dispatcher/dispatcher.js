let c_generator = require('../generator/generator.js')
let c_display = require('../../view/displayData.js')
let log = require(global.ENTRYPOINT + "/app/modules/log/logData.js")

class Dispatcher {
    constructor(p_dataAcquired, p_dataTransformed, p_initializer) {
        this.dataAcquired = p_dataAcquired
        this.dataTransformed = p_dataTransformed
        this.initializer = p_initializer

        this.dataAcquired.Dispatcher = this
        this.dataTransformed.displatcher = this
    }
    startListeningAcquire() {
        this.dataAcquired.listen()
        log.log("started listening [Acquire]")
    }
    startListeningTransform() {
        log.log("started listening [Transform]")
        this.dataTransformed.listen()
    }
    triggeredEvent() {
        if (this.isDataTransformed())
            this.startTransform()
        else
            console.log("|-| started display")
            this.startDisplay()
    }
    startTransform() {
        this.generator = new c_generator(this.initializer.getData())
    }
    startDisplay() {
        log.log("transformation made")
        log.log("displaying...")
        var display = new c_display(this.generator.dataTransformed)
    }
    isDataTransformed() {
        if (global.dataTransformed === false)
            return true
        else
            return false
    }
}

module.exports = Dispatcher