function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
let nechta = +prompt("nechta misol yecha olasiz?");

for (let i = 0; i < nechta; i++) {
  let son1 = random(1, 100);
  let son2 = random(1, 50);
  let son4 = random(1, 5);
  let result = 0;
  let trueAnswer;   
  if (son4 == 1) {
    trueAnswer = son1 + son2;
    result = prompt(son1 + '+ ' + son2 + '= ?');
    if(trueAnswer == result){
        alert('true')
    }else{
        alert('false')
    }

  } else if (son4 == 2) {
    trueAnswer = son1 - son2;
    result = prompt(son1 + '- ' + son2 + '= ?');
    if(trueAnswer == result){
        alert('true')
    }else{
        alert('false')
    }
  } else if (son4 == 3) {
    trueAnswer = son1 * son2;
    result = prompt(son1 + '*' + son2 + '= ?');
    if(trueAnswer == result){
        alert('true')
    }else{
        alert('false')
    }
  } else if (son4 == 4) {
    trueAnswer = son1 / son2;
    result = prompt(son1 + '/' + son2 + '= ?');
    if(trueAnswer == result){
        alert('true')
    }else{
        alert('false')
    }
  }
}
