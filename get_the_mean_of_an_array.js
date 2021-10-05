function getAverage(marks){
    let result = 0;
    marks.map(i => result += i)
    return Math.trunc(result / marks.length);
}