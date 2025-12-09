console.log("==== Karar mekanizmaları : If yapısı ====");

let temperature = 30;

if (temperature > 25) {
  console.log("Hava felaket sıcak");
}

console.log("Baska bir kod");

let not = 45;

//Eger if else blocklarınızdan herhangi birinde tek satırlık bir kod varsa süslü parantez kullanmak zorunda degilsiniz..
if (not >= 50) console.log("Gectin");
else {
  console.log("Kaldın");
}

let age = 17;

if (age >= 65) {
  console.log("Ücretsiz geciş hakkı");
} else if (age >= 18) {
  console.log("Tam bilet");
} else {
  console.log("Ogrenci indirimi");
}

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Giriş yaptınız");

  if (isAdmin) console.log("Admin paneline hos geldiniz");
  else console.log("Bu panel icin yetkiniz yok");
}

//Switch yapısı
console.log("=== Switch yapısı ===");

let day = 3;

switch (day) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Carsamba");
    break;

  default:
    console.log("Tanımlanmamıs gün");
    break;
}

let role = "moderator";

switch (role) {
  case "admin":
  case "moderator":
  case "ceo":
    console.log("Yonetim paneline yonlendiriliyorsunuz");
    break;

  case "member":
  case "visitor":
    console.log("Alısveriş paneline yonlendiriliyorsunuz");
    break;
}

//Birden fazla olası degeri kontrol ediyorsanız switch kazanır
//Mantık degerlendirmesi (greater than , less than) if kullanılır

//Ternary if

console.log("==== Ternary Operator ===");

let age2 = 20;

let message = age2 >= 18 ?"resitsiniz":"Resit degilsiniz";
console.log(message);

let examScore = 72;

let result = 
   examScore >= 90 ? "AA":
   examScore >= 80 ? "BA":
   examScore >= 70 ? "BB":
   examScore >= 60 ? "CB":
   "FF";

   console.log(result);

   //---------------------

   console.log("=== Mantık Egzersizi ===");

   let isNight = true;
   let isRaining = false;
   let hasUmbrella = false;

   /* Soru
     DIsarı cıkabilir misin

     Sartlar:
     Geceyse cıkma
     Yagmur yagıyorsa ve semsiyen yoksa cıkma
   */

     if(!isNight && !(isRaining && !hasUmbrella)){
        console.log("Dısarı cıkabilirsin");
     }
     else{
        console.log("Dısarı cıkmak güvenli degil");
     }
