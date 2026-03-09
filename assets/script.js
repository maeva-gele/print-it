const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides)

const basePath = "assets/images/slideshow/"
let index = 0

//CREATION DES IMAGES 
const banner = document.getElementById("banner")
const img = document.createElement("img")
img.classList.add("banner-img")

//CREATION DU TEXTE 
const txt = document.createElement("p")

//CREATION DES DOTS 
const dotsHome = document.getElementsByClassName("dots")
const dot = document.createElement("div")
dot.classList.add("dot")

//VARIABLES DU CAROUSSEL 
function caroussel() {
	img.src = basePath + slides[index].image 
	img.alt = slides[index].tagLine 
	txt.innerHTML = slides[index].tagLine // Utilise innerHTML pour afficher le HTML dans tagLine
}

// LES BOUTONS "EVENT LISTENER"
///// BTN APRES 
const boutonGauche = document.getElementById("btnGauche")
boutonGauche.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length // L'opération modulo (%) permet de "boucler" l'index. Cela signifie que si l'index > slides.length, index sera réinitialisé à 0.
    caroussel()
});
/////BTN AVANT 
const boutonDroite = document.getElementById("btnDroite")
boutonDroite.addEventListener("click", () => {
    index = (index + 1) % slides.length
    caroussel()
});

//AFFICHAGE DES ELEMENTS 
banner.appendChild(img)
banner.appendChild(txt)