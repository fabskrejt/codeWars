function countBy(x, n) {
    let z = [];
    let a = x;
    while(n > 0){
        z.push(a);
        a += x;
        n--;
    }
    return z;
}