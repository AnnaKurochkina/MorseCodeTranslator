
const { translateFromEnglishToMorse, translateFromMorseToEnglish } = require("./script.js");


describe("translateFromEnglishToMorse", () => {

    it("should convert a valid character", () => {  
        const result = translateFromEnglishToMorse("a");
        expect(result).toBe(".-");
    });

    it("should handle translation of multiple words", () => {
        const result = translateFromEnglishToMorse("testing is difficult");
        expect(result).toBe("- . ... - .. -. --. / .. ... / -.. .. ..-. ..-. .. -.-. ..- .-.. -");
    });

    it("should convert a space between words", () => {
        const result = translateFromEnglishToMorse("cat dog mouse");
        expect(result).toBe("-.-. .- - / -.. --- --. / -- --- ..- ... .");

    });

});
