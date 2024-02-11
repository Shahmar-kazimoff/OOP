//1) Product class olacaq.Name price count gələcək.
// ? Ve ayri bir funksiya olacaq ki bu funksiya 
// ? total Price hesablayacaq.Və bu yaranan productlari 
// ? bu funksiyaya gondərdiyimdə mənə total price console cixardacaq.
// ? Məsələn: 2 kofe 0.50 azn , 3 çay 4azn , 2 fanta 2azn    
// ? totalPrice=2*0.50+3*4+2*2 = 17Azn consoleda görsənəcək.

//! first way

class Product {
    constructor(ad, qiymet, say) {
        this.name = ad;
        this.price = qiymet;
        this.count = say;
    }

    totalPrice(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i].price * arr[i].count;
        }
        return total;
    }
}

const coffee = new Product("Coffee", 0.50, 5);
const tea = new Product("Tea", 4, 6);
const fanta = new Product("Fanta", 2, 3);
const total = new Product("Total", 0, 0);

console.log(`Kofe ${coffee.totalPrice([coffee])} AZN`);
console.log(`Cay ${tea.totalPrice([tea])} AZN`);
console.log(`Fanta ${fanta.totalPrice([fanta])} AZN`);
console.log(`Total ${total.totalPrice([fanta, tea, coffee])} AZN`);



// ! second way

// class Product {
//     constructor(ad, qiymet, say) {
//         this.name = ad
//         this.price = qiymet
//         this.count = say
//     }
   
// }
// function totalPrice(products) {
//     let total = 0
//     for (let i = 0; i < products.length; i++) {
//         total += products[i].price * products[i].count
//     }
//     return total
// }



// let coffee = new Product("Coffee", 0.50, 2)
// let tea = new Product("Tea", 4, 3)
// let fanta = new Product("Fanta", 2, 2)

// let productArr = [coffee, tea, fanta]

// let result = totalPrice(productArr)

// console.log(result);