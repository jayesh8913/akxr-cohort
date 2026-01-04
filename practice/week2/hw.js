// this file will contain the questions i solve in namaste.dev

// 1. find-smallest-number https://namastedev.com/practice/find-smallest-number
function findSmallest(arr) {
  // handle invalid inputs
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (typeof val !== "number" || !isFinite(val)) {
      return false;
    }

    if (val < smallest) {
      smallest = val;
    }
  }

  return smallest;
}

module.exports = { findSmallest };

// 2. https://namastedev.com/practice/capitalize-words
    function capitalizeWords(sentence) {
    // Your implementation
    if (sentence.length == 0) return "";
    let words = sentence.split(" ").filter(words => words !== "");

    let final = words.map(word => {
        const tolower = word.toLowerCase();
        return lower[0].toUpperCASE() + lower.slice(1)
    })

    return final.join(" ");
}

//For the purpose of user debugging.
capitalizeWords("hello world");
module.exports = capitalizeWords


// https://namastedev.com/practice/findmaxnumber
function findMaxNumber(arr) {
    // Your implementation
    if (arr.length === 0) return null;
    let i = 0;
    let smallest = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);

module.exports = findMaxNumber