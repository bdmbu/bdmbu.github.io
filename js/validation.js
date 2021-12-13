function validateForm() {

    //var needed
    var firstName = document.getElementById("firstName");
    var letters = /^[A-Za-z]+$/;
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");


    if (firstName.value.length < 2 || !(firstName.value.match(letters))) { //First name validation
        firstName.focus();
        consoleError("Sorry: First name must contain two or more characters and only letters.")
        return false;
    } else if (lastName.value.length <2 || !(lastName.value.match(letters))) { //Last name validation
        lastName.focus();
        consoleError("Sorry: Last name must contain two or more characters and only letters.")
        return false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value) == true) {
        alert("Thank you, I have received your information and will get back to you soon.")
        return true;
    } else {
        email.focus();
        consoleError("You have entered an invalid email address!")
        return false;
    }
}

//print error messages in the console
function consoleError(msg) {
    console.error(msg);
    var error = document.getElementById("error")
    error.innerHTML = "<span style='color: #a60202;'>" + msg + "</span>"
}