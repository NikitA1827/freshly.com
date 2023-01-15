import Menudata from "./MenuData.js";
display(Menudata);
// console.log("Menudata:", Menudata);

function make(el) {
  return document.createElement(el);
}

function Elemnid(id) {
  return document.getElementById(id);
}

function display(data) {
  Elemnid("MenuList").innerHTML = "";
  data.forEach((el) => {
    // console.log("  el:", el);
    let div = make("div");
    div.id = "Menuitems";
    div.addEventListener("click", function () {
      Showdetail(el);
    });
    let divimg = make("div");
    divimg.id = "imagediv";
    let image = make("img");
    image.src = el.Image;
    let title = make("p");
    title.id = "menutitle";
    title.innerText = el.Title;
    let det = make("p");
    det.innerText = el.Nutritions;
    // console.log("  div:", div);
    divimg.append(image);
    div.append(divimg, title, det);
    Elemnid("MenuList").append(div);
  });
  Elemnid("filtercatagory").addEventListener("change", function () {
    filterbycatagory(data);
  });
}
// filter function
function filterbycatagory(data) {
  let select = Elemnid("filtercatagory").value;
  console.log(select);
  let flag = false;
  let temp = [];
  for (let i = 0; i < data.length; i++) {
    let a = data[i];
    if (select === a.catagory) {
      flag = true;
      temp.push(a);
    }
    if (select == "all") {
      window.location.reload();
      //   display(data);
    }
  }
  if (flag === true) {
    display(temp);
    // console.log(temp);
  }
}

