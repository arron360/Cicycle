

if (num < 49) {
    console.log ("неверно")
} else if (num>100) {
    console.log("много")
} else {
    console.log("Верно")
};
 
(num == 50) ? console.log('Верно') : console.log('Неверно');

switch (num) {
    case num < 49:
        console.log ("неверно");
        break;
    case num > 100:
        console.log("много");
        break;
    case num > 80 : 
        console.log("все еще много");
        break;
    case  50 :
        console.log("Верно");
        break;
    default:
        console.log('что то не так');
        break;    
}

let num = 50;

///while (num < 55) { 
 //   console.log(num);
 //   num++;
//}

do {  // сделай что то и првоерь 
    console.log(num);
   num++;
}
while (num< 55); 

for (let i = 1; i < 8; i++){
    if (i == 6 ) {
        continue
    }
    console.log(i)
}