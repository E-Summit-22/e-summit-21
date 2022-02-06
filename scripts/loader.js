const banner = document.getElementsByClassName("banner")[0];
const blocks = document.getElementsByClassName("blocks");

var body = document.getElementsByTagName("BODY")[0];
body.style.overflow = "hidden";

for (var i = 1; i < 400; i++) {
  banner.innerHTML += `<div class='blocks'></div>`;
  const duration = Math.random() * 4;

  blocks[i].style.animationDuration = duration + "s";
}

const doThat = (el) => {
  for (var j = 0; j <= el; j++) {
    if (el + j * 19 < 400)
      blocks[el + j * 19].style.animation = "animate2 0.5s ease-in-out both";
  }
};

setTimeout(() => {
  var x = 0;
  document.getElementById("main").style.backgroundImage = "none";
  document.getElementById("main").style.backgroundColor = "transparent";
  setTimeout(() => {
    document.getElementById("main").style.display = "none";
  }, 3000);

  let timer = setInterval(() => {
    doThat(x++);
    if (x == 40) {
      clearInterval(timer);
      body.style.overflow = "auto";
    }
  }, 50);
}, 7000);
