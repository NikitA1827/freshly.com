let collectdata = () => {
  let UserObj = {
    Email: document.getElementById("email").value,
    Zip: document.getElementById("Zip").value,
  };

  if (UserObj.Email == "" || UserObj.Zip == "") {
    alert("Please Enter All Input Fields");
  } else if (UserObj.Zip.length < 5 || UserObj.Zip.length > 5) {
    let data = document.getElementById("error");
    data.innerText = "Pleas Enter Valid Zip code";
    data.style.color = "red";
    data.style.marginbottm = "5px";
    data.style.marginleft = "100px";
  } else {
    document.getElementById("email").value = "";
    document.getElementById("Zip").value = "";
    window.location.href = "login.html";
    alert("SignUp Sucessfuly");
    localStorage.setItem("UserDetail", JSON.stringify(UserObj));
  }
  console.log("  UserObj:", UserObj);
};
function displayData() {}
