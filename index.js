// Add your functions here
function map(array,func){
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.Push(func(array[i]))
  }
  return newArray
}
function reduce(array,func,start = 0){
  let gm = !! start ? start :array[0]
  let i = !! startc ? 0 :1
  for (var i = 0; i < array.length; i++) {
  gm = func ( array[i], gm)
  }
  return gm
}
