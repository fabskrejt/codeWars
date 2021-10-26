function generatePairs(n) {
    let result = []

    for(let i = 0; i <= n; i++) {
        result.push([i, i])
        for(let j = 1; j <= n; j++){
            if(i < j) result.push([i, j])
        }
    }
    return result
}