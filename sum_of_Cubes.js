function sumCubes(n){
    let result = 0;
    for(let i = 0; i<=n; i++){
        result += (i**3);
    }
    return result;
}