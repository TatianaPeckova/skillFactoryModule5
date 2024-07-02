let userAge = Number(prompt("Enter your age"));

if (isNaN(userAge) || userAge < 18) {
  alert("unfortunatelly you are not allowed to get the credit");
} else if (userAge >= 18 && userAge <= 21) {
  alert("you can get maximum 50000");
} else if (userAge >= 22 && userAge <= 35) {
  alert("you can get maximum 400000");
} else if (userAge >= 36 && userAge <= 65) {
  alert("you can get maximum 1000000");
} else {
  alert("you can not get the credit");
}
