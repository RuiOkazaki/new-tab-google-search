const isOsDark = window.matchMedia("(prefers-color-scheme: dark)");
const modeChangeButton = document.getElementById("modeChangeButton");
const darkModeOn = () => {
  document.documentElement.classList.add("dark");
  modeChangeButton.checked = true;
  chrome.storage.local.set({ isOsDarkState: true });
};
const darkModeOff = () => {
  document.documentElement.classList.remove("dark");
  modeChangeButton.checked = false;
  chrome.storage.local.set({ isOsDarkState: false });
};
const listener = (e) => (e.matches ? darkModeOn() : darkModeOff());
isOsDark.addEventListener("change", listener);
window.addEventListener("load", async () => {
  const { isOsDarkState } = await chrome.storage.local.get();
  if (isOsDarkState === undefined) listener(isOsDark);
  if (isOsDarkState) {
    darkModeOn();
  } else {
    darkModeOff();
  }
});
modeChangeButton.addEventListener("change", (e) => {
  e.target.checked ? darkModeOn() : darkModeOff();
});
