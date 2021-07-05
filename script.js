const ekranEl=document.querySelector(".ekran");
const eksiButton=document.querySelector(".eksi");
const artiButton=document.querySelector(".arti");
let sayac=0;
console.log(ekranEl,eksiButton, artiButton);
artiButton.addEventListener("click",()=>{sayac=sayac+1;
console.log("arti tiklandi",sayac);
ekranEl.innerHTML=sayac;
});
eksiButton.addEventListener("click",()=>{sayac=sayac-1;
    console.log("eksi tiklandi",sayac);
    ekranEl.innerHTML=sayac;
    });

