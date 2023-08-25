function checkage (age){
    return (age>18) ? true : confirm("Родители разрешили?");
}

function checkage2 (age){
    return (age>18) || conform("Родители разрешили?")   
    }




    function min (number1, number2){
        if(number1>number2){
            return(number2)
        }else return (number1)
    }


function min2 (number1, number2){
    return (number1<number2) ? number1 : number2
}


if (browers == "Edge") {
    alert("Your have got the Edge")
}else if(browers== "Chrome" ||
browers == "Firefox" ||
browers == "Safari" ||
browers == "Opera" ){
alert("Окей,вы используйте поддерживаемый браузер")
}else {
    alert("Мы надеемся эта страница выглядит хорошо")
}


const number = +prompt("Введите число между 0 и 3")
switch(number){
case "0":
alert("Вы ввели число 0")
break;
case "1":
    alert("Вы ввели число 1")
    break;
    case "2":
    case "3":
alert("Вы ввели число 2, а может и 3")
break;
}