function UI() {
  this.outputImage = document.getElementById("output-image");
  this.outputLanguage = document.getElementById("lang");
  this.outputWord = document.getElementById("output-word");

  this.languageList = document.getElementById("language");
}
UI.prototype.changeUI = function () {
  //Arayüz Değiştirme
  this.outputImage.src = `images/${this.languageList.value}.png`;
  this.outputLanguage.innerHTML =
    this.languageList.options[this.languageList.selectedIndex].textContent;
};
UI.prototype.displayTranslate = function (word) {
  this.outputWord.textContent = word;
};
