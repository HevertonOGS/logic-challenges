const repeatedString = (s, n) => {
    // count number of `a` in the original string
    const numberOfLetterA = s.split('').filter((letter) => letter === 'a').length;

    // Calculates how many times the complete string fits in `n` characters
    const fullStringRepetitions = Math.floor(n /s.length);

    // Calculates the number of `a`'s in the remaining parts of the string
    const remainingCaractersLength = n % s.length;
    const remainingA = s.slice(0, remainingCaractersLength)
        .split('')
        .filter((letter) => letter === 'a')
        .length;
    
    // Sum the total number of `a`'s in the complete repetitions and in the remaining parts
    return fullStringRepetitions * numberOfLetterA + remainingA;
}

console.log(repeatedString('aab', 10));
console.log(repeatedString('aab', 882787));