function digitize(n) {
    return `${n}`.split('').map( i => +i).reverse()
}