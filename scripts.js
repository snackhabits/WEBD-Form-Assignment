function validateForm() {
  var username = document.forms["signupForm"]["username"].value;
  var email = document.forms["signupForm"]["email"].value;
  var password = document.forms["signupForm"]["password"].value;
  var confirmPassword = document.forms["signupForm"]["confirmPassword"].value;
  
  // Check that all fields have been filled out
  if (username == "" || email == "" || password == "" || confirmPassword == "") {
      alert("All fields must be filled out");
      return false;
  }     
  // Check for Valid Email formating
  if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('emailError').innerHTML = "Invalid Email Format, Try Again.";
      alert("Invalid email format");                
      return false;
  } 
  else {document.getElementById('emailError').innerHTML = "";
  }
  // Check for Password Length of at least 8 characters
  if (password.length < 8) { 
      document.getElementById('passwordError').innerHTML = "Password length must be at least 8 characters";
      alert("Password length must be at least 8 characters");
      return false;
  }
  else {document.getElementById('passwordError').innerHTML = "";
  }
   // Check for the presence of at least one letter
  if (!/[a-z]/.test(password)) { 
      document.getElementById('passwordError').innerHTML = 'Password must have at least 1 lowercase Character'; 
      alert("Password must have at least one letter")
      return false; 
  } 
  else {document.getElementById('passwordError').innerHTML = "";
  }
  // Check for the presence of at least one digit 
  if (!/\d/.test(password)) { 
      document.getElementById('passwordError').innerHTML = 'Password must have at least 1 digit'; 
      alert("Password must have at least 1 digit");
      return false; 
  }
  else {document.getElementById('passwordError').innerHTML = "";
  }
  // Check for the presence of at least one special character
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      document.getElementById('passwordError').innerHTML = 'Password must contain at least 8 characters, including one letter, one number, and one special character'
      alert("Password must contain at least 8 characters, including one letter, one number, and one special character");
      return false;
  }
  else {document.getElementById('passwordError').innerHTML = "";
  }
  // Check that passwords match
  if (password != confirmPassword) {
      document.getElementById('confirmError').innerHTML = 'Password must match'
      alert("Passwords must match");
      return false;
  }
  else {document.getElementById('confirmError').innerHTML = "";
  }
  }