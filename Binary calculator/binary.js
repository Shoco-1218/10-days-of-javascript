(function(){
'use strict';

  const sum = document.getElementById('btnSum');
  const sub = document.getElementById('btnSub');
  const mul = document.getElementById('btnMul');
  const div = document.getElementById('btnDiv');
  const res = document.getElementById("res");
  const zero = document.getElementById('btn0');
  const one = document.getElementById('btn1');
  const clr = document.getElementById('btnClr');
  const eql = document.getElementById('btnEql');

  let numbers = [];

  zero.addEventListener('click', () => {
    res.value = "0" + res.value;
  });
  one.addEventListener('click', () => {
    res.value = "1" + res.value;
  });
  sum.addEventListener('click', () => {
    parsePush();
    pushOperator("+");
  });  
  sub.addEventListener('click', () => {
    parsePush();
    pushOperator("-");
  });  
  mul.addEventListener('click', () => {
    parsePush();
    pushOperator("*");
  });  
  div.addEventListener('click', () => {
    parsePush();
    pushOperator("/");
  });  
  clr.addEventListener('click', () => {
    res.value = " ";
    numbers = [];
  });  
  eql.addEventListener('click', () => {
    parsePush();
    res.value = result();
  });

  function result(){
    let answer = numbers[0];
    for (let i = 1; i < numbers.length; i += 2){
      if (numbers[i] === "+"){
        answer += numbers[i+1];
      }else if (numbers[i] === "-"){
        answer -= numbers[i+1];
      }else if (numbers[i] === "*"){
        answer *= numbers[i+1];
      }else if (numbers[i] === "/"){
        answer /= numbers[i+1];
        answer = Math.floor(answer); 
      }
    }
    answer = answer.toString(2);
    return answer;
  }

  function parsePush(){
    let number = parseInt(res.value, 2);
    numbers.push(number);
  }
  function pushOperator(operator){
    res.value = operator + res.value;
    numbers.push(operator);
  }
})()