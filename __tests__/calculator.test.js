import { divide } from "../src/calculator";

describe('divide', () => {

    //1 positive test

    it('divides two positive numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });

    //---------------
    //4 negative tests

    it("throws RangeError if dividing by zero", () => {
        expect(() => divide(6, 0)).toThrow(RangeError);
    });

    it("throws TypeError if any argument is not a number", () => {
        expect(() => divide(6, "NotANumber")).toThrow(TypeError);
    });

    it("throws TypeError if first argument is NaN", () => {
        expect(() => divide(NaN, 2)).toThrow(TypeError);
    });

    it("throws TypeError if second argument is NaN", () => {
        expect(() => divide(6, NaN)).toThrow(TypeError);
    });

});