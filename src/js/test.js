
// import { nanoid } from "nanoid";

//  import {
//    alert,
//    defaultModules,
//   success,
//  } from "../../node_modules/@pnotify/core/dist/PNotify.js";
//  import * as PNotifyMobile from "../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";


//  const buttonsRef = document.querySelector(".button")
 
 

// const users = [
//   { name: "Олександр", email: "oleksandr@example.com" },
//   { name: "Марія", email: "maria@example.com" },
//   { name: "Іван", email: "ivan@example.com" },
//   { name: "Анастасія", email: "anastasia@example.com" },
//   { name: "Андрій", email: "andrii@example.com" },
//   { name: "Олена", email: "olena@example.com" },
//   { name: "Дмитро", email: "dmytro@example.com" },
//   { name: "Катерина", email: "kateryna@example.com" },
//   { name: "Сергій", email: "serhii@example.com" },
//   { name: "Юлія", email: "yulia@example.com" },
// ];

// users.forEach((user) =>  user.id = nanoid());
// console.log(users);



//  defaultModules.set(PNotifyMobile, {});



// buttonsRef.addEventListener("click", ()=>{
// // alert({
// // //   text: "Дякую за підписку",
// // });

// success({
//   title: "Дякую за підписку",
//   text: "Ви успішно авторизувалися.",
//   hide: true,
//   delay: 1000,
// });
// })


 //===============================================

//  import { alert, success, error } from "@pnotify/core";
//  import * as PNotifyMobile from "@pnotify/mobile";
//  import "@pnotify/core/dist/PNotify.css";
//  import "@pnotify/core/dist/BrightTheme.css";

//  const keys = ["a", "s", "d", "f", "j", "k", "l", "q", "w", "e"];
//  let currentKeyIndex = 0;

//  const keyElement = document.getElementById("key");
//  const newGameBtn = document.getElementById("newGameBtn");

//  // Функція запуску нової гри
//  function startGame() {
//    currentKeyIndex = Math.floor(Math.random() * keys.length);
//    keyElement.textContent = keys[currentKeyIndex];
//    success({
//      text: "Нова гра розпочата! Натисни правильну клавішу.",
//      delay: 1500,
//    });
//  }

//  // Обробник keydown
//  document.addEventListener("keydown", (event) => {
//    const pressedKey = event.key.toLowerCase();

//    if (pressedKey === keys[currentKeyIndex]) {
//      success({
//        text: "Правильно! Продовжуй!",
//        delay: 1000,
//      });
//      currentKeyIndex = Math.floor(Math.random() * keys.length);
//      keyElement.textContent = keys[currentKeyIndex];
//    } else {
//      error({
//        text: `Помилка! Ви натиснули "${pressedKey}". Спробуйте ще раз.`,
//        delay: 2000,
//      });
//    }
//  });

//  // Заборона дій за замовчуванням для keypress
//  document.addEventListener("keypress", (event) => {
//    event.preventDefault();
//  });

//  // Кнопка "Нова гра"
//  newGameBtn.addEventListener("click", startGame);

//  // Старт гри при завантаженні
//  startGame();


//===========================================================

import { Chart } from "chart.js/auto";

// Дані для графіка
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      borderColor: "#2196f3",
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderWidth: 1,
      // tension: 0.3, // робить лінію плавною
      // fill: true, // заливка під лінією
    },
  ],
};

// Конфігурація
const config = {
  type: "line",
  data: chartData,
  // options: {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       display: true,
  //       labels: {
  //         color: "#333",
  //       },
  //     },
  //   },
  //   scales: {
  //     x: {
  //       title: {
  //         display: true,
  //         text: "Дні місяця",
  //       },
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: "Кількість продажів",
  //       },
  //       beginAtZero: true,
  //     },
  //   },
  // },
};

// Створення графіка
const ctx = document.getElementById("sales-chart");
// new Chart(ctx, config);
const salesChart = new Chart(ctx, config);