function Click() {
    alert("sunbeam[skull]");
}

function greetUser() {
            // Get the value from the input box
            var userName = document.getElementById("nameInput").value;
            
            // Check if the user actually typed something
            if (userName.trim() !== "") {
                // Display the personalized greeting
                document.getElementById("greetingMessage").textContent = "Hi, " + userName + "!";
            } else {
                // Ask them to enter a name if the field is empty
                document.getElementById("greetingMessage").textContent = "Please enter a name.";
            }
        }
        