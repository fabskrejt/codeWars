function countPositivesSumNegatives(input) {
    let countPositives = 0;
    let sumOfNegative = 0;
    if(input === null || input.length === 0 ) {
        return [];
    }
    for(let i = 0; i < input.length; i++){

        input[i] > 0 ? countPositives++ : sumOfNegative += input[i];
    }
    return [countPositives, sumOfNegative];
}