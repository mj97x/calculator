let equal_pressed = 0;
/////// Anweißung für alle außer C und DEL
let button_input = document.querySelectorAll(".input-button");
/////// Anweißung für input, equal, clear, earse
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
window.onload = () => {
  input.value = "";
};
/////// forEach für jede Class
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    /////// Wert jedes buttons anzeigen
    input.value += button_class.value;
  });
});
/////// Lösung beim Drücken auf =
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    /////// Den Wert berechnen
    let solution = eval(inp_val);
    /////// Wahr bei natürlichen Zahlen
    /////// Falsch bei dezimal Zahlen
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
/////// Bei ungültier Eingabe   
    alert("Invalid Input");
  }
});
/////// Alles löschen        
clear.addEventListener("click", () => {
  input.value = "";
});
/////// Letze Zahl löschen     
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});