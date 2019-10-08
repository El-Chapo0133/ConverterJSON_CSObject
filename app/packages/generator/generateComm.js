class GenerateComms {
    generateComms(object) {
        var t_data = "/** object:" + object.ObjectName + "\n"
        object.params.forEach((param) => {
            t_data += " * @param {" + param.name + "}: " + param.value + "\n"
        })
        t_data += " * */\n"
        return t_data
    }
}
module.exports = new GenerateComms()