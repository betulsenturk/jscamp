// ---------------------------JS Camp Week2----------------------------
function addToCart(productName = "Elma", quantity) {
    console.log("Sepete eklendi: " + productName + " adet: " + quantity);
}

addToCart();
addToCart("Yumurta",10);
addToCart(undefined, 15);

// bu da fonksiyon
// arrow function
let sayHello = ()=>{
    console.log("Hello!");
}

sayHello();

// bu da fonksiyon
let sayHello2 = function () {
    console.log("Hello2!");
}

sayHello2();

let product1 = {productName:"Elma", quantity:5, unitPrice:10}

function addToCart3(product) {
    console.log("Ürün: "+product.productName)
    console.log("Adet: "+product.quantity)
    console.log("Fiyat: "+product.unitPrice)
}

addToCart3(product1)

// referans tip(objeler referans tiptir)
let product2 = {productName:"Elma", quantity:5, unitPrice:10}
let product3 = {productName:"Elma", quantity:5, unitPrice:10}

product2 = product3; // referans namarasini atiyoruz
product2.productName = "KARPUZ"
console.log(product3.productName)

// deger tip
let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;  // sadece sayinin degerini atiyoruz
sayi2 = 100;
console.log(sayi1)

function addToCart4(x) {
    console.log(products);
}

let products = [
    {productName:"Elma", quantity:5, unitPrice:10},
    {productName:"Armut", quantity:5, unitPrice:10},
    {productName:"Karpuz", quantity:5, unitPrice:10}
];

addToCart4(products);

// rest
// birden fazla parametre varsa rest sona yazılır
function add(bisey,...numbers) {
    let total=0;
    for(let i=0; i<numbers.length; i++){
        total = total + numbers[i];
    }
    console.log(total);
    console.log(bisey)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

// spread
let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))

// Destructuring
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] =[
    {name:"İç Anadolu", population:"20M"}, 
    {name:"Marmara", population:"30M"}, 
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
];

console.log(icAnadolu.name);
console.log(icAnadoluSehirleri);
console.log(marmaraSehirleri);
console.log(karadenizSehirleri);


let newProductName, newQuantity, newUnitPrice
({productName:newProductName, quantity:newQuantity, unitPrice:newUnitPrice} = {productName:"Elma", quantity:5, unitPrice:10});

console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)

// ---------------------------End of JS Camp Week2----------------------------

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
