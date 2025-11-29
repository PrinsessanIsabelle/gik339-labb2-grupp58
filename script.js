/* hämtar elementet med hjäp av getElementById och sparar det i variabeln checkbox */
const checkbox =  document.getElementById("divStyle");
console.log(checkbox);

 /* hämtar elementet med hjäp av getElementsByClassName och sparar det i variabeln textfields */
const textfields = document.getElementsByClassName("textfield");
console.log(textfields);

/*  hämtar elementet med hjäp av querySelector och sparar det i variabeln button */
const button = document.querySelector("button");
console.log(button); 

/*  hämtar elementet med hjäp av getElementsByClassName och sparar det i variabeln container */
const container = document.getElementsByClassName("container")[0];
console.log(container); 


 /* skapar en funktion som tar emot event */
function Userinput(e){
    
   const name = e.target.name;// hämtar namnet på det element som triggat eventet och sparar det i variabeln name
   console.log(name);

  if(name === "content") // kollar om namnet är lika med content
 {

   container.innerHTML = e.target.value // sätter innehållet i container och innerHTML till värdet av det element som triggat eventet

 }
}






