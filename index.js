 //🗒Завдання 1: Приведення типів
//Напиши програму, яка запитує у користувача його вік, а потім перетворює введене значення на число та додає 5 років. Виведи результат у консоль.
// let ageNum = prompt("Enter your age:");
// let convertAgeNum = Number(ageNum) + 5;
// console.log(convertAgeNum);


//Завдання 2: Логічні оператори (Логічне «І», «АБО», «НЕ»)
//Напиши програму, яка перевіряє, чи є число парним та більшим за 10. Використай логічні оператори «І» (&&), «АБО» (||) та «НЕ» 

// let num = parseInt(prompt("Enter number"))
// if(num % 2 === 0 && num > 10){
//     console.log("The number is not a prime number and its bigger the 10");

// }else {
//  console.log("the number is incorect");
// }

//🗒Завдання 3: Оператори розгалуження (Інструкція if)
//Створи програму, яка запитує у користувача число. Якщо число більше за 50, виведи "Число більше 50", інакше виведи "Число менше або дорівнює 50".
// let num = parseInt(prompt("Enter number"));
// if (num > 50 || num === 50) {
//    console.log("The number is bigger then 50 or it is a 50.");
    
// } else {
//     console.log('the number is not bigger then 50 or 50.');
    
// }

//🗒Завдання 4: Інструкція if...else та else...if
// Напиши програму, яка запитує у користувача оцінку (від 1 до 5). Використай інструкції if, else...if та else для виводу повідомлення: 
// - "Дуже погано" для оцінки 1,
// - "Погано" для 2,
// - "Задовільно" для 3,
// - "Добре" для 4,
// - "Відмінно" для 5.

// let gradeNum = parseInt(prompt("Enter your grade number:"))
// if (gradeNum === 1) {
//     console.log("very bad grade")
// } else if (gradeNum === 2){
//     console.log("bad");
    
// }
//  else if (gradeNum === 3){
//     console.log("ok");
    
// }
//  else if (gradeNum === 4){
//     console.log("good");
    
// }
//  else if (gradeNum === 5){
//     console.log("incredible");
 
// }


//🗒Завдання 5: Тернарний оператор
//Напиши програму, яка запитує у користувача ім'я. Якщо ім'я дорівнює "Адмін", виведи "Вітаю, Адмін!". В іншому випадку, виведи "Привіт, [ім'я]!". Використай тернарний оператор

let userName = prompt("enter your name:");
let greeting = (userName === "Admin")? "Welcome, Admin" : `Hi ${userName}`;
alert(greeting);
