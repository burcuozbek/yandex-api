//Prototype, Ajax, Callback

eventListeners();

function eventListeners() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);
}
function translateWord(e) {
  e.preventDefault();
}
