function largestPairSum(numbers)
{
   let counter =0;

   let numbersord = numbers.sort((a, b) => b - a);

   counter=numbersord[0]+numbersord[1]

   return counter
}

console.log(largestPairSum([10, 14, 2, 23, 19]))
console.log(largestPairSum([99, 2, 2, 23, 19]))
console.log(largestPairSum([-10,-20,-30,-40]))
