//1
const num = prompt ("Введите число")
if (num > 10) {
    alert ("Введенное число больше 10")
} else if (num < 10) {
    alert ("Введенное число  меньше 10")
} else {
    alert ("Введенное число равно 10")
}

//2
const age = prompt ("Введите возраст")
if (age >= 18) {
    alert ("Пользователь является совершеннолетним")
} else {
    alert ("Пользователь является несовершеннолетним")
}

//2-1
const age1 = prompt ("Введите возраст")
age1 >= 18 ? alert ("Пользователь является совершеннолетним") : alert ("Пользователь является несовершеннолетним")

//3
const num1 = Number(prompt ("Введите первое число"))
const num2 = Number(prompt ("Введите второе число"))
const num3 = Number(prompt ("Введите третье число"))
if (num1 >= num2 && num1 >= num3) {
    alert (`Максимальное число ${num1}`)
} else if (num2 >= num1 && num2 >= num3) {
    alert (`Максимальное число ${num2}`)
} else {
    alert (`Максимальное число ${num3}`)
}

//4
const login = prompt ("Введите логин")
let password
if (login === "test") {
    password = prompt ("Введите пароль")
    if (password === "password") {
        alert ("Поздравляю, Вы вошли в систему")
    } else {
        alert ("Неверный пароль")
    }
} else {
    alert ("Нет такого пользователя")
}

//5
let oldPassword = "12345"
const oldPassword1 = prompt ("Введите старый пароль")
let newPassword
let newPassword1
if (oldPassword === oldPassword1) {
    newPassword = prompt ("Введите новый пароль")
    if (newPassword !== oldPassword) {
        newPassword1 = prompt ("Введите новый пароль ещё раз")
        if (newPassword === newPassword1) {
            oldPassword = newPassword
            alert ("Пароль успешно изменён")
        } else {
            alert ("Вы ввели разные пароли")
        }
    } else {
        alert ("Вы ввели старый пароль, новый пароль не должен совпадать со старым")
    }    
} else {
    alert ("Вы ввели неверный старый пароль")
}

//6
const curency = prompt ("Выберите валюту: usd или eur")
let rate
let hrnAmount
let curencyAmount
switch(curency) {
    case("usd"):
    rate = 28
    hrnAmount = prompt ("Введите сумму в гривне")
    curencyAmount = hrnAmount / rate
    alert (`Сума в долларах США составит: ${curencyAmount}`)
    break
    case("eur"):
    rate = 31
    hrnAmount = prompt ("Введите сумму в гривне")
    curencyAmount = hrnAmount / rate
    alert (`Сума в евро составит: ${curencyAmount}`)
    break
    default:
        alert ("Вы выбрали не ту валюту")
}

//*1
const number1 = Number(prompt ("Введите первое число"))
const number2 = Number(prompt ("Введите второе число"))
const userResult = Number(prompt ("Введите результат умножения чисел:"))
var result = Number(result)
result = number1 * number2
//if (userResult === result) {
//    alert ("Ответ верный")
//} else {
//    alert (`Ответ не верный, правильный ответ ${result}`)
//}
switch(userResult) {
    case(result):
    alert ("Ответ верный")
    break
    default:
        alert (`Ответ не верный, правильный ответ ${result}`)
}

//*2
const userOption = Number(prompt ("Введите 1 (камень) или 2 (ножницы) или 3 (бумага)"))
let bot
if (userOption <= 3) {
    bot = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    alert (`Сгенерированный вариант ${bot}`)
    if (userOption === bot) {
        alert ("Ничья")
    } else if ((userOption === 1 && bot === 2) || (userOption === 2 && bot === 3) || (userOption === 3 && bot === 1)) {
        alert ("Победил пользователь")
    } else {
        alert ("Победил bot") 
    }
} else {
    alert ("Вы ввели неверный параметр")
}

//*3
const userOption1 = Number(prompt ("Введите 1 (камень) или 2 (ножницы) или 3 (бумага)"))
const bot1 = Math.floor(Math.random() * (3 - 1 + 1) + 1)
userOption1 <= 3 ? (alert (`Сгенерированный вариант ${bot1}`) || userOption1 === bot1 ? alert ("Ничья") : ((userOption1 === 1 && bot1 === 2) || (userOption1 === 2 && bot1 === 3) || (userOption1 === 3 && bot1 === 1) ? alert ("Победил пользователь") : alert ("Победил bot"))) : alert ("Вы ввели неверный параметр")
