var attempt = 3; //Variable to count number of attempts.

function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("passwordd").value;
	alert("JS file entered.");
	if (username == "formm" && password == "123") {
		alert("Login successfully");
		window.location = "Success.html";
		return false;
	}
	else {
		attempt--; //Decrementing by one.
		alert("You have left " + attempt + " attempt.");

		//disabling fields after 3 attempts.
		if (attempt == 0) {
			document.getElementById("username").disabled = true;
			document.getElementById("passwordd").disabled = true;
			document.getElementById("submit").disabled = true;
		}
	}
}