//==================================
// Operatorler ve Oncelikleri
//==================================

console.log("====Aritmetik Operatorler=====");

let a = 10;
let b = 3;

// console.log("a+b =",a+b); //13
// console.log("a-b =",a-b); // 7
// console.log("a*b =",a*b); // 30
// console.log("a/b = ",a/b); //3.3333...
// console.log("a%b =",a%b); // 1 => bölümden kalanı verir
// console.log("a ** b", a**b); //10^3 = 1000 (üs alma)

// console.log("25 % 5 =",25 % 5); // 0 => divisible

//--------------------------------
// Assignment Operator( = += -= *= /= %= **=)

console.log("\n====== Assignement Operators =======");

let x = 10;

console.log("Baslangıc => ", x);

// x += 5; // x = x+5;
// console.log("x += 5 => ",x);

x -= 2; //x = x - 2;
console.log("x -= 2", x);

x *= 3;

x /= 4;

// -----------------------------------------
// Karşılaştırma Operatorleri (< > <= >= == === != !==)

console.log("\n=== Karsılastırma Operatorleri ===");

let p = 10;

let q = "10"; // string

//Numeric Operatorlerde
console.log("p>5", p > 5); //true , q da olur otomatik type casting yapar

console.log("p < 5 => ", p < 5); //false
console.log("p>=10", p >= 10); // true
console.log("p <= 9", p <= 9); //false

console.log("p == q => ", p == q); //true => string '10' number 10'a dönüstürülür

console.log("p === q", p === q); //false => type farklıdır

//İlkel ve operatoru(&) ,  Kısa devre &&(ve)  operatoru

console.log("true && true", true && true); //true
console.log("true && false", true && false); //false

// ||(veya) => en az biri true
console.log("true || false", true || false); //true
console.log("false || false", false || false); //false

console.log("!true", !true); //false
console.log("!false", !false); //true

let age2 = 20;
let hasId = true;

let canEnter = age2 >= 18 && hasId;

console.log(canEnter); //true

//------------------

//Öncelik her zaman ilkel operatorler
//Sonra ve operatorunundur...
// && , & , | , ||

//--------
//console.log("\nEgzersiz 1:",true|| false &&false); //cıktı true
//Adım adım:
//Önce => false && false => false
//true || false => true

console.log("----------------------");

// console.log(true | false && false); //false

// console.log(false && true || true) //true

// console.log(false || (true && true)); //cıktı true

// console.log(true && false || false && true); //cıktı false
// console.log((true &&false) || (false&&true) || true); //cıktı true

console.log(!true || (true && false)); //cıktı false

/*

Precedence
1 ) ! (not)
2 ) ilkeller (ilkel icerisinde de ve önceligi vardır)
3 ) &&

*/

/*
    String Operatorler(+ ve += operatorleri)


*/

console.log("\n===  String Operatorler  ===");

let s1 = "Hello";
let s2 = "World";

let s3 = s1 + " " + s2; //concatenation deriz
console.log(s3);

let message = "User: ";
message += "Cagri"; //+= string birleştir ve ata komutunu verir
console.log(message);

//JS'de + operatoru hem toplama hem birleştirmeyi aynı anda yapabilir

console.log(5 + 5); // 10

console.log("'5'+5+4 = ", "5" + 5 + 4); //554

console.log("4 + 5 +'4'", 4 + 5 + "4"); //94

// --------------
console.log("5" - 2); // 3 => string number'a dönüsür

console.log("5" * 2); //10 => numeric işlem olur

console.log("5a" * 2); //NaN => numeric degil

//----------------------------------------
// Icrement Decrement Operators (++, --)
//----------------------------

console.log("\n === Unary Operators ===");

let num = 10;

console.log("num++(post-increment): ", num++); //cıktı 10 => sonra 11 yap

console.log("sonrası ", num);

num = 10;

console.log("Reset");

console.log("++num(pre-increment):", ++num); //önce 11 => sonra yaz 11

console.log(num);

//+ value => string'i number'a cevirir

console.log(+"123"); //123 number

//-value => value'yu negatif yapar

console.log(-"10"); // -10

console.log(!""); //bos string false'dur. ! ile zıt hali gelir

console.log(5 == "5", 5 === "5"); //cıktı true false

console.log(true + true); //2

console.log(true && "Merhaba");

// 3 > 2 > 1   |    1 < 2 <3

console.log(3 > 2 > 1); //false

console.log(1 < 2 < 3); //true

//------------------------------------------

//Spread

//============================================
//spread operator (...)
//==============================

//1)
// Rest parameter => function tanımında : function deneme(...args){}

//Anlamı "Geri kalan tüm argümanları tek bir array olarak topla"

//2) Spread Operator => function cagrısında veya array/object literal icinde

