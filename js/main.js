"use strict";

let galletas = document.getElementsByTagName("i"); //Recojo todos los iconos en un array
var cookies = [].slice.call(galletas); //Convierto html elements a array

for (const [index, element] of cookies.entries() ){ //Un for of sacando el index

    //Cuando el user hace un hover
    element.addEventListener("mouseover", () => {
        element.classList.add("over");
        for (let i = index; i>=0; i--) {
            cookies[i].classList.add("over"); 
        }
  
    });

    //Cuando el user hace un mouse leave
    element.addEventListener("mouseout", () => {
        element.classList.remove("over");
        for (let i = index; i>=0; i--) {
            cookies[i].classList.remove("over"); 
        }
    });

    //Cuando el user hace click sobre los iconos
    element.addEventListener("click", () => {
        element.classList.add("selected");
        for (let i = index; i>=0; i--) {
            cookies[i].classList.add("selected"); 
        }
        for (let i = index+1; i>=0; i++) {
            cookies[i].classList.remove("selected"); 
        }
    });

    //Cuando el usuario hace click fuera de los iconos 
    document.getElementById("parent").addEventListener("click", () => {
        element.classList.remove("selected");
        for (let i = index; i>=0; i--) {
            cookies[i].classList.remove("selected"); 
        }
    },true);//Event capturing
}
