function generateAvatar() {
  let input = document.getElementById("seed").value;

  if (
    input === null ||
    input === undefined ||
    input.replaceAll(/\s/g, "") === ""
  ) {
    document.getElementById("avatar-image").src = "./template.png";
    return;
  }

  fetch("https://localhost:5001/Avatar?input=" + input).then((response) =>
    response.text().then((text) => {
      document.getElementById("avatar-image").src =
        "data:image/png;base64, " + text;
    })
  );
}