// foo(...bişiler)
//[...array1,...array2]
//{...obj1,...obj2}

//Anlamı : Bu collection'i ac, elemanlarını tek tek serpiştir

//C# analojisi :
//rest parameter : params keyword'u (params int[] numbers)
//-spread : array'i tek tek argüman olarak göndermek

//Klasik parametre ve Rest parametresi
//---------------------

//Klasik parametrede :
function seperator() {
  console.log("--------------------------------");
}

function sum3(a, b, c) {
  return a + b + c;
}

seperator();
//console.log("sum3 => ", sum3(1, 2, 3)); //aklınızda olsun sum3(1,2,3,4) gibi bir ifadede bulunsak fazlalıklar yok sayılır...

function sumAll(...numbers) {
  //numbers'i burada gözlemlendiginizde bir array görürsünüz
  console.log("sayılar:", numbers);
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
console.log(sumAll(1, 2, 3));

function degerleriLogla(prefix, ...values) {
  //Burada prefix normal parametredir , values ise geri kalanların hepsi
  console.log("Prefix:", prefix);

  console.log("Degerler :");
  for (const v of values) {
    console.log(prefix, v);
  }
}

degerleriLogla(
  "[Bilgi]",
  "Proje Mimarisi",
  "Dokumantasyon",
  "Back End Front End ekip dagılımı"
);

seperator();

//Spread tarzında kullanım

console.log("\n ======= Fonksiyon cagrısında ...array kullanımı =======");

//Math.max sizden normalde tek tek parametre ister
console.log(Math.max(1, 2, 5, 9, 11));

const arr = [1, 5, 2];
// console.log(Math.max(arr)); //Nan

//Dolayısıyla burada spread devreye girer
console.log(Math.max(...arr)); //5
//..arr => [1,5,2] => Math.max(1,5,2) seklinde acılır

//Array birleştirme - Eski yöntem vs spread

seperator();

console.log("\n ====== Array birleştirme ======");

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//Eski yöntem

const birlesmisA = a1.concat(a2);

console.log(birlesmisA);

//Spread ile
const spreadIleBirlesmis = [...a1, ...a2];
console.log(spreadIleBirlesmis);
//Araya ekstra eleman sıkıstırmak :

const ekstraliBirlesim = [0, ...a1, 29, ...a2, 12, a1];
console.log(ekstraliBirlesim);

//shallow copy
const clone = [...a1];
clone.push(999);
console.log("Orijinal array", a1);
console.log("Klon:", clone);

//Object Literal ile spread - shallow copy / merge

console.log("\n ==== Object Spread ====");

const user = {
  Id: 1,
  name: "Fatih",
  role: "Admin",
};

const extraInfo = {
  email: "fatih@bilgeadam.com",
  role: "super-admin",
};

//spread ile objectleri birleştirmek
const birlesmisObject = {
  ...user,
  ...extraInfo, //aynı property görülürse sonraki kazanır
};

console.log("user:", user);
console.log("extraInfo:", extraInfo);
console.log("mergedUser:", birlesmisObject);

//======================
seperator();

console.log(
  "\n ===== Rest Parameter ve Spread birlikte Fonksiyon kullanımı ====="
);

//Bu fonksiyon , parametreleri alıp loglayacak  ve Math.max'e forward edecek

function maxOfAll(...values) {
  console.log("Buraya gelen degerler:", values);

  return Math.max(...values);
}

//=======================
//Destructuring ile ... kullanımı (rest pattern)
//----------------------------------------/
seperator();
console.log("===Array Destructuring + rest pattern ===");

const numbers2 = [10, 20, 30, 40, 50];

const [first, ...restNumbers] = numbers2;

console.log("first degişkeni:", first);
console.log(restNumbers);

//Burada array destructuring icerisinde kullanılırsa  geri kalan tüm elemanlar o tanımladıgım diger deişkene doldur(ayrı bir array seklinde)

const settings = {
  theme: "dark",
  language: "tr",
  showNotifications: true,
  autoSave: false,
};

//asagıda language'i ayrı alıp kalan ayarları baska bir object'e topladık..Object destructuring icerisinde ... kullanırsak kalan tüm property'leri baska bir object altında topla demiş olursunuz...
const { language, ...otherSettings } = settings;

console.log(language);
console.log(otherSettings);

seperator();

console.log("\n===== Predicate ======");

function filterArray(arr, predicate) {
  //predicate : (item) => boolean
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push;
    }

    return result;
  }
}

//BUrada combinePredicates Rest Parameter kullanıyor:
function combinePredicates(...predicates){
 //predicates burada bir array : [pred1,pred2,pred3 , vs]
 
  return function(item){
    //Bütün predicateler true dönüyorsa item kabul edilir:
    for(const p of predicates){
        if(!p(item)){
            return false;
        }
    }

    return true;
  }


}
