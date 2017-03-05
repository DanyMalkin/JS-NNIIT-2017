//переворачиваем строку

function TurnStr(a){
var u = 0; 
var i;
var arr=[];

//в цикле заносим в каждый элемент массива символ строки с конца к началу
for (i = a.length - 1;i>=0;i--){
arr[u] = a.charAt(i);
u++;
}

//выводим массив в виде строки
return arr.join('');
}

console.log(TurnStr("hello world"));
