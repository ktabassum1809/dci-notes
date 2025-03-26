const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe("Task 01" ,() => {
    test( "`animals` variable should store an array" ,() => {
        const solution = rewire("../task-01.js");
        const animals = solution.__get__("animals");
        expect(typeof animals).toBe("object");
    }) 
})

describe("Task 02", () => {
    test( "`people` variable must store array containing elements in following order: Julia, Tom, Gina", () => {
        const solution = rewire("../task-02.js");
        const people = solution.__get__("people");
        const expected = ["Julia","Tom","Gina"];
        expect(people).toEqual(expected);
    })
})



describe("Task 03", () => {
    test("the first console.log() outputs London" ,() => {
        require("../task-03.js")
        expect(consoleSpy).toHaveBeenCalledWith("London");
    })
    test("the second console.log() outputs Berlin" ,() => {
        require("../task-03.js")
        expect(consoleSpy).toHaveBeenCalledWith("Berlin");
    })
})


describe("Task 04", () => {
    test("The last item of array in `letters` variable is printed to console" ,() => {
        const solution = rewire("../task-04.js");
        const letters = solution.__get__("letters");
        const expected = letters[letters.length-1];
        require("../task-04.js")
        expect(consoleSpy).toHaveBeenCalledWith(expected);
    })
})

describe("Task 05", () => {
    test("`newArrayLength` should always be an even number" ,() => {
        const solution = rewire("../task-05.js");
        const newArrayLength = solution.__get__("newArrayLength");
        const evenOdd = newArrayLength % 2;
        expect(evenOdd).toEqual(0);
    })
})

describe("Task 06", () => {
    test("`someDinosaurs` variable is printed as: [triceratops, stegosaurus]" ,() => {
        const solution = rewire("../task-06.js");
        const someDinosaurs = solution.__get__("someDinosaurs");
        const expected = ["triceratops", "stegosaurus"];
        expect(someDinosaurs).toEqual(expected)
    })
})

describe("Task 07", () => {
    test("`negativeNumbers` array stores only negative numbers" ,() => {
        const solution = rewire("../task-07.js");
        const negativeNumbers = solution.__get__("negativeNumbers");
        const expected = [-1, -2, -3, -4];
        expect(negativeNumbers).toEqual(expected);
    })
})

describe("Task 08", () => {
    test("Prints the numbers in the array as a string concatenated with '-'", () => {
        let outputData = "";
        const storeLog = inputs => (outputData += inputs);
        console["log"] = jest.fn(storeLog);

        require("../task-08.js"); // execute the script

        const expected = '1-2-3-4-5';
        expect(outputData).toEqual(expected);

        console.log = jest.fn();
    });
});


describe("Task 09", () => {
    test("Expected output: ['12', '35', '05']", () => {
        let outputData = [];
        const storeLog = inputs => (outputData = inputs);
        console["log"] = jest.fn(storeLog);

        require("../task-09.js"); // execute the script

        const expected = ["12", "35", "05"];
        expect(outputData).toEqual(expected);

        console.log = jest.fn();
    });
});


describe("Task 10", () => {
    test("Expected output: 'My favourite color is green'" ,() => {
        const solution = rewire("../task-10.js");
        const colors = solution.__get__("colors");
        const favouriteColor = solution.__get__("favouriteColor");
        const expected = colors[colors.length-1];
        expect(favouriteColor).toEqual(expected);
    })
})

