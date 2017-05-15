
// ---------Задача №1-------------

function task1() {
var x = prompt('Введите основание степени:','');
var n = prompt('Введите показатель степени:','');
var resDescription;

function pow(x, n) {
  var res;
  var resMessage = 'Результат возведения в степень: ';
  console.log('Основание степени: ', x);
  console.log('Показатель степени: ', n);

 if (x == 0 && n > 0) {
   res = 0;
   resDescription = 'При возведении нуля в любую натуральную степень n получается ноль.';
 }
 else if (x == 0 && n <= 0) {
   res = NaN;
   resDescription = '0 в степени 0 или в отрицательной степени не имеют смысла.';
 }
 else if (x == 1) {
   res = 1;
   resDescription = 'При возведении единицы в любую натуральную степень n получается единица.';
 }
 else if (n < 0) {
   res = x;
   n = n * -1;
   for (var i = 1; i < n; i++) {
     res = res * x;
   }
   res = 1 / res;
   resDescription = 'Отрицательная степень преобразуется в положительную таким образом: \n result = 1 / x^n';
  }
   else if (n == 0) {
     res = 1;
     resDescription = 'Любое число, кроме нуля, в нулевой степени равно единице.';
   }
  else if (n == 1) {
    res = x;
    resDescription = '';
  }
  else if (n > 0) {
    res = x;
    for (var i = 1; i < n; i++) {
        res = res * x;
    }
    resDescription = '';
  }

 if (resDescription !== '') {
     return console.log(resMessage, res, '\n\n\n *', resDescription,'\n\n\n');
 }
 else {
    return console.log(resMessage, res, '\n\n\n');
 }
}

pow(x, n);

}

// ---------Задача №2-------------
function task2() {
var arrNames = [];
var n = 5;
for (var i = 1; i < n+1; i++) {
  arrNames[i] = prompt('Введите Имя['+ i +'] из '+ n +':','');
  console.log('Имя['+ i +'] = ' + arrNames[i]);
}
alert('Спасибо!');
var userName = prompt('Теперь введите, пожалуйста, имя пользователя:','');
console.log('Имя пользователя = ' + userName);

function CheckIfExist(value) {
    return (value == userName);
}

if (arrNames.some(CheckIfExist)) {
  console.log(userName + ', вы успешно вошли \n\n\n');
} else {
  console.log('Кто Вы? Мы Вас не знаем. До свидания \n\n\n');
}
}
