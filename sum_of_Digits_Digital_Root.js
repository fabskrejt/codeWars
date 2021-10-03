function digital_root(n) {
    if(n < 10){
        return n;
    }
    let a = 0;
    n.toString().split('').map(item => a += (+item));
    return digital_root(a)
}