function validate_form() {
    var a = document.getElementById("name").value;
    var b = document.getElementById("phone").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("password").value;
    var atposition = c.indexOf("@");
    var dotposition = c.lastIndexOf(".");
    var e = document.getElementById("user").value;
    if (a == null || a == "") {
        alert("Name can't be blank");
    }
    if (isNaN(b) && b == null) {
        alert("Please enter a valid phone number");
    }
    if (b.length < 10 || b.length > 10) {
        alert("Please enter a valid phone number");
    }
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
    }
    if (atposition == null && dotposition == null) {
        alert("Please enter a valid e-mail address");
    }
    if (c == null) {
        alert("Please enter a valid e-mail address");
    }
    if (d.length < 8) {
        alert("Password length must be 8 characters.");
    }
    if (e.length < 6) {
        alert("Username must be of 6 characters");
    } else {
        alert("Account created");
    }
}

function login() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("pass").value;

    if (a == null || a == "") {
        alert("Please enter valid username");
    } else if (b.length < 8 || b == null || b == "") {
        alert("Please enter a valid password")
    } else {
        alert("oops, something went wrong.. :(");
    }
}