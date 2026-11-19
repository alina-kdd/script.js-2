let userAge = 25;

if (userAge < 18) {
    console.log("Несовершеннолетний");
} else if (userAge >= 18 && userAge <= 59) {
    console.log("Взрослый");
} else {
    console.log("Пенсионный возраст");
}


// Задание 2 
let score = 85;

if (score < 0 || score > 100) {
    console.log("Некорректное количество баллов");
} else if (score >= 90) {
    console.log("Отлично (5)");
} else if (score >= 75) {
    console.log("Хорошо (4)");
} else if (score >= 60) {
    console.log("Удовлетворительно (3)");
} else {
    console.log("Неудовлетворительно (2)");
}


// Задание 3. 
let login = "admin";
let password = "12345";

let inputLogin = "admin";
let inputPassword = "12345";

if (inputLogin === login && inputPassword === password) {
    console.log("Добро пожаловать!");
} else if (inputLogin === login && inputPassword !== password) {
    console.log("Неверный пароль");
} else {
    console.log("Пользователь не найден");
}


// Задание 4. 
let number1 = 20;
let number2 = 5;
let operation = "+";

switch (operation) {
    case "+":
        console.log(number1 + number2);
        break;
    case "-":
        console.log(number1 - number2);
        break;
    case "*":
        console.log(number1 * number2);
        break;
    case "/":
        if (number2 === 0) {
            console.log("На ноль делить нельзя");
        } else {
            console.log(number1 / number2);
        }
        break;
    default:
        console.log("Неизвестная операция");
}


// Задание 5. 
let age = 20;
let isRegistered = true;
let isBlocked = false;

if (age >= 18 && isRegistered === true && isBlocked === false) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}