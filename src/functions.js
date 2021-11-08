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
