let isim = prompt("adınız:")
let myName = document.querySelector("#myName")
myName.innerHTML =`${isim ? isim:"kullanici adi yok"}`

function clock() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("myClock").innerHTML = date;

}
setInterval(clock, 1000); 
tarihSaat()