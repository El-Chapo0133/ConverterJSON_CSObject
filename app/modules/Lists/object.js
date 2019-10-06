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
    }
}

module.exports = new ListObjects()