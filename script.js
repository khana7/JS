// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
// 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне ** год", "Мне ** лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.
// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".


// 1-task
// let a = prompt("Введите число: ")
//  console.log(a)

//  if (a===10){
//     console.log("Верно")
//  } else{
//     console.log("Не верно")
//  }



// 2-task
// let a = 50
// let b = 100
// if(a < b){
//     console.log("a < b")
// }else{
//     console.log("a > b")
// }



// 3-task
// let a=-2
// if(a>0){
//     console.log("positive")
// }else if(a===0){
//     console.log("equal")
// }else if (a<0){
//     console.log("negative")
// }


// 4-task
// let num = 45
// if(num % 2 == 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }


// 5-task
// let a = 10
// let b = 2

// if (a % b == 0){
//     console.log("Четное число")
// }else{
//     console.log("Нечетное число")
// }

// 6-task
// let s = 55
// if(typeof s === "number"){
//     console.log("number")
// }else if(typeof s === "boolean"){
//     console.log("boolean")
// }else {
//     console.log("string")
// }

// 7-task
// let a = 11
// if(a > 1 && a < 9){
//     console.log("Верно")
// }else{
//     console.log("Неверно")

// }

// 8-task
// let a = 3
// if(a == 3 || a == 7){
//     console.log(a + 7)
// }else{
//     console.log(a / 10)
// }

// 9-task
// let a = 3
// let b = 4
// if(a <= 0 || b >= 5){
//     console.log(a+b)
// }else{
//     console.log(a-b)
// }


// 10-task
// let a = 5
// let b = 3
// if(a > 4 && a > 10 || b >= 5){
//     console.log(a+b)
// }else{
//     console.log(a-b)
// }


// 11-task
// let month = 6
// if(month === 12 || month === 1 || month === 2){
//     console.log("зима")
// }else if(month === 3 || month === 4 || month === 5){
//     console.log("весна")
// }else if(month === 6 || month === 7 || month === 8){
//     console.log("лето")
// }else if(month === 9 || month === 10 || month === 11){
//     console.log("осень")
// }



// 12-task
// let day = 29
// if(day < 11 || day == 11){
//     console.log("в первую")
// }else if(day < 21 || day == 21){
//     console.log("вторую")
// }else if(day < 31 || day == 31){
//     console.log("третью")
// }


// 14-task
// let age = 21
// if (age >= 1 && age <= 4 || age === 21){
//     console.log("мне "+age+" год")
// } else{
//     console.log("мне "+age+" лет")
// }



// 15-task
// let time = 33
// if (time >=1 && time <= 12){
//     console.log("Первая четверть ")
// }else if(time>=16 && time<= 30){
//     console.log("вторая четверть ")
// }else if (time >= 31 && time <= 45){
//     console.log("третья четверть ")
// }else if (time>=46 && time<=59){
//     console.log("четвертая четверть ")
// }else{
//     console.log("neverno")
// }



