const elevate = (el) => {
  var element = document.getElementById(el.id);
  element.classList.add("shadow");

  var coverEl = document.querySelector(`#${el.id} #event-rows #c-cover`);
  coverEl.style.color = "red";

  coverEl.classList.remove("col-12");
  coverEl.classList.add("col-5");
};

const lower = (el) => {
  var element = document.getElementById(el.id);
  element.classList.remove("shadow");

  var coverEl = document.querySelector(`#${el.id} #event-rows #c-cover`);

  coverEl.classList.remove("col-5");
  coverEl.classList.add("col-12");
};
