console.log("test");

/* declaration variables*/
let action;
let choixBoisson;
const age = prompt("Saisissez votre age:");
let solde = prompt("Saisissez votre solde:");
let interditJeu = prompt("Etes-vous interdit de jeu ?");
const prixAlcool = 8;
const prixSoft = 5;

/* declaration fonctions*/
function actionJouer() {
  /* jouer */

  if (action == "jouer") {
    if (solde <= -8000) {
      alert("solde insuffisant");
    } else if (age >= 18) {
      alert("vous pouvez jouer et gagner");
    } else {
      alert("vous pouvez jouer mais pas gagner");
    }
  } else if (action == "sortir") {
    /* choix non validé */
    alert("Aurevoir");
  } else {
    alert("Vous devez choisir boire, jouer ou sortir");
  }
}

/* boire */
function actionBoire() {
  if (action == "boire") {
    choixBoisson = prompt("alcool ou soft?");

    /* alcool*/
    if (choixBoisson == "alcool") {
      if (age >= 21 && solde >= 8) {
        alert("voici votre boisson alcoolisée");
        alert("votre solde est maintenant de: " + solde - prixAlcool);
      } else {
        alert("solde et age insuffisant");
      }
      /* soft*/
    } else if (choixBoisson == "soft") {
      /* solde*/
      if (solde >= 5) {
        alert("voici votre boisson soft");
        solde -= prixSoft;
        alert("votre solde est maintenant de: " + solde - prixSoft + "€");
      } else {
        alert("solde insuffisant");
      }
    } else {
      /* Cas par défaut */
      alert("Veuillez choisir une boisson valide: soft ou alcool");
    }
  }
}

/* entree */
function entreeCasino() {
  if (interditJeu == "oui") {
    alert("Vous ne pouvez pas entrer, vous êtes interdit de jeu");
  } else if (solde <= -8000) {
    alert("Vous ne pouvez entrer, votre solde est insuffisant");
  } else {
    alert("Bienvenue!");
  }

  /* ----------------------------------------------traitement---------------------------------------*/
  /* entree */
  entreeCasino();

  /* boucle action */
  while (solde > -8000 && action != "sortir") {
    /* choix actions*/
    action = prompt("boire, jouer ou sortir?");

    /* appel fonction "actionBoire" */
    actionBoire();

    /* appel fonction "actionJouer" */
    actionJouer();
  }
}
/* Message de sortie*/

if (action == "sortir") {
  alert("A bientôt");
} else {
  alert("Pas assez d'argent !");
}
