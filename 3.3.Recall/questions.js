let selectElementsStartingWithA = (array) => {

    let select = array.filter(array => array.startsWith("a"));

    return select;
}

let selectElementsStartingWithVowel = (array) => {
    let vowel = /^[aeiou]/i;
    let select = array.filter(arr => vowel.test(arr));

    return select;
}

let removeNullElements = (array) => {

    let select = array.filter(arr => arr != null);

    return select;

}

let removeNullAndFalseElements = (array) => {

    return array.filter((a) => {
        return a === 0 || a;
    });

}

let reverseWordsInArray = (array) => {
    let arr = [];
    array.forEach(e => {
        arr.push(e.split("").reverse().join(""))
    });
    return arr;
}

let everyPossiblePair = (array) => {
    let pairs = (array) => array.map((v, i) => array.slice(i + 1).map(w => [v, w])).flat();
    return pairs;
}

let allElementsExceptFirstThree = (array) => {

    return array.splice(3, array.length - 1);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    let select = array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

    return select;
}

let getFirstHalf = (string) => {
    let c = Math.round(string.length / 2);
    let res = string.substr(0, c);
    return res;
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let arr = [...array];

    let cpt = 0;
    array.forEach(e => {
        if ((e.split('').reverse().join('') == e)) {
            cpt++;
        }

    })
    return cpt;
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}