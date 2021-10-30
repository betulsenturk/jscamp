// ---------------------------JS Camp Week1 Homework----------------------------

let sayi1 = 10;
sayi1 = "Engin Demiroğ";
let student = {id:1, name:"Engin"};
console.log(student);

// parametrede verdigimiz puan default deger
// default parametre sona yazılır
function save(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
// default parametreyi sona yazmazsak bu sekilde kullanabiliriz
save(undefined, student);

let students = ["Engin Demirog", "Halit Kalaycı", "Engin Toprak", "Büşra"];

console.log(students);

let students2 = [students, {id:2, name:"Halit"}, "Ankara", {city:"İstanbul"}];

console.log(students2);

//rest
//params
//varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

console.log(typeof showProducts);
showProducts(10, ["Elma", "Armut", "Karpuz"]);

//spread
let points = [1,2,3,4,50,4,60,14];
console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC", "D", ..."EFG", "H");


//Destructuring
let populations = [10000,20000,30000,[40000,100000]];
let [small,medium,high,[veryHigh,maximum]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations);

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category;
console.log(id)
console.log(name)


//oop
class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, "12345");
//prototyping
customer.name = "Murat Kurtboğan"
console.log(customer.name);

Customer.bisey = "Bişey";
console.log(Customer.bisey);

console.log(customer.customerNumber);

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id.customerNumber);
        this.firstName = firstName;
    }

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id.customerNumber);
        this.companyName = companyName;
    }

}


//mapFilterReduce
let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Asus Laptop", unitPrice:16000},
    {id:3, name : "Hp Laptop", unitPrice:13000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000},
]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

//birden fazla satir icin {}
products.map(product=>{
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})

let filteredProducts = products.filter(product=>product.unitPrice>12000)
console.log(filteredProducts)

let cartTotal = products.reduce((acc, product)=>acc+ product.unitPrice, 0)

console.log(cartTotal)

let cartTotal2 = products
.filter(p=>p.unitPrice>13000)
.map(p=>{
    p.unitPrice = p.unitPrice*1.18
    return p
})
.reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2);

// ---------------------------End of JS Camp Week1 Homework----------------------------

// ---------------------------JS Camp Week1----------------------------

console.log("Merhaba Kodlama.io")

// JS type safe degildir
let dolarDun = 9.20
let dolarBugun = 9.30

{   // baska bi dunya
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 -> hatali kullanim

console.log(euroDun)

// array
// camelCasing
// PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0;i<konutKredileri.length;i++){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("<ul>")

{/*
    <ul>
        <li>Konut Kredisi</li>
        <li>Emlak Konut Kredisi</li>
        <li>Kamu Konut Kredisi</li>
    </ul>
*/}

console.log(konutKredileri)

// ---------------------------End of JS Camp Week1----------------------------
