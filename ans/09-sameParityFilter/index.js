function getSameParity(arr){
  const newArr = [];
  let s = arr[0] % 2;

  for(let i = 0; i < arr.length; i += 1){
    if(arr[i] % 2 === s){
       newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(getSameParity([3, 6, 7, 8])) // [3, 7]
console.log(getSameParity([4, 6, 7, 8])) // [4, 6, 8]
