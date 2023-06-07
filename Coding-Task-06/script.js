//01) oddNumbers function

function oddNumbers(start, end) {
  let oddNumbers = "";
  for (let index = start; index <= end; index++) {
    if (index % 2 != 0 && index > 0) {
      if (oddNumbers === "") {
        oddNumbers += index;
      } else {
        oddNumbers += "," + index;
      }
    }
  }
  return oddNumbers;
}

// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

//02) charCount function
function charCount(word, char) {
  countChars = 0;
  if (char.length != 1) {
    throw new Error("Only single character accepted");
  } else {
    for (let index = 0; index < word.length; index++) {
      const currentChar = word[index];

      if (char == currentChar) {
        countChars++;
      }
    }
  }
  return countChars;
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
