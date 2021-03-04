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
    /*let arr = "";
    for (let i = 0; i < array.length; i++) {
        if (arr.length < array.length) {
            return console.log(array);
        }
    }*/
    let short = array.reduce((a, b) => {
        return a.length <= b.length ? a : b;
    })
    return short;
}

let longestWord = (array) => {
    let long = array.reduce((a, b) => {
        return a.length >= b.length ? a : b;
    })
    return long;
}

let sumNumbers = (array) => {
    /*
    let sum = 0;
     for (let i = 0; i < array.length; i++) {
         sum += array[i];
     }

     return console.log(sum);*/
    let sum = array.reduce((a, b) => {
        return a + b;
    })
    return sum;

}

let repeatElements = (array) => {
    let arr = [...array];
    let repeat = arr.concat(array);
    return repeat;
}

let stringToNumber = (string) => {

    return parseInt(string);
}

let calculateAverage = (array) => {
    /*let avg = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        avg = sum / array.length;
    }
    return avg;*/
    let avg = array.reduce((a, b) => a + b);
    return avg / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {

    let s = array.slice(0, 6);
    return s;
}

let convertArrayToObject = (array) => {
    let conv = Object.assign(array);
    return conv;
}

let getAllLetters = (array) => {
    // convert to string
    let converToString = array.join("");
    let transformArray = converToString.split("").map(x => x).sort();
    let deletDubplication = [...new Set(transformArray)];
    return deletDubplication;
}

let swapKeysAndValues = (object) => {
    // crée un objet vide
    let newObject = {};
    Object.entries(object).forEach(entry => {
        // permutation
        let key = entry[0];

        let value = entry[1];

        newObject[value] = key;
    });
    return newObject;

}

let sumKeysAndValues = (object) => {
    let total = 0;
    let t = Object.values(object).reduce((a, b) => a + b);
    let b = Object.keys(object).map(x => parseInt(x)).reduce((a, b) => {
        return a + b;
    });

    total = t + b;
    return total;

}

let removeCapitals = (string) => {
    let a = string.replace(/[A-Z]/g, '');
    return a;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let format = date.toLocaleDateString("fr-fr");
    return format;
}

let getDomainName = (string) => {
    let domain = string.replace(/.*@/, "");
    let a = domain.replace('.com', '');
    return a;
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return regex.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let f = 1;

    for (let i = number; i >= 1; i--) {
        f = f * i;
    }
    return f;

}

let findAnagrams = (string) => {
    return;
}

let convertToCelsius = (number) => {
    let convertToCelsius = Math.round((number - 32) * 5 / 9);
    return convertToCelsius;
}

let letterPosition = (array) => {


    let s = array.map(x => (parseInt(x, 36) - 9));
    return s;
}