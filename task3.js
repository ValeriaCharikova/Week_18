document.addEventListener("DOMContentLoaded", function (event) {
  let name = localStorage.getItem("name");
  if (name != null) {
    document.getElementById("author").value = name;
  }
});

function sendMessage(photo, author, comment) {
  document.getElementById(
    "chat"
  ).innerHTML += `<div>${photo}</div><span class="author">${author}:</span><span>${comment}</span></br>`;
}

function checkMessage() {
  let photo = document.getElementById("photo").value;
  let author = document.getElementById("author").value;
  let comment = document.getElementById("comment").value;

  if (localStorage.getItem("name") == null) {
    localStorage.setItem("name", author);
  }
  sendMessage(photo, author, comment);
}
