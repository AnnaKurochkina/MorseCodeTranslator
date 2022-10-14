
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

    it("should convert a number", () => {  
        const result = translateFromEnglishToMorse("552");
        expect(result).toBe("..... ..... ..---");
    });
    
    it("should be case insensitive", () => {
        const result = translateFromEnglishToMorse("Hello World");
        expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    });
    
    it("should check for punctuation characters", () => {
        const result = translateFromEnglishToMorse("thanks,..!");
        expect(result).toBe("- .... .- -. -.- ... --..-- .-.-.- .-.-.- -.-.--");
    });
    
    it("should check for combination of different chars", () => {
        const result = translateFromEnglishToMorse("a 25, B27, c33!");
        expect(result).toBe(".- / ..--- ..... --..-- / -... ..--- --... --..-- / -.-. ...-- ...-- -.-.--");
    });
    
    it("test for no input", () => {
        const result = translateFromEnglishToMorse("");
        expect(result).toBe("");
    });
    
    it("test for invalid input", () => {
        const result = translateFromEnglishToMorse("");
        expect(result).toBe("");
    });

});
