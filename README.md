# Humanizer

Humanizer is a project designed to transform bot-generated text into a more natural and human-like format.
The project includes several functions that introduce typos, letter swaps, duplications, misspellings, and message separation.

## Main Functions

### `charsTypos(input: string, neighborinKeyboardRate: number, doulbeCharsRate: number, neighborinLettersRate: number)`

Introduces typos into the text by:

- Replacing characters with their neighboring keys on the keyboard.

- Adding random double letters.

- Swapping adjacent letters in words.

### `multiCharsEndOfString(input: string, amount: number)`

Repeats the last letter in a word to simulate emphasis.

### `replaceWithMisspellings(input: string, wordsReplacement: { [key: string]: string })`

Replaces certain words with predefined misspellings.

### `separateMessages(input: string)`

Splits sentences into shorter messages by replacing periods with line breaks.

## Running the Project

To run the project, execute the following command:

```sh 
npm i
npm run dev
```

Then, open your browser and go to:

http://localhost:5173/

## Future Development
- The code for line breaks should be modified to send separate messages, adding a delay between messages based on text length.

- If the previous user message contains humorous context (e.g., detected by words like "lol"), add the text "hahaha" to the response.

- Add a filter to detect and replace certain words before they appear multiple times.

- Introduce human-like words that convey closeness, such as "baby" or similar expressions.