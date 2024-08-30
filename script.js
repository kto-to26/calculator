const result = document.querySelector('#result'),
      num = document.querySelectorAll('.number'),
      operation = document.querySelectorAll('.operation'),
      equals = document.querySelector('.equals'),
      clear = document.querySelector('#clear');

    //   Введенное значение(цифры и операции)
let ex = ''; 
result.innerHTML = '0';


// Клик на числа
function clickNum() { 
  if(!ex  || ex === '0') {
   
    ex = this.id;
  } else {
    
    ex += this.id;
  }
//   split оставляет только цифры
// pop возвращает последнее число(чаще всего ответ)
  result.innerHTML = ex.split(/\/|\*|\+|-|=/).pop();
  checkLength(result.innerHTML);
};

// Клик на операции
function clickOp() { 
  if(!ex) {
    return;
  }
//   убираем значения после "="
  ex = ex.toString().replace(/=/, '');

//   проверяем есть ли операции с помощью match
  if (ex.match(/\/|\*|\+|-|=/)) {
    // если они есть,то складываем в строке
    ex = eval(ex).toString();
  } 

  ex += this.id;
  result.innerHTML = this.id;
};


// Обработчики
Array.from(num).forEach(function(el) { 
      el.addEventListener('click', clickNum);
    });

Array.from(operation).forEach(function(el) {
      el.addEventListener('click', clickOp);
    });

// Отчистка
clear.addEventListener('click', () => {
  result.innerHTML = '';

  ex = '';
})


// кнопка равно
equals.addEventListener('click', ()=> {
  if (!ex) {
    result.innerHTML = '0';
  } else {
    // eval - выполняет то,что написано в строке
    ex = eval(ex);
    result.innerHTML = ex;
  }
})

// Для длинных чисел
function checkLength(arg) { 
  if (arg.toString().length > 14) {
    result.innerHTML = '0';
    ex = '0';
  } 
}

