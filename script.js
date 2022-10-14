
export const translateFromEnglishToMorse = (phrase) => {
    
    const engToMorse = { 
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--.."
    };
    const words = phrase.split(" ");
    let morseWords = [];
    words.forEach(word => {
        const characters = word.split("");
        const morseCharacters = characters.map(char => engToMorse[char] ? engToMorse[char] : "");
        const morseWord = morseCharacters.join(" ");
        morseWords.push(morseWord);
    });
    return morseWords.join(" / ");
};

export const translateFromMorseToEnglish = (phrase) => {
    return "";
};

