//If_1
// let a = +prompt('Введите любое число')
// if (a>0){
//     a++
// }
// alert(a)
// console.log(a)


//If_2
// let a = +prompt('Введите любое число')
// if (a>0){
//     a++
// } else{
//     a = a -2
// }
// alert(a)
// console.log(a)


//If_3
// let a = +prompt('Введите любое число')
// if (a>0){
//     a++
// } else if(a<0){
//     a = a -2
// } else{
//     a = 10
// }
// alert(a)
// console.log(a)


//If_4
// let a = +prompt('Введите любое число');
//     b = +prompt('Введите любое число');
//     c = +prompt('Введите любое число');
// if ( a>0 && b>0 && c>0){
//     alert('Среди введенных чисел 3 положительных')
// } else if ( (a>0 && b>0) || (b>0 && c>0) || (a>0 && c>0)){
//     alert('Среди введенных чисел 2 положительных')
// } else if (a>0 || b>0 || c>0){
//     alert('Среди введенных чисел 1 положительное')
// } else {
//     alert('Все числа не положительны')
// }
// console.log(a)
// console.log(b)
// console.log(c)


//If_5
// let a = +prompt('Введите любое число');
//     b = +prompt('Введите любое число');
//     c = +prompt('Введите любое число');
// if (a>0){
//     a = (a + '-положительное')
// } else if (a<0){
//     a = (a + '-отрицательное')
// }
// if (b>0){
//     b = (b + '-положительное')
// } else if (b<0){
//     b = (b + '-отрицательное')
// }
// if (c>0){
//     c = (c + '-положительное')
// } else if (c<0){
//     c = (c + '-отрицательное')
// }
// alert(a + '\n' + b + '\n' + c)
// console.log(a)
// console.log(b)
// console.log(c)


//If_6
// let a = +prompt('Введите любое число');
//     b = +prompt('Введите любое число');
// if (a>b){
//     alert(a)
// } else if (b>a){
//     alert(b)
// } else{
//     alert('Числа равны')
// }
// console.log(a)
// console.log(b)


//If_7
// let a = +prompt('Введите любое число');
//     b = +prompt('Введите любое число');
// if (a<b){
//     alert('Первое число меньше')
// } else if (b<a){
//     alert('Второе число меньше')
// } else{
//     alert('Числа равны')
// }
// console.log(a)
// console.log(b)


//If_8
// let a = +prompt('Введите любое число');
//     b = +prompt('Введите любое число');
// if (a>b){
//     alert(a + ', ' + b)
// } else if (b>a){
//     alert(b + ', ' + a)
// } else{
//     alert('Числa(а и b) равны')
// }
// console.log(a)
// console.log(b)


//If_9
// let a = +prompt('Введите переменную A');
//     b = +prompt('Введите переменную B');
// if (a>b){
//     b = [a, a = b][0]
//     alert('А= ' + a + ', В='  + b)
// } else if (b>a){
//     alert('А=' + a + ', В=' + b)
// } else{
//     alert('А=В')
// }
// console.log(a)
// console.log(b)


//If_10
// let a = +prompt('Введите переменную A');
//     b = +prompt('Введите переменную B');
// if (a!=b){
//     a = a+b;
//     b=a
//     alert('Теперь А=В=(А+В)=' + b)
// } else{
//     a = 0;
//     b = 0;
//     alert('Теперь А=В=0')
// }
// console.log(a)
// console.log(b)


//If_11
// let a = +prompt('Введите переменную A');
//     b = +prompt('Введите переменную B');
// if (a>b){
//     b = a
// } else if (b>a){
//     a = b
// } else {
//     a = 0
//     b = 0
// }
// alert('Теперь А=В=' + a)
// console.log(a)
// console.log(b)


//If_12
// let a = +prompt('Введите первое число');
//     b = +prompt('Введите второе число');
//     c = +prompt('Введите третье число');
// if (a<b && a<c){
//     alert(a + '- наименьшее число')
// } else if (b<a && b<c){
//     alert(b + '- наименьшее число')
// } else if (c<a && c<b){
//     alert(c + '- наименьшее число')
// } else{
//     alert('Кажеться какие-то числа равны')
// }
// console.log(a)
// console.log(b)
// console.log(c)


//If_13
// let a = +prompt('Введите первое число');
//     b = +prompt('Введите второе число');
//     c = +prompt('Введите третье число');
// if ( ( (a<b) && (b<c) )|| ( (c<b) && (b<a) ) ){
//     alert(b + '-среднее число')
// } else if ( ( (b<a) && (a<c) )|| ( (c<a) && (a<b) ) ){
//     alert(a + '-среднее число')
// } else if ( ( (a<c) && (c<b) )|| ( (b<c) && (c<a) ) ){
//     alert(c + '-среднее число')
// }
// console.log(a)
// console.log(b)
// console.log(c)


//If_14
// let a = +prompt('Введите первое число');
//     b = +prompt('Введите второе число');
//     c = +prompt('Введите третье число');
// if( a<b && a<c && b>c){
//     alert(a + '- наименьшее, а ' + b + ' наибольшее')
// } else if( a<b && a<c && b<c){
//     alert(a + '- наименьшее, а ' + c + ' наибольшее')
// } else if( b<a && b<c && a>c){
//     alert(b + '- наименьшее, а ' + a + ' наибольшее')
// } else if( b<a && b<c && a<c){
//     alert(b + '- наименьшее, а ' + c + ' наибольшее')
// }  else if( c<a && c<b && a>b){
//     alert(c + '- наименьшее, а ' + a + ' наибольшее')
// } else if( c<a && c<b && a<b){
//     alert(c + '- наименьшее, а ' + b + ' наибольшее')
// } 
// console.log(a)
// console.log(b)
// console.log(c)


//If_15
// let a = +prompt('Введите первое число');
//     b = +prompt('Введите второе число');
//     c = +prompt('Введите третье число');
// if ( a<b && a<c){
//     alert('Сумма наибольших: ' + (b+c))
// } else if ( c<b && c<a){
//     alert('Сумма наибольших: ' + (b+a))
// } else if ( b<c && b<a){
//     alert('Сумма наибольших: ' + (c+a))
// }
// console.log(a)
// console.log(b)
// console.log(c)