let arr1 = [
  "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319db6548088da9_production-image-7c712299-a728-48ad-bf50-3a87133b24b4.jpeg",

  "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319db565e088daa_production-image-ddc396f0-87d5-4588-91d3-bb4ce8e8c6d0.jpeg",

  "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319db3b4b088db9_production-image-ad5c311f-3f0f-404d-b807-09a25acaf372.jpeg",

  "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319db7e48088dba_production-image-11b08e84-b9f0-4a04-846c-4ac08fe0311b.jpeg",

  "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319db6a23088dbb_production-image-b4367863-3601-4731-9ea4-29e7e7c60ae5.jpeg",

  "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319db712c088dbc_production-image-8c69aef5-1989-4986-8f32-f51d0723098e.jpeg",
];
let arr2 = [
  "Green Beans",
  "Flat Iron Steak",
  "Red Potatoes",
  "Carrots",
  "Cassava Flour",
  "Plain Yogurt",
];
function Showdetail(el) {
  console.log("el", el);
  Elemnid("preview").innerHTML = "";
  let brightness = Elemnid("MenuList");
  brightness.style.opacity = "0.5";
  let backgroundcolor = Elemnid("preview");
  backgroundcolor.style.backgroundColor = "#fff";
  // backgroundcolor.style.padding = "10px";
  let preview_head = make("div");
  preview_head.id = "prev_header";
  ///
  let prev_left = make("div");
  prev_left.id = "prev_left";
  ///
  let h1 = make("h1");
  h1.innerText = el.Title;
  let p = make("p");
  p.innerText = el.subrecipename;
  //
  let prev_list = make("div");
  prev_list.id = "prev_list";
  //
  let span1 = make("span");
  span1.innerText = el.meallabel1;
  let span2 = make("span");
  span2.innerText = el.meallabel2;
  let span3 = make("span");
  span3.innerText = el.meallabel3;
  //
  let prev_right = make("div");
  prev_right.id = "prev_right";

  let right_h1 = make("h1");
  right_h1.id = "right_h1";
  right_h1.innerText = `x`;

  prev_right.addEventListener("click", closefunc);
  //header appending ///
  prev_right.append(right_h1);
  prev_list.append(span1, span2, span3);
  prev_left.append(h1, p, prev_list);
  preview_head.append(prev_left, prev_right);
  //header appending ///
  // image portin inside
  let inside = make("div");
  inside.id = "inside";
  let insideimg = make("div");
  insideimg.id = "insideimg";
  let image1 = make("img");
  image1.src = el.Image;
  let image2 = make("img");
  image2.src = el.modalimg;
  //inside image appending
  insideimg.append(image1, image2);

  //inside text
  let insidetext = make("div");
  insidetext.id = "insidetext";
  let sub1 = make("div");
  sub1.id = "sub1";
  let subhead = make("h1");
  subhead.innerText = "What makes this dish special";
  let p1 = make("p");
  p1.innerText =
    "Greaseless oven-fried chicken breast, hand-'breaded' with a gluten-free almond flour batter";
  let p2 = make("p");
  p2.innerText =
    "Our Masterful Mac is made with gluten-free brown-rice macaroni and a cheesy sauce thickened with butternut squash";
  let p3 = make("p");
  p3.innerText =
    "Garlicky green beans tossed in our fragrant, house-infused oil";
  let p4 = make("p");
  p4.innerText =
    "Add some chile kick with red pepper flakes or your favorite hot sauce";
  // sub appending

  //sub appending
  //ingrdeiant sub2
  let sub2 = make("div");
  sub2.id = "sub2";
  let sub2head = make("h1");
  sub2head.innerText = "Ingredients";
  let sub2list = make("div");
  sub2list.id = "sub2list";

  for (let i = 0; i < arr1.length; i++) {
    let sub2grid = make("div");
    sub2grid.id = "sub2grid";
    let sbu2img = make("img");
    let sub2p = make("p");
    sub2p.innerText = arr2[i];
    sbu2img.src = arr1[i];
    sub2grid.append(sbu2img, sub2p);
    sub2list.append(sub2grid);
  }
  let allingridents_head = make("button");
  allingridents_head.innerText = "All Ingredients";
  allingridents_head.id = "All_Ingredients";
  // allingridents_head.style.backgroundColor = "green";
  // allingridents_head.style.padding = "10px";
  let catchallingrideant = make("div");
  catchallingrideant.style.height = "0";
  catchallingrideant.id = "catchingrideant";
  let allingridents = make("p");
  allingridents.id = "allingridents_p";
  allingridents.innerText =
    "Chicken Breast, Green Beans, Macaroni (Water, Brown Rice Flour, Potato Starch, Tapioca Starch, Whole Egg, Egg White, Xanthan Gum, Vinegar), Water, Cheddar Cheese (Cheddar Cheese (Cultured Pasteurized Milk, Salt, Enzymes, Annatto), Potato And Corn Starches (Anti-Caking Agents), Natamycin (Natural Mold Inhibitor)), Half & Half (Milk, Cream), Almonds, Pepper Jack Cheese (Monterey Jack Cheese With Jalapeno Peppers [Cultured Pasteurized Milk, Jalapeno Peppers, Salt, Enzymes], Potato and Corn Starches (Anti-Caking Agents), Natamycin (Natural Mold Inhibitor)), Vinegar, Onion, Garlic, Butternut Squash, Expeller Pressed Canola Oil, Sea Salt, Rice Flour, Paprika, Cassava Flour, Sunflower Powder Lecithin, Spices, Rosemary Extract (Salt, Natural Extract), Baking Soda, Xanthan Gum. ";

  allingridents_head.addEventListener("click", function () {
    console.log("added");
    catchallingrideant.style.height = "auto";
    catchallingrideant.append(allingridents, closeingrident);
  });
  let closeingrident = make("span");
  catchallingrideant.id = "closeingrident";
  closeingrident.innerText = "close";
  // closeingrident.style.backgroundColor = "red";
  // closeingrident.style.padding = "2px";
  // closeingrident.style.fontsize = "14px";
  // closeingrident.style.border = "1px solid red";

  closeingrident.addEventListener("click", function () {
    catchallingrideant.innerHTML = null;
  });
  sub2.append(sub2head, sub2list, allingridents_head, catchallingrideant);
  sub1.append(subhead, p1, p2, p3, p4);
  insidetext.append(sub1, sub2);
  inside.append(insideimg, insidetext);
  Elemnid("preview").append(preview_head, inside);
}

function closefunc() {
  console.log("added");
  let PREVIEW = Elemnid("preview");
  PREVIEW.style.backgroundColor = "none";
  PREVIEW.style.padding = "0";
  PREVIEW.innerHTML = null;
  window.location.reload();
}

let username = JSON.parse(localStorage.getItem("Login_details"));
let logout = document.querySelector(".signup");
if (username !== null) {
  let det = document.querySelector(".login");
  det.style.color = "blue";
  // det.style.backgroundColor = "blue";
  // det.style.padding = "8px 5px";
  det.innerText = username.name;
  // logout.style.color = "blue";
  logout.innerText = "Logout";
  logout.setAttribute("class", "logout");
}
let cameout = document.querySelector(".logout");
// cameout.style.backgroundColor = " #3167ff";
// cameout.style.color = "#fff";
// cameout.style.padding = "6px";
// cameout.style.marginright = "30px";

cameout.addEventListener("click", function () {
  localStorage.setItem("Login_details", JSON.stringify(null));
  window.location.href = "login.html";
});
