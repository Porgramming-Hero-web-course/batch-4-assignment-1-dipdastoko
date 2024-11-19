function countWordOccurrences(sentence: string, word: string):number {
    const arrayOfSentence: string[] = sentence.toLowerCase().split(" ");
    return arrayOfSentence.filter(element => element === word.toLowerCase()).length;
}

console.log(countWordOccurrences("I love typescript typescript", "TypeScript"));