//01) removeItem function

function removeItem(inputArray, delIndex) {
  const arrayCopy = inputArray.slice();
  arrayCopy.splice(delIndex - 1, 1);
  return arrayCopy;
}

// TODO: Implement the removeItem function

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//02) sumOfCharacters function

function sumOfCharacters(inputArray) {
  let charCount = 0;

  for (let index = 0; index < inputArray.length; index++) {
    const arrayElement = inputArray[index];

    if (typeof arrayElement === "string") {
      charCount += arrayElement.length;
    }
  }
  return charCount;
}

// TODO: Implement the sumOfCharacters function

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
