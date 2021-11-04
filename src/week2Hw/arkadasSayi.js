function arkadasSayi(sayi1, sayi2) {
    // sayi1 in kendisi haric bolenleri toplami hesabi
    let bolenToplami1 = 0;
    for(let i=1; i<sayi1; i++)
        {
            let kalan = sayi1%i;

            if(kalan==0){
                bolenToplami1 += i;
            }
        }

    // sayi2 nin kendisi haric bolenleri toplami hesabi
    let bolenToplami2 = 0;
    for(let i=1; i<sayi2; i++)
        {
            let kalan = sayi2%i;
    
            if(kalan==0){
                bolenToplami2 += i;
            }
        }    
    
    // Iki sayi birbirinin kendisi haric bolenleri toplamina esitse bu sayilara arkadas sayilar denir.
    if((bolenToplami1 == sayi2) && (bolenToplami2 == sayi1)){
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılardır.")
    }else{
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayı değildir.")
    }
}

arkadasSayi(220,284);
arkadasSayi(1184,1210);
