// 3   Animal adında  class yaradın. butun heyvanlarin ortaq özəlliklərin burda tutacaqsız.
// 3.1 Default olaraq Eat() metodu yaradın.
// 3.2 Daha sonra Walk() metodu yaradın.
// 3.3 GetInfo() metodu yaradın.
// 3.4 Animal - dan törəyən Bird (Men Timsah yaratdim)  klass - ı yaradın.//! Men timsah yaratdim.

class Animal {
    constructor(ad, nov) {
        this.ad = ad;
        this.nov = nov;
    }

    Eat() {
        console.log(`${this.ad} et yeyir`);
    }

    Walk() {
        console.log(`${this.ad} 4 ayaqlidir.`);
    }

    GetInfo() {
        console.log(`Ad: ${this.ad},\nNov: ${this.nov}`);
    }
}


class Surunen extends Animal {
    constructor(ad, nov, uzme) {
        super(ad, nov);
        this.uzme = uzme;
        console.log("\n");

    }

    Swim() {
        console.log(`${this.ad} ${this.uzme} metr derinliye qeder uze bilen surunendir.`);
    }
}

const Animals = new Animal("Aslan", "Memeli");
Animals.GetInfo();
Animals.Eat();
Animals.Walk();

const serçe = new Surunen("Timsah", "Surunen", 5);
serçe.GetInfo();
serçe.Eat();
serçe.Walk();
serçe.Swim();
