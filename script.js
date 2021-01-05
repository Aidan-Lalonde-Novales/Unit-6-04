// Javascript that tells you the maximum movie rating you can watch judging by your age.

document.getElementById('submitbutton').addEventListener('click', numberChecker) // Executes the function numberChecker by clickign the "Submit" button.

function numberChecker () {
 const preUserAge = document.getElementById('userage').value // Makes the value of the age textbox into a variable
 const userAge = parseInt(preUserAge) // Converts to interger
 const userDay = document.getElementById('userday').value // Makes the value of the day of the week textbox into a variable
 if ((userDay == 'Tuesday' || userDay == 'Thursday') || userAge > 12 && userAge < 21) { // Checks to see if the day is Tuesday or Thursday or if the users age 
   document.getElementById('result').innerHTML = 'You are eligible for student pricing!' // If one of the above statements is true, this will display.
 } else {
   document.getElementById('result').innerHTML = 'You must pay normal price.' // If the above statements are false, this will display.
 }
}
