// Add your functions here
function map(arr, callback) {
let result = [];
for (let i = 0; i < arr.length; i++) {
result.push(callback(arr[i]));
}
return result;
}
function reduce(arr, callback, start) {
let accArray = start ? start : arr[0];
let i = start ? 0 : 1;

for (; i < arr.length; i++) {
accArray = callback(arr[i], accArray);
}
return accArray;
}
