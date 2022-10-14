import { translateFromEnglishToMorse, translateFromMorseToEnglish } from "./script.js";

const engWordInput = document.querySelector("#EnglishInput");
const translateButton = document.querySelector("#translateBtn");
const morseWordOutput = document.querySelector("#MorseOutput");

const morseWordInput = document.querySelector("#MorseInput");
const translateButtonMorse = document.querySelector("#translateBtnMorse");
const engWordOutput = document.querySelector("#EnglishOutput");



translateButton.addEventListener("click", (event) => {
    let phraseToTranslate = engWordInput.value;
    let result = translateFromEnglishToMorse(phraseToTranslate);
    morseWordOutput.innerText = result;
});

translateButtonMorse.addEventListener("click", (event) => {
    let morseToTranslate = morseWordInput.value;
    let result = translateFromMorseToEnglish(morseToTranslate);
    engWordOutput.innerText = result;
});