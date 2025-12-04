document.body.style.backgroundImage =
  "url( https://i.ibb.co/HD599j46/pngtree-seamless-pattern-of-fluffy-white-clouds-in-a-bright-blue-sky-image-17370889.jpg)";
document.body.style.backgroundSize = "auto"; // ingen strech
document.body.style.backgroundRepeat = "repeat"; // upprepning
document.body.style.backgroundAttachment = "fixed"; // gör att molnen ligger stilla vid scroll

/* hämtar elementet med hjäp av getElementById och sparar det i variabeln checkbox */
const checkbox = document.getElementById("divStyle");
console.log(checkbox);

/* hämtar elementet med hjäp av getElementsByClassName och sparar det i variabeln textfields */
const textfields = document.querySelectorAll(".textfield");
console.log(textfields);

/*  hämtar elementet med hjäp av querySelector och sparar det i variabeln button */
const button = document.querySelector("button");
console.log(button);

/*  hämtar elementet med hjäp av getElementsByClassName och sparar det i variabeln container */
const container = document.getElementsByClassName("container")[0];
console.log(container);

/* Uppgift 5 */
/* skapar en funktion som tar emot event */
function userInput(e) {
  const name = e.target.name; // hämtar namnet på det element som triggat eventet och sparar det i variabeln name
  console.log(name); //loggar

  if (name === "content") {
    // kollar om namnet är lika med content
    container.innerHTML = e.target.value; // sätter innehållet i container och innerHTML till värdet av det element som triggat eventet
  }
}

/* Uppgift 6 */
checkbox.addEventListener("change", function (e) {
  const bcColor = document.getElementById("color").value;
  container.style.backgroundColor = bcColor;
});

button.addEventListener("click", function (e) {
  container.remove();
});

textfields.forEach((field) => {
  field.addEventListener("input", userInput);
});

button.addEventListener("click", function (e) {
  container.remove();
});








