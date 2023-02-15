import { ajoutListenerAvis } from "./avis.js";

 

// récupération des pièces depuis le fichier json
const reponse = await fetch('http://localhost:8081/pieces');
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

//ajout d'un bouton afficher les avis
const btnAfficherAvis = document.createElement('button');
btnAfficherAvis.classList.add("fichesarticlebutton");
btnAfficherAvis.textContent ='Afficher les Avis'; 
btnAfficherAvis.dataset.id = article.id;
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
articleElement.appendChild(btnAfficherAvis);

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(articleElement);
 
ajoutListenerAvis();
};

//creerElement(article);

pieces.map((article)=>creerElement(article));

// sélection du bouton trier par prix croissants
const boutonCroissant = document.querySelector(".croissant");
const listeTriee = Array.from(pieces);
boutonCroissant.addEventListener("click", () => {
    listeTriee.sort(((a,b)=>{
        return a.prix - b.prix;
    }))
    
    document.querySelector(".fiches").innerHTML = " ";
    listeTriee.map((article)=>creerElement(article))
})
// sélection du bouton prix nonabordable
const boutonNonAbordable = document.querySelector(".nonabordable");
boutonNonAbordable.addEventListener("click", ()=>{
    const piecesInabordable = pieces.filter((piece)=>{
        return piece.prix<=35;
    });

    document.querySelector(".fiches").innerHTML = " ";
      piecesInabordable.map((article)=>creerElement(article))       
})
// sélection du bouton prix nonabordable
const boutonDescription = document.querySelector(".avecdescription");
boutonDescription.addEventListener("click", ()=>{
    const piecesSansDescription = pieces.filter((piece)=>{
        return piece.description ?? piece.description;
    });
    
    document.querySelector(".fiches").innerHTML = " ";
    piecesSansDescription.map((article)=>creerElement(article))
})

//listeTriee.map((article)=>creerElement(article));
const btnDecroissant = document.querySelector(".decroissant");
const cetteliste = Array.from(pieces);
btnDecroissant.addEventListener("click", () => {
    cetteliste .sort(((a,b)=>{
        return a.prix - b.prix;
    }))
    //
    const autreliste = Array.from(cetteliste);
    let derniereliste = Array.from(autreliste);
    let laderniereliste =(derniereliste.reverse() );

    document.querySelector(".fiches").innerHTML = " ";
    laderniereliste.map((article)=>creerElement(article))
})

const inputPrixMax = document.querySelector('#prix-max');
inputPrixMax.addEventListener('input',function(){
    const piecesFiltrees = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    })
    document.querySelector(".fiches").innerHTML = " ";
    piecesFiltrees.map((article)=>creerElement(article))
})