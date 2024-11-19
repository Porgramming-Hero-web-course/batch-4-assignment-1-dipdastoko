function sumArray(inputArr:number[]):number {
    let sum = 0;
    inputArr.forEach(num => {
        sum = sum + num;
    })
    return sum;
}

const sumOfArray = sumArray([1, 2, 3, 4, 5]);
console.log(sumOfArray);