// add whatever parameters you deem necessary & write doc comment

// input: word, letters
// output: boolean 

// constraints: no spaces and punctuation  


// test cases 
// canConstructWord('aa', 'abc');
// false -- can't build "aa" with only 1 "a"

// canConstructWord('abc', 'dcba');
// true -- can build "abc" with letters "abcd"

// canConstructWord('aabb', 'bcabad');
// true -- can build "aabbcc" with those letters

// store letter counts for both the word and letter inputs
// compare the storage letter counts between the two objects
// if the letter counts of word is greater than or equal to the letter 
// count for letters we will have a false result 

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
        if (frequencyWord[char] > frequencyLetter[char]) {
            return false;
        }
    }

    return true;
}
