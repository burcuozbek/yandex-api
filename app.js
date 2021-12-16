//Prototype, Ajax, Callback

eventListeners();

function eventListeners() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);
  //Change
  document.getElementById("language").onchange = function () {
    //Arayüz İşlemleri
  };
}
const translate = new Translate(
  document.getElementById("word").value,
  document.getElementById("language").value
);
function translateWord(e) {
  translate.changeParameters(
    document.getElementById("word").value,
    document.getElementById("language").value
  );
  translate.translateWord(function (err, response) {
    if (err) {
      //Error
      console.log(err);
    } else {
      console.log(response);
    }
  });
  e.preventDefault();
}
