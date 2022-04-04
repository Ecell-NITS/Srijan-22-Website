let eventList = document.getElementById('event-scroll-container');
let eventLogo = document.getElementById('event-logo');
let eventIcon = document.getElementById("event-icon")
var query1 = window.matchMedia("(max-width:730px)");
var query2 = window.matchMedia("(max-width:500px)");
window.addEventListener('scroll', (e) => {
    console.log("heu")
    let eventList = document.getElementById('event-scroll-container');
    //   var x = eventList.scrollLeft;
    let x = window.scrollY;
    var y = eventList.scrollTop;
    console.log(x);
    //   console.log(y);
    //   if(window.matchMedia("(max-width: 730px)").matches) {
    //     if(x<3022){
    //         eventLogo.src='images/technerd.svg'
    //     }
    //     if(x>=3022 && x<3475.3){
    //         eventLogo.src='images/en auction.svg'
    //     }
    //     if(x>=3475.3 && x<3850.6){
    //         eventLogo.src='images/pitch.svg'
    //     }
    //     if(x>=3850.6 && x<4264){
    //         eventLogo.src='images/pannel discussion.svg'
    //     }
    //     if(x>=4264){
    //         eventLogo.src='images/idea exchange.svg'
    //     }

    // }
    // else 
    // if(query2.matches){
    //     if(x<2714){
    //         eventLogo.src='images/technerd.png'
    //     }
    //     if(x>=2714 && x<3008){
    //         eventLogo.src='images/en auction.png'
    //     }
    //     if(x>=3008 && x<3268.6){
    //         eventLogo.src='images/pitch.png'
    //     }
    //     if(x>=3268.6 && x<3554.6){
    //         eventLogo.src='images/pannel discussion.png'
    //     }
    //     if(x>=3554.6){
    //         eventLogo.src='images/idea exchange.png'
    //     }
    // }
    if (query2.matches) {
        if (x < 2890.6) {
            eventLogo.src = 'images/pitch.png'
        }
        if (x >= 2890.6 && x < 3176.6) {
            eventLogo.src = 'images/technerd.png'
        }
        if (x >= 3176.6 && x < 3816) {
            eventLogo.src = 'images/pitch.png'
        }
        if (x >= 3523.3 && x < 3816) {
            eventLogo.src = 'images/idea exchange.png'
        }
        if (x >= 3816 && x < 4111) {
            eventLogo.src = 'images/en auction.png'
        }
        if (x >= 4111) {
            eventLogo.src = 'images/pitch.png'
        }
    }
    else {

        if (x < 2777) {
            eventLogo.src = 'images/pitch.png'
        }
        if (x >= 2777 && x < 3512.6) {
            eventLogo.src = 'images/technerd.png'
        }
        if (x >= 3152.6 && x < 3513.3) {
            eventLogo.src = 'images/pitch.png'
        }
        if (x >= 3513.3 && x < 3882.6) {
            eventLogo.src = 'images/idea exchange.png'
        }
        if (x >= 3882.6 && x < 4244.6) {
            eventLogo.src = 'images/en auction.png'
        }
        if (x >= 4244.6) {
            eventLogo.src = 'images/pitch.png'
        }

    }


})