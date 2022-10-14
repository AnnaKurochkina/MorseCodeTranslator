
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
        "z": "--.." ,
        "1": '.----',
        "2": '..---',
        "3": '...--',
        "4": '....-',
        "5": '.....',
        "6": '-....',
        "7": '--...',
        "8": '---..',
        "9": '----.',
        "0": '-----'
    };
    const words = phrase.split(" ");
    let morseWords = [];
    words.forEach(word => {
        const characters = word.toLowerCase().split("");
        const morseCharacters = characters.map(char => engToMorse[char] ? engToMorse[char] : "");
        const morseWord = morseCharacters.join(" ");
        morseWords.push(morseWord);
    });
    return morseWords.join(" / ");
};

export const translateFromMorseToEnglish = (phrase) => {
    return "";
};

