let objects = require('../../modules/Lists/object.js')
let params = require('../../modules/Lists/param.js')

class ObjectValidator {
    constructor() {
        
    }
    fullValidate(p_object) {
        if (this.isObject(p_object)) {

        } else if (this.isParam(p_object)) {

        } else {
            console.log("|-| wrong type")
            console.log("|-| type:" + p_object)
        }
    }
    isObject(p_object) {
        global.isObject = false
        objects.List.forEach((object) => {
            if (object === p_object) {
                global.isObject = true
            }
        })
    }
    isParam(p_object) {
        params.List.forEach((param) => {
            if (p_object == param) {
                return true;
            }
        });
        return false;
    }
}
module.exports = new ObjectValidator()