document.addEventListener("scroll", scrollChange);

const scrollDownButton = document.getElementById("scrollDownButton");

window.addEventListener("DOMContentLoaded", function () {
  scrollDownButton.href = "javascript:scrollWin(0,650)";
});

function scrollWin(x, y) {
  window.scrollBy(x, y);
}

const Linkedin = document.getElementById("Linkedin");
const Facebook = document.getElementById("Facebook");
const Instagram = document.getElementById("Instagram");
const VerticalLine = document.getElementById("VerticalLine");

function scrollChange() {
  var x = document.documentElement.scrollTop;
  var y = screen.width;
  console.log(x);

  function InitialState() {
    scrollDownButton.innerHTML =
      "SCROLL DOWN <i class='fa-solid fa-arrow-right-long' style='width: 45px'></i>";
      scrollDownButton.href = "javascript:scrollWin(0,650)";
    scrollDownButton.style.color = "white";
    scrollDownButton.target = "";

    
  }

  function MobileInitialState() {
    scrollDownButton.innerHTML =
      "SCROLL DOWN <i class='fa-solid fa-arrow-right-long' style='width: 45px'></i>";
      scrollDownButton.href = "javascript:scrollWin(0,836)";
    scrollDownButton.style.color = "white";
    scrollDownButton.target = "";

   
  }

  function MobileInitialState2(){
    Linkedin.classList.remove("linkedin-1");
    Facebook.classList.remove("facebook-1");
    Instagram.classList.remove("instagram-1");

    VerticalLine.classList.add("leftVerticalLine");
    VerticalLine.classList.remove("verticalLine");
  }

  function changeColorToBlack() {
    scrollDownButton.innerHTML =
      "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
    scrollDownButton.href = "/events";
    scrollDownButton.style.color = "black";
    scrollDownButton.target = "_blank";

    Linkedin.classList.add("linkedin-1");
    Facebook.classList.add("facebook-1");
    Instagram.classList.add("instagram-1");

    VerticalLine.classList.remove("leftVerticalLine");
    VerticalLine.classList.add("verticalLine");
  }

  function changeColorToWhite() {
    scrollDownButton.innerHTML =
      "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
    scrollDownButton.href = "/events";
    scrollDownButton.style.color = "white";

    Linkedin.classList.remove("linkedin-1");
    Facebook.classList.remove("facebook-1");
    Instagram.classList.remove("instagram-1");

    VerticalLine.classList.add("leftVerticalLine");
    VerticalLine.classList.remove("verticalLine");
  }

  function displayNone(){
    scrollDownButton.innerHTML=""
    scrollDownButton.href = "";
    scrollDownButton.style.color = "white";
  }

  function sMediaColorChange(){
    Linkedin.classList.add("linkedin-1");
    Facebook.classList.add("facebook-1");
    Instagram.classList.add("instagram-1");

    VerticalLine.classList.remove("leftVerticalLine");
    VerticalLine.classList.add("verticalLine");
  }

  function sMediaColorChange2(){
    Linkedin.classList.remove("linkedin-1");
    Facebook.classList.remove("facebook-1");
    Instagram.classList.remove("instagram-1");

    VerticalLine.classList.add("leftVerticalLine");
    VerticalLine.classList.remove("verticalLine");
  }

  //normal-view: breakpoints 364-2232-4380-5596 before announcement

  if (y > 500) {
    if ( x < 364) {
      InitialState();
      sMediaColorChange2();
    } else if (x > 364 && x < 2232) {
      displayNone();
      sMediaColorChange();
    } else if (x > 2232 && x < 5596) {
      displayNone();
      sMediaColorChange2();
    // } else if (x > 5500 && x < 5596) {
    //   displayNone();
    //   sMediaColorChange();
    } else if (x > 5596 && x<7500) {
      displayNone();
      sMediaColorChange();
      // sMediaColorChange2()
    }
    else if(x>7500){
      displayNone();
      sMediaColorChange2();
    }
  }

  //mobile-view : breakpoints 243-2171-4044-5173 before announcement

  if (y < 500) {
    if (x < 243) {
      InitialState();
      sMediaColorChange2(); //white icons
    } else if (x > 243 && x < 2171) {
      displayNone();
      sMediaColorChange(); //black icons
    } else if (x > 2171 && x < 5400) {
      displayNone();
      sMediaColorChange2(); //white icons
    } else if (x > 5400 && x < 8306) {
      displayNone();
      sMediaColorChange(); //black icons
    } else if (x > 8306) {
      displayNone();
      sMediaColorChange2(); //white icons
    }
  }

  // if (y > 500) {
  //   if (x >= 0 && x < 387) {
  //     InitialState();
  //   } else if (x > 387 && x < 2084) {
  //     changeColorToBlack();
  //   } else if (x > 2084 && x < 5308) {
  //     changeColorToWhite();
  //   } else if (x > 5308 && x < 5788) {
  //     changeColorToBlack();
  //   } else if (x > 5788) {
  //     changeColorToWhite();
  //   }
  // }

  // if (y < 500) {
  //   if (x < 348) {
  //     MobileInitialState();
  //   } else if (x > 348 && x < 1926) {
  //     changeColorToBlack();
  //   } else if (x > 1926 && x < 6222) {
  //     changeColorToWhite();
  //   } else if (x > 6222 && x < 6830) {
  //     changeColorToBlack();
  //   } else if (x > 6830) {
  //     changeColorToWhite();
  //   }
  // }

}
