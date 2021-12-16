function Translate(word, language) {
  this.apikey =
    "trnsl.1.1.20211203T142821Z.649ffedd9a99867c.be13ecac98a6fbe9ba5caace330d702a678f65a5";
  this.word = word;
  this.language = language;

  //XHR Object

  this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
  //Ajax
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

  this.xhr.open("GET", endpoint);

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      //   console.log(JSON.parse(this.xhr.responseText).text[0]);
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];
      console.log(text);
      callback(null, text);
    } else {
      callback("Error", null);
    }
  };

  this.xhr.send();
};
Translate.prototype.changeParameters = function (newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
