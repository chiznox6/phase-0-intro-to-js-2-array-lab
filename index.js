// Write your solution here!
// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

/**
 * Destructively appends a cat to the end of the array.
 * This modifies the original array.
 */
function destructivelyAppendCat(name) {
  cats.push(name);
}

/**
 * Destructively prepends a cat to the beginning of the array.
 * This modifies the original array.
 */
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

/**
 * Destructively removes the last cat from the array.
 * This modifies the original array.
 */
function destructivelyRemoveLastCat() {
  cats.pop();
}

/**
 * Destructively removes the first cat from the array.
 * This modifies the original array.
 */
function destructivelyRemoveFirstCat() {
  cats.shift();
}

/**
 * Returns a new array with a cat appended to the end.
 * The original array is not modified.
 */
function appendCat(name) {
  return [...cats, name];
}

/**
 * Returns a new array with a cat prepended to the beginning.
 * The original array is not modified.
 */
function prependCat(name) {
  return [name, ...cats];
}

/**
 * Returns a new array without the last cat.
 * The original array is not modified.
 */
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

/**
 * Returns a new array without the first cat.
 * The original array is not modified.
 */
function removeFirstCat() {
  return cats.slice(1);
}
