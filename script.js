const inputElement = document.getElementById("seed");
const imageElement = document.getElementById("avatar-image");

inputElement.focus();

function generateAvatar() {
  let input = inputElement.value;

  if (
    input === null ||
    input === undefined ||
    input.replaceAll(/\s/g, "") === ""
  ) {
    imageElement.src = "./template.png";
    return;
  }

  fetch("http://44.204.196.91/avatar?input=" + input, {referrerPolicy: "unsafe-url"})
    .then((response) => response.text().then((text) => {
      imageElement.src = "data:image/png;base64, " + text;
    })
  );
}
