"use strict";

const box = document.getElementById("box"),
   btns = document.getElementsByTagName("button"),
   circles = document.getElementsByClassName("circle"),
   wrapper = document.querySelector(".wrapper"),
   hearts = wrapper.querySelectorAll(".heart"), // wrapper получен выше
   oneHeart = wrapper.querySelector(".heart"); // доченние только из wrapper

/* box.style.backgroundColor = "blue";
box.style.width = "500px"; */

box.style.cssText = "background-color: blue; width: 400px";

btns[1].style.borderRadius = "100%";

/* for (let i = 0; i < hearts.length; i++) {
   hearts[i].style.backgroundColor = "blue";
} */
hearts.forEach((item) => {
   item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
//const text = document.createTextNode("Здесь был я");
div.classList.add("black");
document.body.append(div);
wrapper.append(div);
//wrapper.appendChild(div); устаревший

// wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);

//wrapper.insertBefore(div, hearts[0]);  устаревший

//circles[0].remove();
//wrapper.removeChild(hearts[1]);  устаревший

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML("afterend", "<h2>HELLO</h2>");
