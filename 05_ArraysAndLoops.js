console.log("Temel Array kullanımı")

let numbers = [10,20,30,40,50];

console.log(numbers);

console.log(numbers.length);

//Index her zaman 0'dan baslar..

console.log("İlk eleman :" , numbers[0]); //10
console.log("Son eleman : ", numbers[numbers.length-1]); //50

//Index dısı erişim => undefined döner(Exception beklemeyin)
console.log("Index 100 : ",numbers[1000]) //cıktı undefined 

let list = [1,2,3];

console.log("Baslangıc : ",list);

//push koleksiyona bir eleman ekler
list.push(4);

console.log("Son hali : ",list);

//pop fonksiyonu sondaki eleman siler ver geri döndürür

let removed = list.pop();
console.log("pop() ile silinen ", removed);

//unshift => Basas eleman eleman ekler

list.unshift(0);
console.log("unshift sonrası : ",list);

//shift bastaki elemanı siler ve geri döndürür

let removedFirst = list.shift();
console.log("shift() ile silinen ",removedFirst);

//===================================
//--- splice - İceriden parca alma ve cıkarma
//----------------------------

console.log("\n==== splice / slice ====");

let items = ["a","b","c","d","e"];

console.log("Baslangıc : ",items);

//slice(beging,end) => belirli aralıgı kopyalar , orijinali bozmaz
let sub1 = items.slice(1,4) // index 1,2,3 "b","c","d"

console.log(sub1); 

//splice(start,deleteCount,...eklenecekler) => orijinali degiştirir

let removedItems = items.splice(2,2); //index 2'den 2 eleman sil

console.log(removedItems);
console.log(items);
