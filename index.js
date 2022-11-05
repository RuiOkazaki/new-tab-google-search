const isOsDark = window.matchMedia("(prefers-color-scheme: dark)");
const modeChangeButton = document.getElementById("modeChangeButton");
const darkModeOn = () => {
  document.documentElement.classList.add("dark");
  modeChangeButton.checked = true;
  sessionStorage.setItem("isOsDark", true);
};
const darkModeOff = () => {
  document.documentElement.classList.remove("dark");
  modeChangeButton.checked = false;
  sessionStorage.setItem("isOsDark", false);
};
const listener = (e) => (e.matches ? darkModeOn() : darkModeOff());
isOsDark.addEventListener("change", listener);
window.addEventListener("load", () => {
  if (sessionStorage.getItem("isOsDark") === undefined) listener(isOsDark);
  if (Boolean(sessionStorage.getItem("isOsDark"))) {
    darkModeOn();
  } else {
    darkModeOff();
  }
});
modeChangeButton.addEventListener("change", (e) => {
  e.target.checked ? darkModeOn() : darkModeOff();
});
