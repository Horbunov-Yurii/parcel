
import { nanoid } from "nanoid";

 import {
   alert,
   defaultModules,
  success,
 } from "../../node_modules/@pnotify/core/dist/PNotify.js";
 import * as PNotifyMobile from "../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";


 const buttonsRef = document.querySelector(".button")
 
 

const users = [
  { name: "Олександр", email: "oleksandr@example.com" },
  { name: "Марія", email: "maria@example.com" },
  { name: "Іван", email: "ivan@example.com" },
  { name: "Анастасія", email: "anastasia@example.com" },
  { name: "Андрій", email: "andrii@example.com" },
  { name: "Олена", email: "olena@example.com" },
  { name: "Дмитро", email: "dmytro@example.com" },
  { name: "Катерина", email: "kateryna@example.com" },
  { name: "Сергій", email: "serhii@example.com" },
  { name: "Юлія", email: "yulia@example.com" },
];

users.forEach((user) =>  user.id = nanoid());
console.log(users);



 defaultModules.set(PNotifyMobile, {});



buttonsRef.addEventListener("click", ()=>{
// alert({
// //   text: "Дякую за підписку",
// });

success({
  title: "Дякую за підписку",
  text: "Ви успішно авторизувалися.",
  hide: true,
  delay: 1000,
});
})


 