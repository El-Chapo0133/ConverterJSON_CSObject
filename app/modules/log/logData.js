class LogData {
    constructor() {
        this.index = 0
    }
    log(data) {
        console.log("|-" + this.index++ + "| " + data)
    }
}
module.exports = new LogData()