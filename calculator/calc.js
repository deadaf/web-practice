document.getElementById("answer").readOnly = true; //set this attribute in Html file

let screenValue = "";
buttons = document.querySelectorAll("button");

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "=") {
      try {
        screenValue = eval(screenValue);
        document.getElementById("answer").value = screenValue;
      } catch (err) {
        console.log("error");
        document.getElementsById("errorMsg").innerHTML = err;
      }
    } else if (buttonText == "C") {
      screenValue = "";
      document.getElementById("answer").value = screenValue;
    } else {
      screenValue += buttonText;
      document.getElementById("answer").value = screenValue;
    }
  });
}
