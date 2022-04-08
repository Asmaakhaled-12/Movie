 let nameInput = document.getElementById("name");
 let emailInput = document.getElementById("email");
 let ageInput = document.getElementById("age");
 let passInput = document.getElementById("pass");
 let phoneInput = document.getElementById("phone");
 let rePassInput = document.getElementById("rePass");
 


nameInput.onkeyup = function () {
    var rejxName = /^[A-z0-9]{1,}$/
    if (!rejxName.test(nameInput.value)) {
        $(".nameAlert").css("display", "block");
    }
    else {
        $(".nameAlert").css("display", "none");
    }
}


emailInput.onkeyup = function () {
    var rejex = /^[a-zA-z0-9]{2,}@(yahoo|gmail|githup|hotmail).com$/;
    if (!rejex.test(emailInput.value))
        $(".emailAlert").css("display", "block");

    else
        $(".emailAlert").css("display", "none");

}


phoneInput.onkeyup = function () {
    var rejex = /^01[0152][0-9]{8}$/;
    if (!rejex.test(phoneInput.value)) {
        $(".phoneAlert").css("display", "block");
    }
    else
        $(".phoneAlert").css("display", "none");
}


ageInput.onkeyup = function () {
    var rejex = /^([1-9]|[1-9][0-9]|100)$/;
    if (!rejex.test(ageInput.value))
        $(".ageAlert").css("display", "block");

    else
        $(".ageAlert").css("display", "none");

}


passInput.onkeyup = function () {
    var rejex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!rejex.test(passInput.value)) {
        $(".passAlert").css("display", "block");
    }
    else
        $(".passAlert").css("display", "none");
}


rePassInput.onkeyup = function () {
    var rejex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (rePassInput.value != passInput.value) {
        $(".rePassAlert").css("display", "flex");
    }
    else
        $(".rePassAlert").css("display", "none");

}

