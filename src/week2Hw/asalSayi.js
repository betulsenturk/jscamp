
// birden bine kadar olan sayilari dolasmak icin dongu
for(let sayi = 1; sayi<=1000;sayi++)
{
    let sayac = 0;

        // sayinin birden kendisine kadar olan sayilara bolumunden kalanlari bulmak icin dongu
        for(let i=1; i<=sayi; i++)
        {
            let kalan = sayi%i;

            if(kalan==0){
                sayac++;  // sayinin kendisini tam bolen sayi adedi
            }
        }

        // sayinin kendisini tam bolen sayi adedi 2 ise bunlar bir ve kendisidir, asal olma kosulunu saglar
        if(sayac==2){
            console.log(sayi);
        }
}