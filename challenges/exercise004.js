function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.reduce((res, val) => {
    if (val < 1) return [...res, val];
    return res;
  }, []);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.reduce((res, val) => {
    if (val.charAt(0) === char) return [...res, val];
    return res;
  }, []);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((word) => word.startsWith("to "));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.reduce((res, { data }) => {
    return [...res, data.city.displayName];
  }, []);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((num) => parseFloat(Math.sqrt(num).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((sentence) =>
    sentence.toLowerCase().includes(str.toLowerCase())
  );
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.reduce((res, triangle) => {
    return [...res, Math.max(...triangle)];
  }, []);
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
