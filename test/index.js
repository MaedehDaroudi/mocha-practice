const assert = require('assert')
const app = require("../app")


describe("printFullName", () => {
    it('should print full name =>first+family', () => {
        let result=app.printFullName({first:"test",last:"testZade"})
        assert.equal(result,"test testZade")
    })
})


describe("sumTwoNumbers", () => {
    it ("should return sum (a,b) => a+b", () => {
        let result = app.sumTwoNumbers(5, 2);        
        assert.equal(result,7)
    })
})

describe("aIsLessThanb", () => {
    it("should return true if(a<b", () => {
        let result = app.aIsLessThanb(2, 5)
        assert(result)
    })
})