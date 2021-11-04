
// birden bine kadar olan sayilari dolasmak icin dongu
for(let sayi = 1; sayi<=1000;sayi++)
{
    let bolenToplami = 0;

    // sayinin bolenleri toplamini hesaplamak icin dongu
    for(let i=1; i<=sayi; i++)
        {
            let kalan = sayi%i;
            if(kalan==0){
                bolenToplami += i;
            }
        }

    // sayinin bolenleri toplami kendisinin iki katina esitse bu sayi mukemmel sayidir
    if(bolenToplami == (sayi*2)){
        console.log(sayi);
    }
}