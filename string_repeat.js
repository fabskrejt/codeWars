function repeatStr (n, s) {
    if(n === 1) return s;
    return repeatStr (n - 1, s) + s;
}