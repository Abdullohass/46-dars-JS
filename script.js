// const h1Tegi=document.getElementsByTagName("h1")[0]tag nomi 
// const h1Tegi=document.getElementById("ism")[0]id boyicha olish
// const h1Tegi=document.getElementsByClassName("ism")[0]class boyicha olish
// const h1Tegi=document.querySelector("#ism")[0]


// console.log(h1Tegi);


const ism=document.getElementById("ism");
const familya=document.getElementById("familya");
const yosh=document.getElementById("yosh");

const a=prompt("Ismingizni kiriting");
const b=prompt("Familyangizni kiriting");
const c=+prompt("Yoshingizni kiriting");
const javob=+prompt("Ismingiz katta harifdami yoki kicikdami?\n 1) Katta \n 2) Kichik" );

if(javob==1){
    ism.textContent=a.toUpperCase();
    familya.textContent=b.toUpperCase();
    yosh.textContent=c
}else if(javob==2){
    ism.textContent=a.toLowerCase();
    familya.textContent=b.toLowerCase();
    yosh.textContent=c
}else{
    alert("1 yoki 2 ni tanlang !!!")
}
















