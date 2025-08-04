let header = document.querySelector(".header");
let headerHover = document.querySelector(".headerHover");
let myimage = document.querySelector(".tanishqIMG");
let basicBio = document.querySelector(".basic-bio");

// second area import

let secondArea = document.querySelector(".second-area");
let secHeader = document.querySelector(".Sec-area-header");
let secProjects = document.querySelector(".projects");
let LParea = document.querySelector(".left-project-area");
let RParea = document.querySelector(".right-project-area");

// third area import 

let thirdArea = document.querySelector(".third-area");
let mySurrounding = document.querySelector(".my-surrounding");
let TAbox1 = document.querySelector(".TAbox-1");
let TAbox2 = document.querySelector(".TAbox-2");
let TAbox3 = document.querySelector(".TAbox-3");

// fourth area import

let fourthArea = document.querySelector(".fourth-area");
let faMainLine = document.querySelector(".FA-main-line");
let faSecLine = document.querySelector(".FA-sec-line");
let faSurrounding = document.querySelector("#surrounding-1");
let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");

// fifth area

let fifthArea = document.querySelector(".fifth-area");

// first area

headerHover.addEventListener("mouseenter", () => {
    header.style.top = '0%';
    headerHover.style.width = '1%';
    headerHover.style.left = '-15%';
    console.log('hovered');
});

header.addEventListener("mouseleave", () => {
    header.style.top = '-100%';
    headerHover.style.left = '0%';
    headerHover.style.width = '100%';
    console.log('unhovered');
});


// second area

window.addEventListener("scroll", () => {
    let secondAreaTop = secondArea.getBoundingClientRect().top;

    if (secondAreaTop <= 400) {
        header.style.opacity = '0%';
        secHeader.style.left = '0';
        myimage.style.right = '-50%'
        basicBio.style.opacity = '0%'
        headerHover.style.opacity = '0%';
    } else {
        header.style.opacity = '100%';
        secHeader.style.left = '100%';
        myimage.style.right = '10%'
        basicBio.style.opacity = '100%'
        headerHover.style.opacity = '100%';
    }
});



// third area 

window.addEventListener("scroll", () => {
    let thirdAreaTop = thirdArea.getBoundingClientRect().top;

    if (thirdAreaTop <= 600) {
        secProjects.style.opacity = '0%'
    } else {
        secProjects.style.opacity = '100%'
    }
});

// fourth area

window.addEventListener("scroll", () => {
    let fourthAreaTop = fourthArea.getBoundingClientRect().top;

    if (fourthAreaTop <= 600) {
        thirdArea.style.opacity = '0%'
        TAbox1.style.top = '-100%'
        TAbox2.style.left = '100%'
        TAbox3.style.bottom = '-100%'
        mySurrounding.style.bottom = '-100%'
    } else {
        thirdArea.style.opacity = '100%'
        TAbox1.style.top = '-0%'
        TAbox2.style.left = '0%'
        TAbox3.style.bottom = '-0%'
        mySurrounding.style.bottom = '0%'
    }
});

// fifth area

window.addEventListener("scroll", () => {
    let fifthAreaTop = fifthArea.getBoundingClientRect().top;

    if (fifthAreaTop <= 500) {
        fourthArea.style.opacity = '0%'
        box1.style.bottom = '-100%'
        box2.style.bottom = '100%'
        box3.style.bottom = '-100%'
    } else {
        fourthArea.style.opacity = '100%'
        box1.style.bottom = '0%'
        box2.style.bottom = '0%'
        box3.style.bottom = '0%'
    }
});
