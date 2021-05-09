// function getWord() {
//   console.log("HEllo");
//   //   let words = ["안녕하세요", "아니요", "네"];
//   let words = ["1", "2", "3"];

//   let randWord = words[Math.floor(Math.random() * words.length)];
//   document.getElementById("showWord").innerHTML = randWord;
// }
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("getWord");

  button.addEventListener("click", function () {
    let words = ["안녕하세요", "아니요", "네"];
    let randWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("showWord").innerHTML = randWord;
  });
});
