const rewire = require("rewire")
beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe("Task 1" ,() => {
    test( "Expected output: 2" ,() => {
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(2);
    })
})

describe("Task 2" ,() => {
    test( "Expected output: hello" ,() => {
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith("hello");
    })
})

describe("Task 3" ,() => {
    test( "Expected output: 5" ,() => {
        const solution = rewire("../main.js");
        const number = solution.__get__("number");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(number);
    })
})

describe("Task 4" ,() => {
    test( "Expected output: number" ,() => {
        const solution = rewire("../main.js");
        const number = solution.__get__("number");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(typeof number);
    })
})

describe("Task 5" ,() => {
    test( "Expected output: false" ,() => {
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(false);
    })
})

describe("Task 6" ,() => {
    test( "Print the content of firstName" ,() => {
        const solution = rewire("../main.js");
        const firstName = solution.__get__("firstName");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(firstName);
    })

    test( "Print the content of lastName" ,() => {
        const solution = rewire("../main.js");
        const lastName = solution.__get__("lastName");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(lastName);
    })

    test( "Print the content of city" ,() => {
        const solution = rewire("../main.js");
        const city = solution.__get__("city");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(city);
    })

    test( "Print the content of favouriteBand" ,() => {
        const solution = rewire("../main.js");
        const favouriteBand = solution.__get__("favouriteBand");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(favouriteBand);
    })

    test( "Print the content of favouriteMovie" ,() => {
        const solution = rewire("../main.js");
        const favouriteMovie = solution.__get__("favouriteMovie");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(favouriteMovie);
    })

    test( "Print the content of favouriteBook" ,() => {
        const solution = rewire("../main.js");
        const favouriteBook = solution.__get__("favouriteBook");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(favouriteBook);
    })
})

describe("Task 6" ,() => {
    test( "Expected output: number" ,() => {
        const solution = rewire("../main.js");
        const firstName = solution.__get__("firstName");
        const lastName = solution.__get__("lastName");
        const city = solution.__get__("city");
        const favouriteBand = solution.__get__("favouriteBand");
        const favouriteMovie = solution.__get__("favouriteMovie");
        const favouriteBook = solution.__get__("favouriteBook");
        require("../main.js")
        expect(consoleSpy).toHaveBeenCalledWith(firstName,lastName,city,favouriteBand,favouriteMovie,favouriteBook);
    })
})