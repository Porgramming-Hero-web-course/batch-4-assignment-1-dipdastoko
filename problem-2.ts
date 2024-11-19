function removeDuplicates(arrNumbers: number[]):number[] {
    let uniqueArray: number[]=[];
    arrNumbers.forEach(num => {
        if (uniqueArray.indexOf(num) === -1) {
            uniqueArray.push(num);
        }
    })
    return uniqueArray;

}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));