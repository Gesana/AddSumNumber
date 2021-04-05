
/*
function ageInSeconds(years) {
  var days= 365;
  var hours= 24;
  var min= 60;
  var seconds= 60;
  
  console.log(years *days*hours*min*seconds)
   
}

ageInSeconds(18);


*/

function findMin(numbers) {

  //[2,4,12,7,8,3,6]
  var min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] < min) {
      min = numbers[i]
    }

  }

  return min;


}

console.log(findMin([2, 4, 12, 7, 8, 3, 6]));


function findMax(numbers) {


  //[2,4,12,7,8,3,6]
  var max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > max) {
      max = numbers[i];
    }

  }

  return max;


}

console.log(findMax([2, 4, 12, 7, 8, 3, 6]));


