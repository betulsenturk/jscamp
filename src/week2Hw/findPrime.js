function findPrime(...numbers) {

    // numbers in icindeki elemanlari gezmek icin dongu
    for(let i=0;i<numbers.length;i++)
    {
        let sayac = 0;

        // sayinin birden kendisine kadar olan sayilara bolumunden kalanlari bulmak icin dongu
        for(let j=1; j<=numbers[i]; j++)
        {
            let kalan = numbers[i]%j;

            if(kalan==0){
                sayac++;  // sayinin kendisini tam bolen sayi adedi
            }
        }

        // sayinin kendisini tam bolen sayi adedi 2 ise bunlar bir ve kendisidir, asal olma kosulunu saglar
        if(sayac==2){
            console.log(numbers[i]+": Asaldır");
        }else{
            console.log(numbers[i]+": Asal değildir");
        }
    }
}

findPrime(3,5);
findPrime(2,5,8,21,13);
