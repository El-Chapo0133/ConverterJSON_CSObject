class ListObjects {
    constructor() {
        this.list = []
        this.setList()
    }
    get List() {
        return this.list
    }
    setList() {
        this.list.push("TextBox")
        this.list.push("Label")
    }
}

module.exports = new ListObjects()