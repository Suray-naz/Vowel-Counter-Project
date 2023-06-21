

 
 
 
 // Temizle butonunun görünürlüğünü  gizle

const textInput=document.getElementById("text-input")
const sonucElementi=document.getElementById("sonuc")
const sesliHarflerElementi=document.getElementById("sesliHarfler")
const temizleButton=document.getElementById("temizleButton");


 function hesapla(){
    let text=textInput.value
    // Metni küçük harflere dönüştürme ve karakter dizisini diziye ayırma
    let word=text.toLowerCase().split("");
    console.log(word);

    // Sesli harfleri filtreleme ve yeni bir dizi oluşturma
    let sesliHarfler = word.filter(function (word){
        return ["a", "e", "i", "o", "u", "ü", "ö"].includes(word);
    })

    // Sesli harf sayısını elde etme
    let sesliHarfSayisi=sesliHarfler.length;
    console.log(sesliHarfSayisi);


    // sonucun görüntülenmesi
    sonucElementi.textContent=`Number of vowels: ${sesliHarfSayisi}`;


    // Sesli harflerin görüntülenmesi
    sesliHarflerElementi.textContent=`Vowels: ${sesliHarfler.join(",")}`;


    // Temizle butonunun görünürlüğünü ayarla
    temizleButton.style.display="inline-block";

 }

 function temizle(){
    textInput.value="";
    sonucElementi.textContent="";
    sesliHarflerElementi.textContent="";

    temizle.style.display="none";
 }