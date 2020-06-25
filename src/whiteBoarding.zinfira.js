//Prob #1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

const increment = (num, totalArr = []) => {
  if (num === 0) {
     return totalArr.reduce(myFunc);
  } else if (num % 3 === 0 || num % 5 === 0){
     totalArr.push(num);
    return increment(num - 1, totalArr);
  } else {
    return (increment(num - 1, totalArr));
  }
}

function myFunc(total, num) {
  return total + num
}


let functionalFibonacci = (finalLength, finalArr = [1],  sumOfEvens = 0) => {
  if ( finalLength == finalArr.length || finalArr.length >= 4_000_000) {
    return sumOfEvens
  } else {
    if (finalArr.length >= 2) { //[1,2]
      let last_number = finalArr[finalArr.length - 1];
      let second_to_last_number = finalArr[finalArr.length - 2];
      let fibNum = last_number + second_to_last_number
      if (fibNum % 2 == 0) {
        sumOfEvens += fibNum        
      }
      finalArr.push(fibNum); //[1,2,3]
    } else { //[] or [1]
      finalArr = [1,2];
      sumOfEvens += 2;
    }
    return functionalFibonacci(finalLength, finalArr, sumOfEvens);
  }
}
//1. Non recursive fibonnaci
//2. Simple recursion print(10) 1 - 10
//3. Recurvise fib
//4. Added 4_000_000 requirement
//5. Summed up all even nums in array



let print = (endingNum, num = 1 ) => {
  if (num == endingNum ) {
    // end condition
    return num
  } else {
    console.log(num)
    return print(endingNum, num + 1)
  }
}

print(10)

const hammingDistance = (str1, str2, counter = 0, i=0) => {
  strOneArr = str1.split("");
  strTwoArr = str2.split("");
  if (strOneArr.length == 0){ //index #? strOneLength == 0 notoki?
    return counter; //ends
  } else if {
    
  }

}