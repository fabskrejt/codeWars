function arrayDiff(a, b) {
    return a.map((item, index, array) => {
            if (b.includes(item)) {
                array.splice(index, 1)
            }
        }
    )
}