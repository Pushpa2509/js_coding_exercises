function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let x = (vatRate * originalPrice) / 100;
  let total = originalPrice + x;
  return Math.round(total);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let calc = originalPrice - (originalPrice / 100) * reduction;
  return Math.round(calc * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.substr(
    Math.ceil(str.length / 2 - 1),
    str.length % 2 === 0 ? 2 : 1
  );
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var reverseWord = words.map((word) => word.split("").reverse().join(""));
  return reverseWord;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var total = 0,
    i;
  for (i = 0; i < scores.length; i += 1) {
    total += scores[i];
  }
  return +(Math.round(total / scores.length + "e+2") + "e-2");
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  {
    for (n = 0; n <= 100; n++) {
      if (n % 3 == 0) {
        return "fizz";
      } else if (n % 5 == 0) {
        return "buzz";
      } else if (n % 3 == 0 && n % 5 == 0) {
        return "fizzbuzz";
      } else {
        return n;
      }
    }
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
