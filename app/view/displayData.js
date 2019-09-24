class Display {
    constructor(p_data) {
        this.data = p_data
        this.display(this.data)
    }
    display() {
        console.log(this.data)
    }
}

module.exports = Display