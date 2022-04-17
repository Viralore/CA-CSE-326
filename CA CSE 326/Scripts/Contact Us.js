function pop_msg2() {
    alert("All fields cleared...")
}

function pop_msg1() {
    var a = document.getElementById("name").value;
    if (a == null || a == "") {
        alert("Name can't be blank");
    }
    var b = document.getElementById("phone").value;
    if (isNaN(b) && b == null) {
        alert("Please enter a valid phone number");
    } else if (b.length < 10) {
        alert("Please enter a valid phone number");
    }
    var x = document.getElementById("email").value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
    } else if (atposition == null && dotposition == null) {
        alert("Please enter a valid e-mail address");
    }
    var sub = document.getElementById("Subject").value;
    if (sub == null) {
        alert("Subject can't be blank");
    }
    var m = document.getElementById("msg").value;
    if (m == null) {
        alert("Message can't be blank")
    }
}