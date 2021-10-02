function anagrams(word, words) {

    let wordSorted = word.split('').sort().join();
    let resultArr = [];

    words.map((item) => {
        if (item.split('').sort().join() === wordSorted)
            resultArr.push(item)
    })
    return resultArr;
}