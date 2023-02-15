export function ajoutListenerAvis() {
    const piecesElements = document.querySelectorAll(".fichesarticlebutton");
    for (let i= 0;i<piecesElements.length;i++) {
        piecesElements[i].addEventListener("click", ajoutEcouteur) 
            
        };
         
    }

async function ajoutEcouteur(event) {
    const id = event.target.dataset.id;
    const reponse = await fetch (`http://localhost:8081/pieces/${id}/avis`);
    const avis = await reponse.json();
    const pieceElement = event.target.parentElement;
    const avisElement =  document.createElement('p');
    for(let j=0;j< avis.length;j++){
            avisElement.innerHTML += `${avis[j].utilisateur}: ${avis[j].commentaire} <br>`;
            pieceElement.appendChild(avisElement);
            };
    event.target.removeEventListener("click",ajoutEcouteur);
  
    
}