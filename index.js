// Logical Programming

// Problem 1: Longest Word in a Sentence

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
    
}

console.log(findLongestWord("The quick brownish fox jumped over the lazy dog"));

