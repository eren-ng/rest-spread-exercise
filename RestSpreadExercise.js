// Given this function, refractor to use rest operator & arrow function
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

//ES2015 Version
const filterOutOdds = (...arg) => arg.filter((num) => num % 2 === 0);

//findMin
const findMin = (...arg) => Math.min(...arg);

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs - returns new array with the original array values and all of additional arguments doubled
const doubleAndReturnArgs = (arr, ...arg) => [...arr, ...(arg.map(n => n * 2))];

//Slice and Dice! 
/** remove a random element in the items array
and return a new array without that item. */
function removeRandom(items) {
	let randomIdx = Math.floor(Math.random() * items.length);
	return [...items.slice(0, randomIdx),...items.slice(randomIdx + 1)]; 
}

const removeRandom = (items) => {
	let randomIdx = Math.floor(Math.random() * items.length);
	return [...items.slice(0, randomIdx),...items.slice(randomIdx + 1)]; 
}

/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
	return [...array1, ...array2]
};

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
	let newObj = {...obj};
	newObj[key] = val; 
	return newObj;
};

const addKeyVal = (obj, key, val) => {
	let newObj = {...obj};
	newObj[key] = val; 
	return newObj;
};

/** Return a new object with a key removed. */
function removeKey(obj, key) {
	let newObj = {...obj};
	delete newObj[key]; 
	return newObj;
}

const removeKey = (obj, key) => {
	let newObj = {...obj};
	delete newObj[key]; 
	return newObj;
}

/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
	 return {...obj1, ...obj2};
};

const combine = (obj1, obj2) => {
	return {...obj1, ...obj2};
};

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
	let newObj = {...obj};
	newObj[key] = val;
	return newObj;
};

const update = (obj, key, val) => {
	let newObj = {...obj};
	newObj[key] = val;
	return newObj;
};