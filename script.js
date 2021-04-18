const inputElement = document.getElementById("input");
const imageElement = document.getElementById("avatar-image");
const settingsButton = document.getElementById("settings-button");
const settingSection = document.getElementById("settings-section");
let isSettingsShowing = false;

const sizeElement = document.getElementById("size");

const maleElement = document.getElementById("male");
const femaleElement = document.getElementById("female");

const backgroundElement = document.getElementById("background");
const frameElement = document.getElementById("frame");
const gradientElement = document.getElementById("gradient");
const vignetteElement = document.getElementById("vignette");

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

  fetch("https://localhost:5001/Avatar?input=" + input).then((response) =>
    response.text().then((text) => {
      imageElement.src = "data:image/png;base64, " + text;
    })
  );
}

function SettingsClick() {
  if (isSettingsShowing) {
    settingsButton.src = "./settings-button-up.png";
    settingSection.style.display = "none";
  } else {
    settingsButton.src = "./settings-button-down.png";
    settingSection.style.display = "block";
  }
  isSettingsShowing = !isSettingsShowing;
}

function BackgroundCheckboxClick() {
  frameElement.value = false;
  gradientElement.value = false;
  vignetteElement.value = false;
}
