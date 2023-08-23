let userName = prompt("Как тебя зовут?");
alert(userName);

alert (Boolean(1)) //true
alert (Boolean()) // false
alert (Boolean("")) //false

//alert (number(" 123 "))
//alert (number(true))
//alert (number(false))


let age = prompt("Возраст?" )

let message = (age<3) ? ("Здравствуй малыш"):
(age<18) ? "Привет":
(age<100) ? "Здравствуйте":
"Какой необычный возраст";

alert(message)


let company = prompt("Какая компания создала ДжаваСкрипт?")
(company = "Netscape") ?
alert("Верно") : alert("Неправильно")
