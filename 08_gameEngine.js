//Star Trek vs Star Wars --Komut satırı Savası

// Tur bazlı bir savas simulasyonu

//Kullanıcı
//1)Öncelikle tarafını sececek Star Trek / Star Wars
//2)Tarafa göre bir gemi sececek (Enterprise-D,Defiant,Star Destroyer vs)
//3)Diger gemi pc tarafından yönelir...
//5) Sıra kullanıcıda oldugu zaman komut satırından bir secenek sececek
//    - Basic Attack(temel atak)
//    - Reinforce Shield(defans misali kalkan güclendirir)
//    - Special Ability(geminin kendine özel skill'i)
//    - Scan (Trek gemisinde daha güclü,Star Wars'da daha zayıf)

//Star trek tarafında daha utility based(daha akıllı özellikler)

//=========================================

//nodejs'teki kullanıcıdan satır satır input alabilmek icin require("readline")...Built in bir modüldür.
//readline.createInterface  input ve output

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Callback tabanlı rl.question() çağrısı yaptıgımız zaman daha kolay kullanmak icin bunu Promise'a saran bir yardımcı fonksiyon yazdık...Böylece async/await ile calısabiliyoruz...

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

//Logger ve Zar sınıfları

//Logger : logları kategorize etmek icin temel basit bir sınıf

class Logger {
  info(msg) {
    console.log("[Bilgi]", msg);
  }
  warn(msg) {
    console.log("[Uyarı]", msg);
  }
  battle(msg) {
    console.log("[Savas]", msg);
  }

  state(msg) {
    console.log("[Durum]", msg);
  }
}

//Dice Helper : bu bize bir sans mekanigi verecek

const Dice = {
  //1..Max arası integer
  roll(max) {
    return Math.floor(Math.random() * max) + 1;
  },

  //min...max arası integer
  rollRange(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  },

  //%yüzde ihtimalle true döndürür
  percent(percent) {
    return Math.random() * 100 < percent;
  },
};

//Uzay gemileri

//öncelikle bir base(bütün uzay gemilerini temsil eder)
class StarShip {
  constructor(config) {
    this.name = config.name;
    this.faction = config.faction; //Star Trek / Star Wars

    this.maxHull = config.maxHull; //Geminin saglıgı
    this.hull = config.maxHull;

    this.maxShields = config.maxShields;
    this.shields = config.maxShields;

    this.firePower = config.firePower; //ates gücü
    this.evasion = config.evasion; //kacınma durumu 0-50 (%)
    this.techLevel = config.techLevel; //1-10 arası gibi

    this.specialName = config.specialName;
    this.specialType = config.specialType; //trek_science/wars_brutal
    this.specialCooldown = config.specialCooldown || 3;
    this.specialReadyIn = 0; // 0 => kullanılabilir

    this.alive = true;
  }

  isAlive() {
    return this.alive;
  }

  //Geminin özet durumu (Saglıgı ve kalkanları)

  getStatusText() {
    return `${this.name} [${this.faction}] | Gövde durumu : ${this.hull}/${this.maxHull}..Kalkan durumu ${this.shields}/${this.maxShields}`;
  }

  //Her tur basında bir takım degerler güncellensin
  //Ozel yetenek cooldownı , minimal kalkan rejenerasyonu gibi
  onTurnStart(logger) {
    //Özel yetenek zamanı sayacı
    if (this.specialReadyIn > 0) {
      this.specialReadyIn -= 1;
    }

    //Basit otomatik kalkan dolumu
    let regenBase = 2;
    if (this.faction === "Star Trek") {
      regenBase = 5; //Trek teknolojisi : shield managementi daha iyi
    }

    const regen = regenBase;

    if (this.shields < this.maxShields) {
      this.shields += regen;
      if (this.shields > this.maxShields) {
        this.shields = this.maxShields;
      }
      logger.state(`${this.name} oto rejenere ${regen} kalkan dolumu`);
    }
  }

  //Hasar alma durumu
  //Önce shield'tan düser
  //Shield bitince hull'dan düsmeye baslar
  takeDamage(rawDamage, logger, source) {
    if (!this.isAlive()) return;

    //Evasion check : kacınma kontrolü
    if (Dice.percent(this.evasion)) {
      logger.battle(`${this.name} saldırıdan kacınması basardı!!!`);
      return;
    }

    let remaining = rawDamage; //öncelikle hasarı gelen brüt hasarı bir degişkene atıyoruz
    if (this.shields > 0) {
      const absorbed = Math.min(this.shields, remaining);
      this.shields -= absorbed;
      remaining -= absorbed;
    }

    if (remaining > 0) {
      this.hull -= remaining;
    }

    if (this.hull <= 0) {
      this.hull = 0;
      this.alive = false;
    }

    const srcName = source ? source.name : "Unknown";

    logger.battle(
      `${srcName} ${rawDamage} kadar hasarı ${this.name} isimli gemiye verdi...(Gövde : ${this.hull}/${this.maxHull} , Kalkanlar : ${this.shields}/${this.maxShields})`
    );

    if (!this.isAlive()) {
      logger.battle(`${this.name} yok edildi`);
    }
  }

  //Temel saldırı(Basic Attack)
  //Ateş gücü + kücük bir sans faktorü

  basicAttack(target, logger) {
    if (!this.isAlive()) {
      logger.warn(`${this.name} isimli gemi saldıramaz cünkü yok edildi`);
      return;
    }

    const fluctuation = Dice.rollRange(-3, 3);
    const damage = Math.max(5, this.firePower + fluctuation);

    logger.battle(
      `${this.name} isimli gemi ${target.name} isimli gemiye karsı temel bir saldırı düzenliyor`
    );
    target.takeDamage(damage, logger, this);
  }

  //Kalkanları güclendirme : hull'a odaklanmaz sadece shield destegi verir

  reinforceShields(logger) {
    let bonus = 8;
    if (this.faction === "Star Trek") {
      //Trek tarafı daha iyidir
      bonus = 12;
    }

    this.shields += bonus;
    if (this.shields > this.maxShields) this.shields = this.maxShields;

    logger.battle(
      `${this.name} kalkanlarını ${bonus} kadar destekledi...MEvcut kalkan durumu ${this.shields}/${this.maxShields}`
    );
  }

  //Ozel yetenek kullanılabilir mi bunu kontrol eden bir sistem
  canUseSpecial() {
    return this.specialReadyIn === 0;
  }

  //Özel yetenek mantıgı : 
  useSpecial(target,logger){
    if(!this.canUseSpecial()){
        logger.warn(`${this.name} isimli geminin özel yetenegi henüz hazır degil`);
        return;
    }

    if(this.specialType === "trek_precision"){
        //Target lock üstünlügü (hedef kitleme)
        //Kalkan bypass , hedef evasion düsürüsü
        logger.battle(`${this.name} isimli gemi hedefi olan ${target.name} gemisine ${this.specialName} isimli özel yetenegini kullanıyor `);
        const damage = this.firePower+20 + this.techLevel; //teknoloji katkısı ile birlikte özel yetenegin gücü
        const oldEvasion = target.evasion; //hedefin orijinal evasion'i baska bir constant'ta durur ama biz bu seferlik özel güc kullandık diye hedefin evasion'i aktif 0'a cekeriz...
        target.evasion = 0;
        target.takeDamage(damage,logger,this);
        target.evasion = Math.max(0,oldEvasion -5);
        logger.state(`${target.name} isimli geminin kacınma yetenegi sensör kilidinden dolayı 5 puan azaldı`);

        //todo : özel yetenekleri tanımlamaya devam edecegiz
    }



  }
}
