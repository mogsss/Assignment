document.getElementById("password").addEventListener("input", function() {
  var password = document.getElementById("password").value;
  var containsNumber = /\d/.test(password);
  var containsSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
  var alert = document.getElementById("alert");
  
  if (containsNumber && containsSpecialChar) {
    alert.style.display = "none";
  } else {
    alert.style.display = "block";
    if (!containsNumber) {
      alert.textContent = "Password must contain numbers.";
    } else if (!containsSpecialChar) {
      alert.textContent = "Password must contain special characters.";
    }
  }
});
