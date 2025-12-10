// console.log("Temel Array kullanımı")

// let numbers = [10,20,30,40,50];

// console.log(numbers);

// console.log(numbers.length);

// //Index her zaman 0'dan baslar..

// console.log("İlk eleman :" , numbers[0]); //10
// console.log("Son eleman : ", numbers[numbers.length-1]); //50

// //Index dısı erişim => undefined döner(Exception beklemeyin)
// console.log("Index 100 : ",numbers[1000]) //cıktı undefined 

// let list = [1,2,3];

// console.log("Baslangıc : ",list);

// //push koleksiyona bir eleman ekler
// list.push(4);

// console.log("Son hali : ",list);

// //pop fonksiyonu sondaki eleman siler ver geri döndürür

// let removed = list.pop();
// console.log("pop() ile silinen ", removed);

// //unshift => Basas eleman eleman ekler

// list.unshift(0);
// console.log("unshift sonrası : ",list);

// //shift bastaki elemanı siler ve geri döndürür

// let removedFirst = list.shift();
// console.log("shift() ile silinen ",removedFirst);

// //===================================
// //--- splice - İceriden parca alma ve cıkarma
// //----------------------------

// console.log("\n==== splice / slice ====");

// let items = ["a","b","c","d","e"];

// console.log("Baslangıc : ",items);

// //slice(beging,end) => belirli aralıgı kopyalar , orijinali bozmaz
// let sub1 = items.slice(1,4) // index 1,2,3 "b","c","d"

// console.log(sub1); 

// //splice(start,deleteCount,...eklenecekler) => orijinali degiştirir

// let removedItems = items.splice(2,2); //index 2'den 2 eleman sil

// console.log(removedItems);
// console.log(items);

// //------------------------------------------
// //---- Döngüler  - for, for-of, while
// //-----------------------------------

// console.log("============== Döngüler ============");

// let nums = [5,10,15,20];

// //1) Klasik for 
// console.log("Klasik for ile");
// for(let i = 0; i < nums.length ; i++){
//     console.log("Index ", i,"Deger: ",nums[i]);
// }

// //2) for-of(modern , okunabilir)
// console.log("for-of ile");
// for(const n of nums){
//     console.log("Deger : ",n);
// }

// //3) while

// console.log("while ile : ");
// let index = 0;
// while(index < nums.length){
//     console.log("Index:",index,"Deger : ",nums[index]);
//     index++;
// }

// //Array üzerinde dolasırken for-of daha okunabilir
// //Klasik for ise index'e ihtiyacımız oldugu durumlarda devreye girer

// // Toplam, Ortalama , Min, Maks Hesaplama
function seperator(konu){
    console.log("==========",konu,"==========");
}

seperator("Toplam/Ortalama/Min/Max");

let grades = [90,70,50,100,85];

let sum = 0;
let min = grades[0];
let max = grades[0];
//Burada for-of gayet işimize yarar
for(const g of grades){
    sum += g;
    if(g < min){
        min = g;
    }
    else if( g > max){
        max = g;
    }
}

let average = sum/grades.length;

console.log("Notlar :",grades);
console.log("Toplam :",sum);
console.log("Ortalama",average);
console.log("Min : ",min);
console.log("Max :",max);


//-------------------------------------------
// Kosullu ve Kararlı block


let passCount = 0;
let failCount = 0;

for(const g of grades){
    if(g>= 50){
        passCount++;
    }
    else{
        failCount++;
    }
}

console.log("Gecen sayısı :" ,passCount);
console.log("Kalan sayısı :",failCount);


//grade.Count(g => g >= 50)


let prices = [100,200,300]; 

//Elimizdeki ürün fiyatlarını hepsine %10 indirim uygulayarak baska bir diziye aktarınız...

console.log("Orijinal fiyatlar: ",prices);

let discounted = [];

for(const p of prices){
    let newPrice = p*0.9; // bizim indirimimiz
    discounted.push(newPrice);
}

console.log("İndirimli fiyatlar : ",discounted);

//grades dizisindeki 80 veya üzeri alanları ayrı bir diziye aktarınız

let yuksekNotlar = [];

for(const g of grades){
    if(g>=80){
        yuksekNotlar.push(g);
    }
}

// Ögrenciler listesi 

seperator("Ogrenciler listesi");

let students=[
    {id:1,name:"Ali",score:40},
    {id:2,name:"Yusuf",score:90},
    {id:3,name:"Sevval",score:90},
    {id:4,name:"Feyyaz",score:100},
    {id:5,name:"Serra",score:100},
    {id:6,name:"Fatih",score:30}
];

seperator("Tüm ögrenciler")
for(const s of students){
    console.log(`Id: ${s.id}, İsim : ${s.name}, Not : ${s.score}`);
}


//2 gecen ögrencileri yazdırmak 
seperator("Gecen ögrenciler")
for(const s of students)
{
    if (s.score >= 50){
        console.log(s.name);
    }
}
