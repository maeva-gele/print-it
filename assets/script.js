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

// baliseImage = document.getElementById("carrousel")
// baliseImage.setAttribute(slides[i], )
// console.log(baliseImage) 

const boutonDroite = document.getElementById("btnDroite")
    boutonDroite.addEventListener("click", () => {
        console.log("le bouton droit à été cliqué")
	})

const boutonGauche = document.getElementById("btnGauche")
    boutonGauche.addEventListener("click", () => {
        console.log("le bouton gauche à été cliqué")
    })

const banner = document.getElementById("banner")
const img = document.createElement("img")
img.classList.add("banner-img")
let index=0

img.src= basePath + slides[index].image 
img.alt= slides[index].tagLine

banner.appendChild(img)