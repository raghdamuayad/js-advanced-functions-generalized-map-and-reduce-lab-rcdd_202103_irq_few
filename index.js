// Add your functions here
function map(arr,func){
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.Push(func(arr[i]))
  }
}