class LogData {
    constructor() {
        this.index = 0
    }
    log(data) {
        console.log("|" + ("000".substring(0, 3 - String(this.index).length) + this.index++) + "| " + data)
    }
}
module.exports = new LogData()