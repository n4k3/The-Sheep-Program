alert('Hello World');
prompt("Type your name:");
confirm("Are u sure?");
function sendMail(){
    document.getElementById("mailsuccess").innerHTML="Thank you for your mail sending";
}
function guessNumber(number, random) {
    if (number >= 0 && number <= 100) {
        if(number == random) {
            document.getElementById("answer").innerHTML = "The most merry congratulations, you guessed right!";
        }
        else {
            document.getElementById("answer").innerHTML = "From our most biggest condolences, you're wrong.";
        }
    }
    else {
        document.getElementById("answer").innerHTML = "We shall not be fooled, please send a valid answer.";
    }
}  
    
