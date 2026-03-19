let newheading =document.getElementById("heading");
newheading.textContent="DOM Manipulation in JavaScript";
newheading.style.color="pink";
newheading.style.fontSize="50px";

let paragraphs = document.getElementsByClassName("paragraph");
paragraphs[0].innerHTML="This paragraph has been changed using JavaScript.";
paragraphs[0].style.color="red";
paragraphs[0].style.fontSize="30px";

//let newDiv=document.createElement("div");//
//newDiv.textContent="This is a new div element created using JavaScript.";
//newDiv.style.color="purple";
//newDiv.style.fontSize="20px";

let newDiv=document.createElement("div");
newDiv.textContent="This is a new div element created using JavaScript.";
document.body.appendChild(newDiv); 