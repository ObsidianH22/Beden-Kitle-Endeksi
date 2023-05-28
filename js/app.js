let kilo=Number(prompt("Kilonuzu giriniz : "))
document.getElementById("kilo").innerHTML = kilo;

let boy=Number(prompt("Boyunuzu giriniz : "))
document.getElementById("boy").innerHTML = boy;


let sonuc=kilo/((boy/100)*(boy/100))
document.getElementById("sonuc").innerHTML=sonuc;


if(sonuc>0 && sonuc<18.5){
    document.getElementById("durum").innerHTML="İdeal kilonun altındasınız !";
}
else if(sonuc>18.5 && sonuc<24.9) {
    document.getElementById("durum").innerHTML="İdeal kilonuzdasınız! Tebrikler!";
}

else if (sonuc>30 && sonuc<39.9){
    document.getElementById("durum").innerHTML="İdeal kilonun çok üstündesiniz! (Obez)";
}
else if (sonuc>40) {
    document.getElementById("durum").innerHTML="İdeal kilonun çok üstündesiniz! (morbid obez)";
}
else {
    document.getElementById("durum").innerHTML="Lütfen pozitif sayılar giriniz...";
}