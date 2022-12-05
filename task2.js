function changeColour() {
  switch (document.getElementById("theme").value) {
    case "light":
      document.body.style.background = "white";
      break;
    case "dark":
      document.body.style.background = "black";
      break;
    case "grey":
      document.body.style.background = "grey";
      break;
  }
}

let errors = [];

function checkValidity(input) {
  let validity = input.validity;

  const showErrorMessage = (el, message) => {
    let div = document.createElement("div");
    div.innerHTML = message;
    el.after(div);
    div.style.cssText = "color: red; padding: 5px 0 10px;";
    el.style.borderColor = "red";
  };

  if (validity.valueMissing) {
    showErrorMessage(input, "Поле не заполнено");
  }
  if (!validity.patternMismatch) {
    showErrorMessage(input, "Неверный формат заполнения");
  }
  if (validity.rangeUnderflow) {
    let min = getAttributeValue(input, "min");
    showErrorMessage(
      input,
      "Минимальное значение не может быть меньше чем " + min
    );
  }
}

function checkAll() {
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    checkValidity(input);
  }
}
