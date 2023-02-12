// récupération des pièces depuis le fichier json
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();



function creerElement(article){
const imageElement = document.createElement('img');
imageElement.src = article.image;
const nomElement = document.createElement('h2');
nomElement.innerText = article.nom;
const prixElement =  document.createElement('p');
prixElement.innerText = `Prix: ${article.prix} €`;
const categorieElement =  document.createElement('p');
categorieElement.innerText = article.categorie;
//ajout de la description
const descriptionElement =  document.createElement('p');
descriptionElement.innerText = article.description ?? 'Pas de description pour le moment.';
const disponibiliteElement =  document.createElement('p');
disponibiliteElement.innerText = article.disponibilité===true? 'En stock.' :"Rupture de stock";

// sélection de l'élément parent
const articleElement = document.createElement("article");
articleElement.classList.add("article");

// ajout de l'élément enfant ici article = pieces[0]
articleElement.appendChild(imageElement);
articleElement.appendChild(nomElement);
articleElement.appendChild(prixElement);
articleElement.appendChild(categorieElement);
articleElement.appendChild(descriptionElement);
articleElement.appendChild(disponibiliteElement);

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(articleElement);

};

//creerElement(article);

pieces.map((article)=>creerElement(article));
