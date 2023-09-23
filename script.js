const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
btn.addEventListener("click", getJoke);
getJoke();


/*const jokeContainer = document.getElementById("joke");:
Acesta este un selector DOM care obține un element HTML cu un id specific.
In acest caz, elementul cu id-ul "joke". 
Acest element va fi utilizat pentru a afișa bancul umoristic.

const btn = document.getElementById("btn");: 
Acesta este un alt selector DOM care obține un element HTML cu id-ul "btn". 
Acest element reprezintă un buton, iar atunci când este apăsat, va declanșa afișarea unui nou banc umoristic.

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";: 
Acesta este URL-ul către sursa API de bancuri umoristice. 
API-ul este configurat să returneze un singur banc de orice tip, cu excepția celor care intră sub diverse categorii "blacklist" precum "nsfw", "religious", "political", "racist", "sexist" sau "explicit".

let getJoke = () => { ... }: 
Aceasta este o funcție numită getJoke care va fi apelată atunci când utilizatorul apasă butonul sau când pagina se încarcă inițial. 

În interiorul funcției:
jokeContainer.classList.remove("fade");: 
Această linie elimină o clasă CSS numită "fade" de la elementul cu id-ul "joke". 
Aceasta poate fi folosită pentru animații sau tranzacții de afișare.

fetch(url) ...: 
Această linie utilizează funcția fetch pentru a efectua o cerere HTTP GET către URL-ul specificat (url) pentru a obține un banc umoristic din sursa API.

.then(data => data.json()) ...: 
După ce cererea HTTP este completă, acest .then() primește răspunsul în format JSON și îl parsează într-un obiect JavaScript.

.then(item => { ... }): 
Acesta este un alt .then() care primește obiectul JavaScript rezultat din parsare. 
În acest bloc, codul preia bancul umoristic din obiect și îl afișează în interiorul elementului cu id-ul "joke" ca text.

jokeContainer.classList.add("fade");: 
Acesta este un alt pas care adaugă înapoi clasa CSS "fade" elementului cu id-ul "joke". 
Aceasta poate fi folosită pentru a aplica o animație de afișare a bancului.

btn.addEventListener("click", getJoke);: 
Acesta este un eveniment de ascultare care așteaptă ca utilizatorul să apese butonul cu id-ul "btn". 
Când butonul este apăsat, funcția getJoke este apelată pentru a obține și afișa un banc umoristic.

getJoke();: 
Această linie apelează funcția getJoke() în momentul în care pagina se încarcă inițial, astfel încât un banc umoristic să fie afișat imediat utilizatorului.

În rezumat, acest cod folosește fetch pentru a obține un banc umoristic de la o sursă API și apoi îl afișează într-un element HTML 
atunci când utilizatorul apasă pe un buton sau când pagina se încarcă.*/
