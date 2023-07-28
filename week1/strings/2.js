//Get Most Frequent word in String after excluding given words

function getMostFrequentWord(str, excludeWords) {
    // Replace all non-word characters with a space and convert to lowercase
    str = str.replace(/[^\w\s]/g, '').toLowerCase();

    // Split the string into an array of words
    let words = str.split(' ');

    // Filter out the excluded words
    words = words.filter(word => !excludeWords.includes(word));
    console.log(words)
    // Create an object to store the word frequencies
    let frequencies = {}; 
    
    // Loop through the words and increment the frequency count for each word
    for (let word of words) {
        if (frequencies[word]) {
            frequencies[word]++;
        } else {
            frequencies[word] = 1;
        }
    }
    // Find the most frequent word
    let maxFrequency = 0;
    let mostFrequentWord = '';
    for (let word in frequencies) {
        if (frequencies[word] > maxFrequency) {
            maxFrequency = frequencies[word];
            mostFrequentWord = word;
        }
    }
    return mostFrequentWord;
}
let str = "The quick brown fox jumps fox over the lazy fox dog";
let excludeWords = ["the", "over"];
let mostFrequentWord = getMostFrequentWord(str, excludeWords);
console.log(mostFrequentWord); 

