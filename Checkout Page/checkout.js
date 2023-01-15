function create(el) {
  return document.createElement(el);
}
function getEliment(el) {
  return document.querySelector(el);
}

let price1;
let orderName;
let totalMeals;

let form = getEliment("#form1");
function next() {
  event.preventDefault();

  let firtName = getEliment("#firstName").value;
  let Full_name = getEliment("#Full_name").value;
  let Address_Line_1 = getEliment("#Address_Line_1").value;
  let Address_Line_2 = getEliment("#Address_Line_2").value;
  let City = getEliment("#City").value;
  let State = getEliment("#State").value;
  let Zip = getEliment("#Zip").value;
  let Phone = getEliment("#Phone").value;
  let Email = getEliment("#Email").value;

  let obj = {
    name: Full_name,
    Address: Address_Line_1,
    State: State,
    City: City,
    Zip: Zip,
    Phone: Phone,
    Email: Email,
  };
  orderName = obj.name;
  localStorage.setItem("user_address", JSON.stringify(obj));
  form.innerText = "";
  append(obj);
  getEliment(".payment_form").style.display = "block";
}
// Address: "c-85,agar nager"
// City: "delhi"
// Email: "ut126200!@gmail.com"
// Phone: "(882) 672-6588"
// State: "delhi"
// Zip: "11008"
// name: "uttam singh"

function append(obj) {
  let h = create("h3");
  h.innerText = "Delivery Summary";
  let div = create("div");
  div.id = "user_details";
  let name = create("h3");
  let Email = create("h3");
  let Phone = create("h3");
  let Address = create("h3");
  let City = create("h3");
  let Zip = create("h3");
  let a = create("a");
  a.innerText = "Change address";
  a.href = "#";
  a.addEventListener("click", () => {
    window.location.reload();
  });

  name.innerText = "name :" + obj.name;
  Email.innerText = "Email :" + obj.Email;
  Phone.innerText = "Phone :" + obj.Phone;
  Address.innerText = "Address :" + obj.Address;
  City.innerText = "City :" + obj.City;
  Zip.innerText = "Zip :" + obj.Zip;

  div.append(a, name, Email, Phone, Address, City, Zip);
  form.append(h, div);
}

let updatePrice = () => {
  let price = JSON.parse(localStorage.getItem("cartPrice"));
  let cart = JSON.parse(localStorage.getItem("mealsCart"));
  let meals = getEliment(".meals>p:nth-child(2)");
  let meals_discount = getEliment(".meals_discount>p:nth-child(2)");
  let subtotal = getEliment(".subtotal>p:nth-child(2)");
  let Shipping = getEliment(".Shipping>p:nth-child(2)");
  let total = getEliment(".total>p:nth-child(2)");
  let size = document.querySelectorAll(".size");
  size[1].innerText = cart.length;
  size[0].innerText = cart.length;
  meals.innerText = price + "$ ";
  meals_discount.innerText = 2 * cart.length + "$";
  subtotal.innerText = price - 2 * cart.length + "$";
  Shipping.innerText = 5 + "$";
  total.innerText = price - 2 * cart.length - 5 + "$";

  let mymeals = getEliment(".my_meals");
  let img = create("img");
  let h = create("h2");
  h.innerText = cart.length + " X " + " ";
  img.src = cart[0].img;
  mymeals.append(h, img);

  price1 = price - 2 * cart.length - 5;
  totalMeals = cart.length;
};
updatePrice();

getEliment("#submit").addEventListener("click", () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title:
      orderName +
      " your " +
      totalMeals +
      " meals at price of " +
      price1 +
      "$" +
      " are Succesfully placed .",
    showConfirmButton: false,
    timer: 5000,
  });
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});

document.querySelectorAll(".title").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("added");
    // const Relevant = button.nextElementSibling;
    button.classList.toggle("title--active");
    // if (button.classList.contains("title--active")) {
    //     Relevant.style.maxHeight = Relevant.scrollHeight + `px`;
    // }
  });
});
