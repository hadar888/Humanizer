import { neighboringChars } from "./keyboadUtils";

export const charsTypos = (input: string, neighborinKeyboardRate: number = 0.02,
    doulbeCharsRate: number = 0.02, neighborinLettersRate: number = 0.02) => {
    const charsInput = [...input];

    for (let i = 0; i < charsInput.length; i++) {
        addNeighborinKeyboardChar(charsInput, neighborinKeyboardRate, i);
        doulbeChar(charsInput, doulbeCharsRate, i);

        if (i < charsInput.length - 1) {
            swapNeighborinLettersInWord(charsInput, neighborinLettersRate, i);
        }
    }

    return charsInput.join("");
}

const addNeighborinKeyboardChar = (charsInput: string[], typoRate: number, i: number) => {
    if (Math.random() < typoRate && neighboringChars[charsInput[i]]) {
        const options = neighboringChars[charsInput[i]];
        const typo = options[Math.floor(Math.random() * options.length)];
        charsInput[i] = typo;
    }
};

const doulbeChar = (charsInput: string[], typoRate: number, i: number) => {
    if (Math.random() < typoRate && neighboringChars[charsInput[i]]) {
        charsInput.splice(i, 0, charsInput[i]);
    }
}

const swapNeighborinLettersInWord = (charsInput: string[], typoRate: number, i: number) => {
    if (Math.random() < typoRate &&
        neighboringChars[charsInput[i]] && neighboringChars[charsInput[i + 1]]) {
        const temp = charsInput[i];
        charsInput[i] = charsInput[i + 1];
        charsInput[i + 1] = temp;
    }
};

export const multiCharsEndOfString = (input: string, amount: number = 3) => {
    const res = [...input];
    let i = input.length - 1;
    let lastLetterIndex = -1;

    while (i > 0 && lastLetterIndex === - 1) {
        if (input[i].toLowerCase() !== input[i].toUpperCase()) {
            lastLetterIndex = i;
        }
        i--;
    }

    for (i = 0; i < amount; i++) {
        res.splice(lastLetterIndex, 0, res[lastLetterIndex]);
    }

    return res.join("");
}

export const replaceWithMisspellings = (input: string, wordsReplacement: { [key: string]: string }) => {
    const words = input.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const cleanWord = word.replace(/[.,!?]/g, '');
        const lowerWord = cleanWord.toLowerCase();

        if (wordsReplacement[lowerWord]) {
            const typo = wordsReplacement[lowerWord];
            result.push(word.replace(cleanWord, typo));
        } else {
            result.push(word);
        }
    }

    return result.join(' ');
}

export const separateMessages = (input: string) => {
    const separateMessages = input.replace(/\. /g, '\n\n');
    const res = [...separateMessages];

    if (res.length && res[res.length - 1] === '.' && res.length - 2 > 0 && res[res.length - 2] !== '.') {
        res[res.length - 1] = '';
    }
    return res.join('');
}
