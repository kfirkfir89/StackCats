//get our user input
function getValue(){
    //get user striing from the page
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = checkPali(userString);
    
    //display out message to  screen
    displayMessage(returnObj);
}

//check if string is a palindrome.
function checkPali(userString){

    //Stack Cats => stack cats
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex , "");

    let revString = [];
    let returnObj = {};

    for( let index = userString.length - 1; index >= 0 ; index-- ){
        revString += userString[index];
    }

    if ( revString == userString ){
        returnObj.msg = "Well Done! You entered a palindrome!"
    }else{
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;

}


//display a nessage to the string.
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Yout phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}