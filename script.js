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

function openSoundCloud() {
    window.open("https://soundcloud.com/mrtzmxmln");
}

function openInstagram() {
    window.open("https://www.instagram.com");
}

function openPiknic() {
    window.open("http://mrtzmxmln.github.io/risingufo");
}

window.addEventListener("scroll", fadeRight);
window.addEventListener("scroll", fadeLeft);
fadeShort();
fadeIntro();