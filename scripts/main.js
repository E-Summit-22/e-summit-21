const changeUrl = () => {
  neonAnimation();

  if (document.querySelector("#aboutus").getBoundingClientRect().top <= 100) {
    document.querySelector(".icon").style.display = "block";
  }

  if (userScroll) {
    const elements = [
      "header",
      "aboutus",
      "theme",
      "speakers",
      "events",
      "footer",
    ];

    let url = window.location.href;
    let flag = url.split("#").length;
    if (flag === 2) url = url.split("#")[0];

    for (var i = 0; i < elements.length - 1; i++) {
      if (
        document.getElementById(elements[i]).getBoundingClientRect().top <=
          300 &&
        document.getElementById(elements[i + 1]).getBoundingClientRect().top >
          300
      ) {
        window.history.pushState({}, "", url + "#" + elements[i]);
        break;
      }
    }
  }
};

const mimicScrollspy = () => {
  const elements = [
    "header",
    "aboutus",
    "theme",
    "speakers",
    "events",
    "footer",
  ];
  const el = document.getElementsByClassName("nav-link");
  for (var i = 0; i < elements.length - 1; i++) {
    let req = null;
    
    if (el[i].classList.contains("active")) req = el[i].classList;
    if (
      document.getElementById(elements[i]).getBoundingClientRect().top <= 300 &&
      document.getElementById(elements[i + 1]).getBoundingClientRect().top > 300
    ) {
      if (!req) el[i].classList.add("active");
    } else if (req) req.remove("active");
  }
};

const copyToClipboard = (event) => {
  navigator.clipboard.writeText(event.innerText);
};

window.addEventListener("popstate", function (event) {
  // Log the state data to the console
  if (timer) clearTimeout(timer);
  userScroll = false;

  timer = setTimeout(() => {
    userScroll = true;
    changeUrl();
  }, 1000);
  // console.log(window.location.href);
  // console.log(event);
});

let userScroll = true;

let timer = null;

let count = 1;

var images = [];

//to keep images preloaded
// for (var i = 0; i < 7; i++) {
//   images[i] = new Image();
//   images[i].src = "./img/header/" + (i + 1) + ".jpg";
// }

//to change background image of header
// setInterval(() => {
//   if (count >= 7) count = 1;
//   else count++;
//   document.querySelector(".header-content").style.backgroundImage =
//     'url("./img/header/' + count + '.jpg")';
// }, 5000);

window.addEventListener("resize", () => {
  changeNavbar(1);
});

const neonAnimation = () => {
  if (document.querySelector("#aboutus").getBoundingClientRect().top <= 100) {
    document.querySelector(".icon").style.display = "block";
  }
};

const changeNavbar = (flag) => {
  var nav = document.querySelector("nav");
  var reqHt = 4 * nav.offsetHeight;
  var navarray = document.getElementsByClassName("nav-item");

  var mainNav = document.querySelector(".main-nav");
  var navBarNav = document.querySelector(".navbar-nav");
  var navreg = document.querySelector(".nav-register");

  var regbtn = document.querySelector(".header-text").querySelector(".btn");
  if (window.pageYOffset < reqHt) {
    nav.setAttribute("style", "background:transparent !important;");

    var i;
    var rate = 0.3;

    if (navreg) {
      navreg.remove();
    }
    for (i = 6; i >= 0; i--) {
      navarray[i].setAttribute(
        "style",
        "transform:translateX(0vw); transition-delay:" + rate + "s"
      );
      rate -= 0.05;
    }

    regbtn.setAttribute(
      "style",
      "opacity:1;display:block;position:relative;width:200px"
    );
  } else {
    if (navreg == null || flag === 1) {
      if (flag === 0) {
        var node = document.createElement("LI");
        node.classList.add("nav-register");

        var nodeC = document.createElement("A");
        nodeC.classList.add("btn");

        nodeC.setAttribute("href", "https://dare2compete.com/f/e-summit-2021-indian-institute-of-technology-iit-bhubaneswar-9856");
        nodeC.setAttribute("target","_blank");
        var textnode = document.createTextNode("Register");
        nodeC.appendChild(textnode);
        node.appendChild(nodeC);
        navBarNav.appendChild(node);
        // node.setAttribute("style", "visibility: visible;opacity:1");
      } else {
        node = document.querySelector(".nav-register");
      }

      nav.setAttribute(
        "style",
        "background:url(images/ad47af29ad50df1477b9413f9d521db0.jpg) \
        !important; box-shadow: rgb(0, 0, 0) 2px 2px 25px;"
      );

      let a = nav.offsetWidth;

      let b = 0;
      for (var i = 6; i >= 0; i--) {
        b += navarray[i].offsetWidth;
      }

      let c = node.offsetWidth;

      let w = (a - b) / 2 - c;

      var rate = 0;

      for (var i = 6; i >= 0; i--) {
        navarray[i].setAttribute(
          "style",
          "transform:translateX(" + w + "px); transition-delay:" + rate + "s"
        );
        rate += 0.05;
      }
    }
    // regbtn.setAttribute("style", "opacity:0;display:none");
  }
};

const clsNav = () => {
  var sidebar = document.querySelector(".sidebar");
  var opnBtn = document.querySelector(".opnbtn");
  opnBtn.setAttribute("style", "visibility: visible");
  sidebar.setAttribute("style", "width: 0vw");
};

const opnNav = () => {
  var sidebar = document.querySelector(".sidebar");
  var opnBtn = document.querySelector(".opnbtn");
  opnBtn.setAttribute("style", "visibility: hidden");
  sidebar.setAttribute("style", "width: 100vw");
};

//    ---changing text according to section in navbar button----
// const textChange=()=>{
//   if(window.innerWidth <= 768)
//   {
//     var activeSection=document.querySelector(".sidebar .active").innerHTML;
//     var btn = document.querySelector("button.opnbtn span").innerHTML=activeSection;
//   }
// }
