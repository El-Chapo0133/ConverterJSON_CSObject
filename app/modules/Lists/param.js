class ListParam {
    constructor() {
        this.list = []
        this.setList()
    }
    get List() {
        return this.list
    }
    setList() {
        this.list.push("Name")
    }
}