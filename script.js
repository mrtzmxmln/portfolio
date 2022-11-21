/*-- ANIMATIONS --*/
function fadeShort() {
    var fadeShort = document.querySelector(".fadeShort");
    
    setTimeout(function() {
        fadeShort.classList.add("active");
    }, 500);
}

function fadeIntro() {
    var fadeIntro = document.querySelector(".fadeIntro");

    setTimeout(function() {
        fadeIntro.classList.add("active");
    }, 1000);
}

function fadeRight() {
    var fadeRight = document.querySelectorAll(".fadeRight");

    for (var i = 0; i < fadeRight.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = fadeRight[i].getBoundingClientRect().top;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
            fadeRight[i].classList.add("active");
        } else {
            fadeRight[i].classList.remove("active");
        }
    }
}

function fadeLeft() {
    var fadeLeft = document.querySelectorAll(".fadeLeft");

    for (var i = 0; i < fadeLeft.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = fadeLeft[i].getBoundingClientRect().top;
        var elementVisible = 200;
        
        if (elementTop < windowHeight - elementVisible) {
            fadeLeft[i].classList.add("active");
        } else {
            fadeLeft[i].classList.remove("active");
        }
    }
}

function checkSidebar() {
    var sideBars = document.querySelectorAll=(".bar");
}

/*-- SCROLLS --*/
function scrollIntro() {
    
}

function scrollDiploma() {

}

function scrollEvent() {

}

function scrollWebDev() {

}

function scrollArtist() {
    
}

/*-- LINKS --*/
function openSoundCloud() {
    window.open("https://soundcloud.com/mrtzmxmln");
}

function openInstagram() {
    window.open("https://www.instagram.com");
}

function openFacebook() {
    window.open("https://facebook.com/mrtzmxmln")
}

function openResident() {
    window.open("https://ra.co/dj/moritzmaximilian");
}

function openPiknic() {
    window.open("http://mrtzmxmln.github.io/risingufo");
}

function openAcademy() {
    window.open("https://www.macromedia-ausbildung.de")
}

function openProject() {
    window.open("https://www.facebook.com/querdenkerduell");
}

function openUfo() {
    window.open("https://mrtzmxmln.github.io/risingufo")
}

function openLeni() {
    window.open("https://homebyleni.de");
}

function sendMail() {
    window.open("mailto:moritzmaximilian@gmx.net")
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/moritz-meyer-77562a231/");
}

function openXing() {
    window.open("https://www.xing.com/profile/Moritz_Meyer65/cv");
}

/*-- execute Script --*/
window.addEventListener("scroll", fadeRight);
window.addEventListener("scroll", fadeLeft);
fadeShort();
fadeIntro();