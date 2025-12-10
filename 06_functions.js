// JavaScript'te Fonksiyonlar bir value olarak görünür...Dolayısıyla siz dilerseniz fonksiyonları bir degişkene atayabilirsiniz veya bir baska fonksiyona argüman olarak verebilirsiniz...

//Parametre : Metot/Fonksiyon yaratılırken onun cagrılısı icin dısarıdan bir bilgi alacagını bildiren bir yapıdır

//Argüman : Metot/Fonksiyon cagrılırken ona verilen bilgidir...

//Function Decleration

//Parametre alan
function greet(name){
console.log("Merhaba "+name);
}

greet("Serra");

//Deger döndüren

function kareAl(x){
    return x*x;
}

let result = kareAl(5);
console.log("2'in karesi = ", kareAl(2));

//boolean döndüren bir fonksiyon

function isPass(not){
    return not >= 50; //Boolean ifade
}

console.log(isPass(30));
console.log(isPass(60));

//return'den sonra deger geldigi anda artık siz fonksiyondan dönen o degeri baska degişkenlere atayabilir veya baska fonksiyonlara argüman olarak verebilirsiniz...

//Varsayılan Parametreler

console.log("Default Parameters");
/*
 C# 
  void Log(string message="Burası varsayılan deger")

   JS'te
   function log(message="asdsadasdasd")
*/

function welcome(name="Anonim"){
    console.log("Hosgeldin ", name);
}

welcome(); //hosgeldin Anonim

welcome("Cagrı") ; //hosgeldin Cagrı

//Vergi hesaplama
function calculateTax(amount,rate=0.40){
    return amount*rate;
}

console.log(calculateTax(1000));

// Anonymous Function ve Expressions

/*
C# analojisi:
Declaration : normal metot
Expression = degişkene atnamıs anonymus/normal metot(delegate , lambda exression)

*/

//1) İsimsiz function bir degişken atama :

//Fonksiyonu bir degişkene atayacaksanız standart olarak degişkenin const olarak acılması gerekir...
const sayHi = function(name){
    console.log("Hi "+name);
}

sayHi("Cagrı");

//toplama fonksiyon'ı expression olarak:
const sum = function(a,b){
    return a+b;
}

/*
*Function'u parametre olarak baska function'a parametre olarak gecirebilirsiniz...
*Degişken üzerinden davranıs degiştirmek istedigimizde

*/

//------------------------------------
//F) Arrow Function - Modern Javascript
//------------------------------------
console.log("Arrow Functions");

/*
  Arrow function  , function expression'in daha kısa yazımıdır...

  const add = function(a,b) {return a+b;};

  Arrow

  const add = (a,b) => a+b;

  const add = (a,b) => {console.log("Toplama yapılacak"); return a+b;};

  Parametre yoksa bile mutlaka () 

  const hello = () => "Hello World";

  Parantezin opsiyonel olması sadece ve sadece tek parametre durumunda gecerlidir




*/

const multiply = (a,b) => a*b;

console.log(multiply(3,4));

const hello = () => "Hello World";

console.log(hello());

//Tek parametre tek satır

const double = x => x*2;//parantez gördügünzü gibi opsiyoneldir...

console.log(double(3));

//Callback fonksiyonlarda kodu kısaltmak icin kullanılır...En cok Angular componentlarında gözlemlenir


//Parametre olarak function kullanımı

/*
 Fonksiyonlar JS'de First-class Citizen olarak görülür...

 -Degişkene atanır
 -Parametre olarak verilir

 Func<T> ,Action<T>  

*/


//İşlem uygula fonksiyonu

function applyOperation(a,b,operation){
//operation : function(a,b) => number
const result = operation(a,b);
console.log("Sonuc : ",result);
return result;
}

//Toplama Operasyonu

const oppAdd = (x,y) => x+y;

//Cıkarma Operasyonu
const  oppSub =(x,y) => x-y;

//Carpma Operasyonu

const oppMult = (x,y) => x*y;

//Bölme operasyonu
const oppDiv = (x,y) => x/y;

//Inline arrow function ile 

applyOperation(10,5,(x,y) => x-y); // cıktı 5 //inline arrow function ile

applyOperation(3,4,oppAdd); //daha önce degişkene atanmıs fonksiyonları tutan deger ile

//Global Local sistemi

console.log("Local & Global")

let globalCounter = 0; //global scope

function incrementGlobal(){
    globalCounter++;
    console.log(globalCounter);
}

//Local variable örnegi:
function localExample(){
    let localValue = 10; //bu function icin gecerli
    console.log("localValue",localValue)
}

//closure

function createCounter(){
    let count = 0; // bu scope'a ait

    //İc function dıstaki ount'a erişebilir
    function increment(){
        count++;
        console.log("count:",count);
    }

    return increment; //function döndürüyoruz

}

const counter1 = createCounter();

counter1();
counter1();
counter1();

//Burada createCounter görevini yaptı bir daha  cagrıldıgında niye resetlenmiyor diye düsünebilirsiniz...Cevap closure'dir...

//Function, tanımlandıgı scope'u "hafızasında" tutar ve closure demek bu hafızanın o cercevede (function deger olarak atandıgında) kalıcı hale gelmesidir..


//Event handler'da  


//----------

function logIfPositive(n){
    if(n>0){
        console.log("Pozitif: ",n);
        return true;
    }
    
    return "Pozitif degil";
}

logIfPositive(5);
console.log(logIfPositive(-5));

//-----Filter Array------

function filterArray(arr,predicate){
    const result = [];
    for(const item of arr){
        if(predicate(item)){
            result.push(item);
        }
    }

    return result;
}

const numbers2=[1,2,3,4,5,6];
const ciftSayilar = filterArray(numbers2,x => x%2 === 0);
console.log("Cift sayılar :" ,ciftSayilar);

const logSum= (a,b) => {
    const s = a+b;
    console.log("Toplam :",s);
    //return yok => undefined döner
}

 logSum(5,6);
