const repeatedString = (s, n) => {
    let numberOfLetterA = 0;
    
    // check if string just contains letter `a`
    let stringHasJustA = true;
    for (let letter of s) {
        if (letter === 'a') {
            numberOfLetterA++;
        } else {
            stringHasJustA = false;
        }
    }

    // if string just contains letter `a` return `n`
    if (stringHasJustA) {
        return n;
    }

    const amountOfCaractersRemaining = n - Math.floor(n / s.length) * s.length;
    const remainingCaracters = s.slice(0, amountOfCaractersRemaining);
    let amountOfAOnRemainingCaracters = 0;
    for (let letter of remainingCaracters) {
        if (letter === 'a') {
            amountOfAOnRemainingCaracters++;
        }
    }

    return (Math.floor(n / s.length) * numberOfLetterA) + amountOfAOnRemainingCaracters;
}

console.log(repeatedString('aab', 882787));

/**
 * There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
 * 
 * Example
 * s = 'abcac
 * n = 10 
 * 
 * The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.
 * 
 * Function Description
 * 
 * Complete the repeatedString function in the editor below.
 * 
 * repeatedString has the following parameter(s):
 * 
 * s: a string to repeat
 * n: the number of characters to consider
 * 
 */