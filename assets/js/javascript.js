/**const nav = document.querySelector("nav");**/
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const btnUn = document.getElementById("btnUn");
const btnDeux = document.getElementById("btnDeux");
const btnTrois = document.getElementById("btnTrois");
const btnQuatre = document.getElementById("btnQuatre");
const btnCinq = document.getElementById("btnCinq");
const btnSix = document.getElementById("btnSix");


btnUn.onclick = () => main.style.background = "blue";
btnDeux.onclick = () => main.style.background = "purple";
btnTrois.onclick = () => main.style.background = "green";
btnQuatre.onclick = () => main.style.background = "yellow";
btnCinq.onclick = () => main.style.background = "orange";
btnSix.onclick = () => window.location.reload();
/**btnCinq.onclick = () => main.style.background = "linear-gradient(white, rgb(255, 204, 0),white)";**/


/**
btnUn.addEventListener("click", ()=>{
    nav.style.backgroundColor = "blue";
    main.style.backgroundColor = "blue";
    footer.style.backgroundColor = "blue";
});
**/

