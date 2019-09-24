class Generator {
    constructor(p_data) {
        this.data = p_data
        this.getJson()
        this.dataTransformed = this.generateData()
    }
    generateData() {
        /** TODO :
         * generate c# code from json
         */
        return this.data
    }
    getJson() {
        this.json = JSON.parse(this.data)
    }
}

module.exports = Generator