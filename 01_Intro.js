//Eski dönem

// var x = 10;

// x = 20; //degiştirilebilir. Calısır ancak artık tavsiye edilmiyor. Problem : Function scope/hoisting

/*Degişkenler icin modern tercihimiz : Let */

let counter = 0;
counter = counter + 1;

//const => degişmeyecek sabitler icin

const pi = 3.14;
// pi = 3.15; //hata alırsınız const olan bir yapıya ilk degeri tanımlandıktan sonra deger atanamaz...

// let sayi = 1, sayi2 = 2,metin = 'Hello'; //multi variable creation

// sayi = sayi2 = 5; //chain assignment

// let deneme,test, asd = 3;


//const yapısında dikkat etmeniz gereken şey : Object içi degişebilir

// const user = {name:"Çağrı",surName:"Yolyapar"};
// user.name = "Fatih";
// console.log(user.name)

//Artık var devri bitti..
//Degişken istiyorsak let, sabit istiyorsak const...

console.log("Hello World");

// ===================================================
//Variables & Types

//let => degiştirilebilir deger
//const => sabit (tekrar atama yok )
//var => eski yöntemde scope sorunlu tanımlama durumu 

let firstName = "Cagrı"; //String
let age = 37; //Number(JS'te int/double ayrımı yok)
let isActive = true; //Boolean

let unknown;   //undefined (Bilincli olarak deger verilmemiş)
let nothing = null; //null(bilinci olarak bos)

let height;
let empty = null;

let tags = ["js","es6"]; //array(object türünden)

let user = {       //object
    name:"Cagrı",
    surName : "Yolyapar"
}

console.log(typeof firstName); //string
console.log(typeof age); //number
console.log(typeof isActive); //boolean
console.log(typeof unknown); //undefined
console.log(typeof empty); // null ama object

//undefined ve error not defined farklıdır

// console.log(asdasd); //not defined hatası alırsınız...

console.log("firstName:",firstName);
console.log("age:",age);

console.log(`Is online : ${isActive}`);

//Temel karşılaştırmalar
// ==      ===

console.log("Loose karsılastırma",age == "37"); //cıktı sadece deger üzerinden oldugu icin true olur
console.log("Strict karsılastırma",age === "37"); //cıktı karsılastırma aynı zamanda tip üzerinden yapıldıgı icin false olur

//----------------------------------
//let vs const vs var - Tekrar atama /Tekrar Tanımlama (Reassignment/Redeclaration)

//let => aynı isimle aynı scope icinde tekrar tanımlanamaz...

let sehir ="İstanbul";
console.log("Şehir:",sehir);

sehir = "Ankara";
console.log("sehir:",sehir);

//const'ta reassignment yapılamaz

const ulke = "Türkiye";
// ulke = "Amerika"; //console tarafında hata alırsınız

//var => eski keyword'dur

var dil = "JavaScript";
console.log("Dilimiz : ",dil);

dil = "TypeScript"; //sorun olmaz
console.log("Dilimiz degişti",dil);

console.log("\n===== Scope farkı (block vs function) ===")

//Asagıdaki örnekte block icerisindeki tanımlamalara dikkat ediniz
// if(true){
//  let iceridekiLet = "(((İcerideki let degeri)))";
//  console.log("Dogal olarak kullanılabilir: ",iceridekiLet);
// }

// console.log(iceridekiLet); iceridekiLet is not defined hatası alırsınız...

// if(true){
//  var iceridekiVar = "(((İcerideki var degeri)))";
//  console.log("Dogal olarak kullanılabilir: ",iceridekiVar);
// }

// console.log("if dısındaki var degeri : ",iceridekiVar);

//Calısır ancak buradaki problem var'ın cok fazla serbest olmasının kodunuzda karmasıklıga ve sıkıntıya yol acmasıdır...

// function scopeTest(){
//   var functionVar = "Fonksiyon icindeki var";
//   let functionLet = "Fonksiyon icindeki let";

//   console.log("function scope ici var",functionVar);
//   console.log("function scope ici let",functionLet);
// }

//ikisi de function dısında gözükmez
// scopeTest();

// console.log(functionVar); 

//-----------------------------------------
//Hoisting - var'ın bir baska problemi
//----------------------
console.log("==========Hoisting==========")

//var ile tanımladıgınız degişken, tanım satırından önce bile tanınmıs sayılır ama deger undefined olur...

console.log("Tanım öncesi degişken (var):",valueBeforeDeclaration);

//Burada cıktı : undefined olacaktır...
//Yani JS, dosyayı okurken "var valueBeforeDeclaration" satırını yukarıya tasımıs(hoist etmiş) davranısı sergiler

var valueBeforeDeclaration = 42;


//=====================================================
//loosen comparament'ta otomatik dönüsüm

let n1= 5;
let n2 = "5";

console.log("n1 == n2 :",n1 == n2); //Js tipi otomatik convert eder true
console.log("n1 === n2:", n1 === n2); //false => tür + deger 

//her zaman === ve !== kullanmayı standart olarak benimsemeliyiz...











