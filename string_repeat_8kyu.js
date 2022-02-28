function repeatStr (n, s) {
    if(n === 1) return s
    return s + repeatStr(n-1, s);
}

function repeatStr2 (n, s) {
    return s.repeat(n);
}