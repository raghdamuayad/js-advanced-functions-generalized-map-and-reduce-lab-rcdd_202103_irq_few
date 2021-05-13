// Add your functions here
function map(array, callArray) {
let result = [];
for (let i = 0; i < array.length; i++) {
result.push(callArray(array[i]));
}
return result;
}
function reduce(array, callArray, start) {
let accArray = start ? start : arr[0];
let i = start ? 0 : 1;

for (; i < array.length; i++) {
accArray = callArray(array[i], accArray);
}
return accArray;
}
