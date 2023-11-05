// №1
  let varOne = prompt("var one");
  let varTwo = prompt("var two");
  if (varOne == varTwo) console.log('equally')
  else console.log('not equally');

 // №2
  let fruits = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
  let colors = new Array('green', 'red', 'blue', 'light red', 'yellow');
  for (let ind1 = 0; ind1 < fruits.length; ind1++){
      console.log(fruits[ind1]);
      for (let ind2 = 0; ind2 < colors.length; ind2 ++){
          if (fruits[ind1] == fruits[ind2]){
             console.log(fruits[ind1] + " " + colors[ind1]);
          }
      }
    }

// №3
let salaryValue = (text) => {
    zp = prompt(text, undefined);
    zp = !isNaN(parseFloat(zp)) ? parseFloat(zp) : 0;
    while (zp == 0) {
      zp = prompt(text, undefined);
      zp = !isNaN(parseFloat(zp)) ? parseFloat(zp) : 0;
    }
    return zp;
  };
  let quantity = salaryValue("Количество человек");
  let salary = salaryValue("Введите зарплату на человека");
  alert("Затраты на ЗП " + quantity * salary);

  // №4
  let group = [
    {FIO:'Петров А.А.', mark: 5},
    {FIO:'Иванов Б.Б.', mark: 3.4},
    {FIO:'Сидоров Г.Г.', mark: 9},
    {FIO:'Немолодой Д.Д', mark: 0},
    {FIO:'Молодой Е.Е', mark: 3.4}
];
  let averMark = 0;
  let count = 0;
  let BadStud = [];

  for(let index=0; index < group.length; index++)
  { 
    if (group[index].mark > 5 || group[index].mark < 1) console.log('Недопустимое значение');
       else if (group[index].mark < 4) BadStud.push(group[index]); 
       averMark = averMark + group[index].mark;
       count ++ ;
  }

  averMark = averMark/count;
  console.log('Средняя оценка: ' + averMark);
  console.log('Плохие студенты:');
  if(BadStud.length === 0) console.log('Таких нет');
  BadStud.forEach((value)=>{console.log('Фио: '+value.FIO+'; Оценка: '+value.mark)});
