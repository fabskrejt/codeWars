function digPow(n, p){
    let arrNumbers = n.toString().split('');
    let number = 0;
    for (let i = 0; i < arrNumbers.length; i++ ){
        number += arrNumbers[i] ** p;
        p++;
    }
    if(number % n == 0){
        return number  / n;
    } else{ return -1}
}