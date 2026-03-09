// let link = document.querySelector(".container ");
// // console.dir(link);
// // console.log(link);
// let heading=document.querySelector("#question");
// // console.dir(heading);
// // let append=;
// heading.firstElementChild.append("from aadish prabhu");
// console.log(heading.firstElementChild);
// heading.firstElementChild.style.color="white";
// heading.firstElementChild.style.fontSize="40px";
// heading.firstElementChild.style.textShadow="2px 5px 5px #357fbb";

// let prob2=document.querySelector("#question2");
// prob2.firstElementChild.innerText="i am first div named box";
// prob2.children[1].innerText="i am second div named box";
// prob2.lastElementChild.innerText="i am third div named box";
// prob2.children[0].style.color="white";
// prob2.children[0].nextElementSibling.style.color="yellow";
// prob2.lastElementChild.style.color="green";
// prob2.children[0].style.fontSize="50px";
// prob2.lastElementChild.previousElementSibling.style.fontSize="40px";
// prob2.lastElementChild.style.fontSize="30px";   
// prob2.children[0].style.margin="10px";
// prob2.children[1].style.margin="10px";
// prob2.lastElementChild.style.margin="10px";
// prob2.children[0].prepend("1. ");
// prob2.children[1].prepend("2. ");
// prob2.lastElementChild.prepend("3. ");

// let button=document.querySelector("body");
// console.log(button);
// let newButton=document.createElement("p");
// newButton.setAttribute("class","newButton");
// newButton.innerText="click me";
// button.prepend(newButton);
// newButton.style.color="white";
// newButton.style.backgroundColor="red";
// console.log(button.firstElementChild);

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black";
    }
    if (document.body.style.backgroundColor == "rgb(23, 19, 19)") {
        document.body.style.backgroundColor = "white";
    }
});
