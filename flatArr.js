function flatArr(arr) {
    let resArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            resArr = [...resArr, ...flatArr(arr[i])]
        } else {
            resArr.push(arr[i])
        }
    }
    return resArr
}