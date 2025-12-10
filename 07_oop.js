/*
    Prototype based 
    Class - based 

    OOP prensipleri 

*/

//----------------------------
// Object Literal (En temel class görünümü)
//------------

console.log("Object Literal ");

const user1 = {
  //Fields/Properties
  id: 1,
  name: "Cagrı",
  email: "cagri@gmail.com",

  //Method(instance member)
  describe: function () {
    console.log(`User ${this.id} => ${this.name}  (${this.email}) `);
  },

  //Kısa method syntax'i
  rename(newName) {
    this.name = newName;
  },
};

user1.describe();
user1.rename("Fatih");
user1.describe();

/*
   Factory Pattern (Object üreten fonksiyon)

*/

//Factory Function : Parametre alacak,icinde bir object literal üretecek, bu nesneyi return edecek

function createUser(id, name, email) {
  return {
    id,
    name,
    email,
    describe() {
      console.log(`User ${this.id} => ${this.name}  (${this.email}) `);
    },
  };
}

const user2 = createUser(2, "Ahmet", "ahmet@gmail.com");
const user3 = createUser(2, "Mehmet", "mehmet@gmail.com");

//factory pattern : nesne üretme sorumlulugunu soyutlar...

//ES6 'class' gelmeden önce , JavaScript OOP prototip constructor function üzerine kuruluydu

function User(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;

  // this.describe = function(){} //her instance icin ayrı bir function => Ram israfı
}

//ideal olan yöntem metotlar prototip üzerinde tutulur...

User.prototype.describe = function () {
  console.log("User Description: ", this.id, this.name, this.email);
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const u4 = new User(4, "Serra", "serra@gmail.com");
u4.describe();
u4.changeEmail("serra2@gmail.com");
u4.describe();

//Bu sekilde prototip bazlı yapıda tüm User instance'ları tek bir prototip object'ini paylasıyor...Yani describe,changeEmail her seferinde Ram'e kopyalanmaz... Tüm instance'lar aynı davranıs kümesini paylasır

/* -------------------------- */

class Customer {
  //constructor
  constructor(id, name, balance = 0) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `${this.name} bankaya ${amount} kadar yatırdı.. Yeni toplam miktar ${this.balance}`
    );
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("O kadar parası yok");
      return;
    }
    this.balance -= amount;
    console.log(
      `${this.name} bankadan ${amount} kadar cekti..Yeni toplam miktar ${this.balance}`
    );
  }

  //bu asagıdaki fonksiyonu virtual olarak düsünüyorsunuz
  getInfo() {
    console.log("Customer info : ", this.id, this.name, this.balance);
  }
}

const c1 = new Customer(1, "Serra", 5000000);
c1.getInfo();
c1.deposit(500);
c1.withdraw(10000);

//Inheritance (extends) ve Polymorphism

console.log("--------Inheritance ve Polymorphism");

class VIPCustomer extends Customer {
  constructor(id, name, balance, vipLevel) {
    //Base class constructor'i cagır
    super(id, name, balance);
    this.vipLevel = vipLevel;
  }

  //override(polymorphism)
  getInfo() {
    console.log("Burası degiştirilmiş vip infosudur:", this.id, this.name);
  }

  //VIP'ye özel fonksiyon
  getSpecialDiscount() {
    const discount = this.vipLevel * 5;
    console.log(`${this.name} indirimi ${discount}% seviyesindedir`);
  }
}

const v1 = new VIPCustomer(2, "Sevval", 5000, 3);
v1.getInfo();
v1.deposit(100);
v1.getSpecialDiscount();

//Base Type referansı altında derived instanceları tutabilirsiniz

const customers = [
  new Customer(3, "Normal müsteri", 200),
  new VIPCustomer(4, "Ozel müsteri", 10000, 5),
];

for (const cust of customers) {
  cust.getInfo();
}

//Encapsulation : Bir class'ın ic detayını saklamak sadece ihtiyacınız oldugu kadarını dısarı acmanızı saglayan bir prensiptir...
/*
1) class ici #privateField(modern,resmi syntax)

2) clouse ile state olarak private saklamak

#private örnegi (Node 12+ ve modern browserlar tarafından desteklenir)

*/

class BankAccount {
  //dısarıdan erişilemeyecek ögeler
  #balance = 0; //account.balance

  deposit(amount){
      this.#balance += amount;
  }
}

const acc = new BankAccount();
// console.log(acc.balance); //undefined


//Base class + Abstract class



class Shape{
    constructor(name){
        this.name = name;
    }

    //"pseudo-abstract" method - miras verilen sınıflarda override edilmek zorunda 

    area(){
        throw new Error("area davranısı tanımlanmak zorundadır");
    }

    describe(){
        console.log("Bu bir şekildir ",this.name);
    }
}

class Circle extends Shape{
    constructor(radius){
        super("Circle");
        this.radius = radius;
    }

    area(){
        return Math.PI * this.radius*this.radius;
    }
}

class Rectangle extends Shape{
    constructor(width,height){
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

const shapes = [
    new Circle(10),
    new Rectangle(5,8)
];

for(const s of shapes){
    s.describe();
    console.log("Area : ",s.area());
}


/*Composigion vs Inheritance 

Composition over Inheritance 

//----Inheritance bir "is a" ilişkisidir

Mudur: Personel Mudur is a personel
Enterprise : StarTrek    
Mage : Character 

//----Composition
 Composition : bir "has a " ilişkisidir
 Product 
    Category  

    Product has a Category


Yazar 
   Kitaplar

   Yazar has Books



*/