function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.reduce((camelCase, word, idx) => {
    if (idx != 0) {
      return camelCase + word.charAt(0).toUpperCase() + word.slice(1);
    }
    return camelCase + word;
  }, "");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((tot, { subjects }) => tot + subjects.length, 0);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.some(({ ingredients }) => {
    return ingredients.some((ingre) => ingre === ingredient);
  });
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return arr1
    .reduce((res, val) => {
      if (arr2.includes(val) && !res.includes(val)) return [...res, val];
      return res;
    }, [])
    .sort((a, b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
