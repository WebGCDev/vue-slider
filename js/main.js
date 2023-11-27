const images = [
  {
    image: 'img/01.jpg',
    title: 'Paolo Maldini',
    text: 'Se da bambino mi fossi scritto una storia, la storia più bella che mi potessi immaginare, avrei scritto il mio sogno come effettivamente mi sta accadendo.',
  },
  {
    image: 'img/02.jpg',
    title: 'Franco Baresi',
    text: 'Le certezze sono queste: il Milan è ancora in corsa su tre fronti, campionato, Coppa Italia e Champions League. Per restare competitivi a tutti i livelli si perde qualcosa, in questo caso qualche punto in Italia.',
  },
  {
    image: 'img/03.jpg',
    title: 'Marco Van Basten',
    text: 'Quando un giocatore smette, diventa sempre migliore. Io ho giocato tante brutte partite, ho sbagliato gol clamorosi. Mi dite che sono stato il più grande ma la verità è che ho fatto parte di una squadra imbottita di campioni.',
  },
  {
    image: 'img/04.jpg',
    title: 'Ricardo Kaka',
    text: 'Quando lo vidi la prima volta mi misi le mani nei capelli: occhialini, pettinatissimo, faccia da bravo ragazzo, solo non vedevo la cartella con i libri e la merendina. Oddio, abbiamo preso uno studente universitario, ho pensato! Poi però è sceso in campo e… Apriti cielo. Ma apriti per davvero… Con il pallone tra i piedi era mostruoso. Uno dei giocatori più forti che abbia mai visto.',
  },
  {
    image: 'img/05.jpg',
    title: 'Alessandro Nesta',
    text: 'Il mio trasferimento al Milan fu molto strano. La mattina mi allenai a Formello, era ultimo giorno di mercato, poi scese in campo Cragnotti che mi disse che ero stato venduto al Milan. Non potevo rifiutare, conoscevamo tutti i problemi del club e quella stessa sera mi sono ritrovato nello stadio San Siro di fronte a 60.000 spettatori. È stata dura perché non ho nemmeno avuto il tempo di capire cosa stava succedendo.',
  },
];

//Constanti e Variabili
const attivaImmagine = document.getElementById('active-img');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');
const contenitoreThumbnail = document.getElementById('thumbnails');
let index = 0;

//Prima immagine dell'array come prima immagine del carousel:
attivaImmagine.src = images[index].image;

//Titolo e descrizione
let contenitoreDescrizione = document.getElementById('descrizione');

let contenitoreTitolo = document.createElement('div');
let contenitoreTesto = document.createElement('div');

contenitoreTitolo.innerHTML = images[index].title;
contenitoreTesto.innerHTML = images[index].text;

contenitoreTitolo.classList.add('title');

contenitoreDescrizione.append(contenitoreTitolo);
contenitoreDescrizione.append(contenitoreTesto);

//Creo ciclo for per generare le miniature con l'addEventListener click
for (let i = 0; i < images.length; i++) {
  let nuovoThumbnail = document.createElement('img');
  nuovoThumbnail.src = images[i].image;
  nuovoThumbnail.style.height = 'calc(100% / ' + images.length + ')';
  nuovoThumbnail.classList.add('thumbnail');
  contenitoreThumbnail.append(nuovoThumbnail);

  nuovoThumbnail.addEventListener('click', function () {
    thumbnailEl[index].classList.remove('active');
    index = i;
    attivaImmagine.src = images[i].image;
    contenitoreTitolo.innerHTML = images[index].title;
    contenitoreTesto.innerHTML = images[index].text;
    thumbnailEl[i].classList.add('active');
  });
}

const thumbnailEl = document.querySelectorAll(
  '.container #thumbnails .thumbnail'
);
thumbnailEl[index].classList.add('active');

//Per attivare i bottoni richiamo le funzioni
arrowDown.addEventListener('click', changeattivaImmagine);
arrowUp.addEventListener('click', changeattivaImmagineReverse);

//Funzione tasto in basso
function changeattivaImmagine() {
  thumbnailEl[index].classList.remove('active');
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }

  attivaImmagine.src = images[index].image;
  contenitoreTitolo.innerHTML = images[index].title;
  contenitoreTesto.innerHTML = images[index].text;
  thumbnailEl[index].classList.add('active');
}

//Funzione tasto in alto
function changeattivaImmagineReverse() {
  thumbnailEl[index].classList.remove('active');
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1;
  }

  attivaImmagine.src = images[index].image;
  contenitoreTitolo.innerHTML = images[index].title;
  contenitoreTesto.innerHTML = images[index].text;
  thumbnailEl[index].classList.add('active');
}
