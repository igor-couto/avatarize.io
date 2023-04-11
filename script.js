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

  fetch("https://44.197.171.238/avatar?frame=true&background=true&input=" + input, {referrerPolicy: "unsafe-url"})
    .then((response) => response.blob())
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      imageElement.src = imageUrl;
  });
}
