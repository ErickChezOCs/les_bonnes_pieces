// récupération des pièces depuis le fichier json
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

const article = pieces[0];

const imageElement = document.createElement('img');
imageElement.src = article.image;
const nomElement = document.createElement('h2');
nomElement.innerText = article.nom;
const prixElement =  document.createElement('p');
prixElement.innerText = `Prix: ${article.prix} €`;
const categorieElement =  document.createElement('p');
categorieElement.innerText = article.categorie;

// sélection de l'élément parent
const sectionFiches = document.querySelector(".fiches");
// ajout de l'élément enfant ici article = pieces[0]
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

