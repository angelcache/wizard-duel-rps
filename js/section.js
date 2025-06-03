sectionChange = document.querySelectorAll("a");

sectionChange.forEach((section) => {
  section.addEventListener("click", playChangeEffect);
})

function playChangeEffect() {
  const audio = new Audio("audio/scroll.mp3");
  audio.play();
}