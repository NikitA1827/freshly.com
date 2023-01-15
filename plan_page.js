import data1 from "./data.js";

let display = (data1) => {

    data1.forEach((ele) =>{
        let div = document.createElement("div");

        div.setAttribute("class","inner_div");

        let h4 = document.createElement("h4");
        h4.innerText=ele.flexibleplan;
        

        let h5= document.createElement("h5");
        h5.innerText=ele.mt1;

        div.append(h4,h5);

        document.querySelector("#meals_data").append(div);
    })

}
display(data1);

let display1 = (data1) => {

    data1.forEach((ele) =>{
        let div = document.createElement("div");

        div.setAttribute("class","inner_div");

        let h4 = document.createElement("h4");
        h4.innerText=ele.fontweight500;

        let h5= document.createElement("h5");
        h5.innerText=ele.fontweight1;
        h5.setAttribute("id","line");

        div.append(h5,h4);

        document.querySelector("#meals_price").append(div);
    })

}
display1(data1);
