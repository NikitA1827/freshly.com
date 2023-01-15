var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  let login_showData = JSON.parse(localStorage.getItem("Login_details"));
  console.log('login_showData:', login_showData);

  let login = document.querySelector(".login");
  let signup = document.querySelector(".signup>button");
  if (login_showData!=null) {
    login.innerHTML = login_showData.name;
    signup.innerText = 'Log Out'; 
    signup.setAttribute('class','logout');
    let logout = document.querySelector('.logout');
  logout.addEventListener("click",(event) => {
    // event.preventDefault();
    localStorage.setItem('Login_details',JSON.stringify(null));
    window.location.href = 'signup.html';
  });
  }
  // let logout = document.querySelector('.logout');
  // logout.addEventListener("click",(event) => {
  //   // event.preventDefault();
  //   localStorage.setItem('Login_details',JSON.stringify(null));
  //   window.location.href = 'signup.html';
  // });

  let div = document.querySelectorAll("#freshly_items>div");
  div.forEach((ele) => {
      ele.addEventListener("click",()=>{
        click();
      });
  });
  let MealsCont = document.querySelector('.meals_containesr');
  let cross = document.querySelector('.cross');
  let freshly_items = document.querySelector('#freshly_items');
  let freshly_meals = document.querySelector('#freshly_meals');
  let background_veggies = document.querySelector('#background_veggies>img');
  let plans_menu = document.querySelector('#plans_menu');
  let click = () => {
    MealsCont.style.display="block"
             freshly_items.style.opacity="0.1";
             freshly_meals.style.opacity="0.1";
             background_veggies.style.opacity="0.1";
             plans_menu.style.opacity="0.3";
  }

  cross.addEventListener("click",() =>{
    close();
  })

  let close = () => {
    MealsCont.style.display="none";
    freshly_items.style.opacity="1";
             freshly_meals.style.opacity="1";
             background_veggies.style.opacity="1";
  }


