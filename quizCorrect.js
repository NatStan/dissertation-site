$(document).ready(function()
{	$("#userResults").on("click", function() {
/* above signifies the beginning of and names of the functions */	
if (!$("input[name=swedques1]:checked").val() || /* this line, and the lines similar to it, will check to see if the user has selected an input for each of the radio buttons, and will disallow them from submitting if they have not */
!$("input[name=swedques2]:checked").val() || /* the name of the radio buttons are the first 4 letters of the language, with ques at the end, in this case (the swedish quiz) it is swedques. */
!$("input[name=swedques3]:checked").val() ||
!$("input[name=swedques4]:checked").val() 
) {
alert("You have not answered all of the questions!"); /* this line simply adds a java alert to the user if an input is missing for one of the questions. this is so the user cannot leave questions unanswered. */
}
else {
var ques1name = "1"; /* quesnames 1-4 simply correspond to the numbers of the radio buttons in the quiz. */
var ques2name = "2";
var ques3name = "3";
var ques4name = "4";
var quesverifiername = "5"; /* this line is the question verifier. this line will only appear if every question is correct. it will correspond to a div in the html that will display only if all answers are correct. */
var ques1 = ($("input[name=swedques1]:checked").val() != "1"); /* these lines control which answers are correct. for example, the answer to question 1 is the first option, so the javascript will check to see if the answer is the first radio button, or number "1" */
var ques2 = ($("input[name=swedques2]:checked").val() != "4"); 
var ques3 = ($("input[name=swedques3]:checked").val() != "1"); 
var ques4 = ($("input[name=swedques4]:checked").val() != "3"); 
var quesverifier = (!ques1 && !ques2 && !ques3 && !ques4); var answers = []; /* compares the answers the user gives to those in var ques 1-4. if the answer is the same, it is true, and so will not push the div with the answer below. if it is false, it will push the div. */

/* spacing for convenience */

if (ques1) {answers.push(ques1name)}; /* these are the lines responsible for "pushing" the answers the user got wrong, so the lines below can display the correct div. */
if (ques2) {answers.push(ques2name)};
if (ques3) {answers.push(ques3name)};
if (ques4) {answers.push(ques4name)};
if (quesverifier) {answers.push(quesverifiername)};

/* spacing for convenience */

if (ques1) {$("#answer1").show();}; /* these lines are responsible for showing the div containing the correct answer to questions the user submitted the wrong answer for. */
if (ques2) {$("#answer2").show();}; 
if (ques3) {$("#answer3").show();}; 
if (ques4) {$("#answer4").show();}; 
if (quesverifier) {$("#answer5").show();}; /* "answer 5" was chosen as the name of the category to show, to avoid confusion for me personally when quoting in the HTML and CSS. */
}
}
)
;
}
)
; /* closing functions, etc. */