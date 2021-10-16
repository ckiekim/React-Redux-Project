const rewire = require("rewire")
const schedule = rewire("./schedule")
const getScheduleListAPI = schedule.__get__("getScheduleListAPI")
const postScheduleAPI = schedule.__get__("postScheduleAPI")
const patchScheduleAPI = schedule.__get__("patchScheduleAPI")
const deleteScheduleAPI = schedule.__get__("deleteScheduleAPI")
// @ponicode
describe("getScheduleListAPI", () => {
    test("0", () => {
        let callFunction = () => {
            getScheduleListAPI(28)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getScheduleListAPI(31)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getScheduleListAPI(3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getScheduleListAPI(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getScheduleListAPI(29)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getScheduleListAPI(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("postScheduleAPI", () => {
    test("0", () => {
        let callFunction = () => {
            postScheduleAPI("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            postScheduleAPI(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("patchScheduleAPI", () => {
    test("0", () => {
        let callFunction = () => {
            patchScheduleAPI({ sid: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            patchScheduleAPI(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteScheduleAPI", () => {
    test("0", () => {
        let callFunction = () => {
            deleteScheduleAPI("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deleteScheduleAPI(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
