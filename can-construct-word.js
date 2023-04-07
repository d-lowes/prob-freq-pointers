"use strict";

// add whatever parameters you deem necessary & write doc comment

/*
    input: word, letters
    output: boolean

    constraints: no spaces and punctuation

    store letter counts for both the word and letter inputs
    compare the storage letter counts between the two objects
    if the letter counts of word is greater to the letter
    count for letters we will have a false result
*/


/** accept a word and a string of letters ; return true if the word can be built
 * with the letters available, otherwise return false
 */

function canConstructWord(word, letters) {
    if (!letters) return false;

    let frequencyWord = {};
    let frequencyLetter = {};

    for (let char of word) {
        const value = (frequencyWord[char] || 0);
        frequencyWord[char] = value + 1;
    }

    for (let char of letters) {
        const value = (frequencyLetter[char] || 0);
        frequencyLetter[char] = value + 1;
    }

    for (let char in frequencyWord) {
        if (frequencyWord[char] > frequencyLetter[char]
            || !frequencyLetter[char]) {
            return false;
        }
    }

    return true;
}

