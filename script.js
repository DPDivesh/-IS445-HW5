function primeCheck(inputVal) {
  console.log("primecheck")
  var answer = true;
  for (var i = 2; i <= (inputVal / 2); i++) {
    //remainder
    if ((inputVal % i) == 0) {
      answer = false;
      break;
    }
  }
  return answer;
}

function sendIt() {
  console.log("sendit")
  var inputOne = parseInt(document.getElementById("inputOne").value);
  var inputTwo = parseInt(document.getElementById("inputTwo").value);

  if (inputOne <= 1 || inputOne >= 101 || inputTwo <= 1 || inputTwo >= 101) {
    document.getElementById("error").innerHTML = "Invalid input, please try again.";
<<<<<<< HEAD
    document.getElementById("primeResult").innerHTML = "";
=======
>>>>>>> 55a3ec8a2795699975fc234097441991f69eda0d
  } else if (inputOne >= 2 && inputOne <= 100 && inputTwo >= 2 && inputTwo <= 100) {
    directPrime(inputOne, inputTwo);
  }
}
console.log("test");

function directPrime(inputOne, inputTwo) {
  var numArray = [];
  var aNum = 0;
  var bNum = 0;
<<<<<<< HEAD
  //forward and reverse on array direction
=======
//forward and reverse on array direction
>>>>>>> 55a3ec8a2795699975fc234097441991f69eda0d
  if (inputOne > inputTwo) {
    console.log("val1")
    aNum = inputTwo;
    bNum = inputOne;
  } else if (inputOne < inputTwo) {
    console.log("val2")
    aNum = inputOne;
    bNum = inputTwo;
  }
  while (aNum <= bNum) {
    if (primeCheck(aNum) == true) {
      numArray.push(aNum);
      aNum = aNum + 1;
    } else if (primeCheck(aNum) == false) {
      aNum = aNum + 1;
    }
  }

  console.log(numArray);
  console.log("test2")

  document.getElementById("primeResult").innerHTML = "There are " + numArray.length + " prime numbers.";
  document.getElementById("error").innerHTML = numArray;
  console.log("done")

}
