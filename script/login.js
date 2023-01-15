let form = document.getElementById("loginform");
form.addEventListener("submit", Loginfunction);
function Loginfunction(event) {
  event.preventDefault();
  let UserDetailsLS = JSON.parse(localStorage.getItem("UserDetail")) || [];
  let UserLoginvalue = {
    name: document.getElementById("username").value,
    email: document.getElementById("useremail").value,
    password: document.getElementById("userpassword").value,
  };
  let { email } = UserLoginvalue;
  let { name } = UserLoginvalue;
  let { password } = UserLoginvalue;
  let flag = false;

  if (UserDetailsLS.Email === undefined) {
    alert("Account Doese't Exit");
  }

  //   let flag = false;
  if (name == "" || email == "" || password == "") {
    alert("Please fill the all Input field");
  } else if (email != UserDetailsLS.Email) {
    alert("please Enter Valid Email id");
  } else {
    flag = true;
    alert(`Welcome ${name} to Freshly`);
    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("userpassword").value = "";

    window.location.href = "../index.html";


    localStorage.setItem("Login_details", JSON.stringify(UserLoginvalue));
  }

  //   console.log("UserDetailsLS:", UserDetailsLS);
}
