 // Obtient tous les éléments ayant la classe 'design'.
 const designElements = document.querySelectorAll('.design');

 // Fonction qui découpe une chaîne de caractères en lettres et retourne un tableau avec chaque lettre.
 function splitText(text) {
   return [...text];
 }
 
 // Fonction pour créer une chaîne de caractères HTML qui assemble chaque lettre dans un élément <span>.
 function createHtmlStringForLetters(letters) {
   return letters.map((letter) => `<span>${letter}</span>`).join('');
 }
 
 // Fonction pour ajouter chaque élément 'design' à la fin de la file d'attente avec un délai de 2 secondes.
 function addDesignElementToBody(el) {
   // Tableau pour stocker toutes les lettres.
   let letters = splitText(el.innerText);
 
   // Créer un conteneur pour le texte encadré dans les éléments <span>.
   const textContainer = document.createElement('div');
   textContainer.className = "created"
   textContainer.innerHTML = createHtmlStringForLetters(letters);
 
   // Ajouter la nouvelle chaîne de caractères HTML à chaque élément ayant la classe 'design'.
   document.querySelector("#nom").appendChild(textContainer);
 }
 
 // Boucle à travers chaque élément ayant la classe 'design'.
 designElements.forEach((el, index) => {
   // Ajouter chaque élément 'design' à la file d'attente avec un délai de 2 secondes par rapport à l'élément précédent.
   setTimeout(() => {
     addDesignElementToBody(el);
   }, (index + 1) * 500);
 });
 

 const perspectives = document.querySelectorAll('.perspective');

perspectives.forEach(element => {
  element.addEventListener("mousemove", function(e) {
    // Récupération de la taille de l'élément
    var width = e.target.offsetWidth;
    var height = e.target.offsetHeight;

    // Calcul proportionnel des valeurs de rotation
    var ax = (window.innerWidth/2 - e.pageX) / 20;
    var ay = (window.innerHeight/2 - e.pageY) / 10;

    // Application des valeurs de rotation
    e.target.style.transform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";
    e.target.style.webkitTransform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";
    e.target.style.mozTransform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";
  });
});


const glitchs  = document.querySelectorAll(".glitched")
glitchs.forEach(element => {
   console.log(element)
    // Créer un élément div avec la classe "glitch-window"
const glitchWindow = document.createElement('div');
glitchWindow.classList.add('glitch-window');
    
const glitchedHeaderClone = element.cloneNode(true);
glitchWindow.appendChild(glitchedHeaderClone);

const header = element.parentNode;
header.appendChild(glitchWindow);


});

// // Récupérer l'élément h1 avec la classe "glitched"
// const glitchedHeader = document.querySelector('h1.glitched');

// Cloner l'élément h1 et le rajouter comme enfant de "glitch-window"


// Ajouter "glitch-window" comme enfant de "header"
let classified = document.querySelectorAll(".classified")
classified.forEach(element => {
  element.addEventListener("mouseover", function(e){
    
  })
});

// Sélectionne tous les éléments ayant l'attribut "draggable" à true
const draggableElements = document.querySelectorAll('[draggable="true"]');

// Initialise les variables utilisées pour stocker la position du curseur de la souris et de l'élément sélectionné
let dragStartX, dragStartY, draggableElement;

// Ajoute un événement de souris pour chaque élément sélectionné
draggableElements.forEach(function(element) {
  element.addEventListener('mousedown', function(event) {
    // Empêche la sélection de texte par défaut pendant le glissement
    event.preventDefault();

    // Stocke la position de départ du curseur de la souris et de l'élément sélectionné
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    draggableElement = event.target;

    // Applique la classe "dragging" pour permettre de savoir quel élément est actuellement sélectionné
    draggableElement.classList.add('dragging');

    // Ajoute des événements d'écoute des mouvements de la souris et de libération du clic de souris, pour effectuer le déplacement
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});

// Fonction de rappel pour les mouvements de la souris
function onMouseMove(event) {
  // Calcule la distance parcourue par la souris depuis le début du glissement
  const deltaX = event.clientX - dragStartX;
  const deltaY = event.clientY - dragStartY;

  // Déplace l'élément sélectionné en fonction des mouvements de la souris
  draggableElement.style.left = (draggableElement.offsetLeft + deltaX) + 'px';
  draggableElement.style.top = (draggableElement.offsetTop + deltaY) + 'px';
}

// Fonction de rappel pour la libération du clic de souris
function onMouseUp() {
  // Supprime la classe "dragging" de l'élément sélectionné
  draggableElement.classList.remove('dragging');

  // Supprime les événements d'écoute des mouvements de la souris et de libération du clic de souris
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}