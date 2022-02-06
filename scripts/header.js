// document.addEventListener("DOMContentLoaded", function () {
//   var counter = 0, // to keep track of current slide
//     $items = document.querySelectorAll(".diy-slideshow figure"), // a collection of all of the slides, caching for performance
//     numItems = $items.length; // total number of slides

//   // this function is what cycles the slides, showing the next or previous slide and hiding all the others
//   var showCurrent = function () {
//     var itemToShow = Math.abs(counter % numItems); // uses remainder (aka modulo) operator to get the actual index of the element to show

//     [].forEach.call($items, function (el) {
//       el.classList.remove("show");
//     });

//     // add .show to the one item that's supposed to have it
//     $items[itemToShow].classList.add("show");
//   };

//   // add click events to prev & next buttons
//   setInterval(() => {
//     counter++;
//     showCurrent();
//   }, 4000 + Math.random() * 5000);
// });
