const changeNavbar = (flag) => {
  // console.log("here");
  var nav = document.querySelector("nav");
  var reqHt = nav.offsetHeight;
  var navarray = document.getElementsByClassName("nav-item");

  var mainNav = document.querySelector(".main-nav");
  var navBarNav = document.querySelector(".navbar-nav");
  var navreg = document.querySelector(".nav-register");

  // var regbtn = document.querySelector(".header-text").querySelector(".btn");
  if (window.pageYOffset < reqHt) {
    nav.setAttribute("style", "background:transparent !important;");

    var i;
    var rate = 0.25;

    if (navreg) {
      navreg.remove();
    }
    for (i = 5; i >= 0; i--) {
      navarray[i].setAttribute(
        "style",
        "transform:translateX(0vw); transition-delay:" + rate + "s"
      );
      rate -= 0.05;
    }

    //   regbtn.setAttribute("style", "opacity:1;display:block");
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
      for (var i = 5; i >= 0; i--) {
        b += navarray[i].offsetWidth;
      }

      let c = node.offsetWidth;

      let w = (a - b) / 2 - c;

      var rate = 0;

      for (var i = 5; i >= 0; i--) {
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
