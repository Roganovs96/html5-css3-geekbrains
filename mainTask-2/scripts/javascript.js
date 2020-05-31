const sliderLeft = document.querySelector(".main-header-middle-button-left");
const sliderRight = document.querySelector(".main-header-middle-button-right");
const backgroundSlider = document.querySelector(".main-header");
const backgroundArray = {
    url: [
        "background-image: url(img/photo.png)",
        "background-image: url(https://klike.net/uploads/posts/2019-11/1572612050_1.jpg",
        "background-image: url(https://oboi.ws/wallpapers/17_12401_oboi_zelenyj_firewatch_1920x1080.jpg)",
        "background-image:url(https://oboi.ws/wallpapers/17_12338_oboi_firewatch_1920x1080.jpg)",
    ],
};

let i = 0;

sliderLeft.addEventListener("click", function() {
    if (backgroundSlider.getAttribute("style") == backgroundArray.url[0]) {
        i = backgroundArray.url.length - 1;
        backgroundSlider.setAttribute("style", backgroundArray.url[i]);


    } else {
        i--;
        backgroundSlider.setAttribute("style", backgroundArray.url[i]);
    }
});

sliderRight.addEventListener("click", function() {
    if (backgroundSlider.getAttribute("style") == backgroundArray.url[0]) {
        i++;
        backgroundSlider.setAttribute("style", backgroundArray.url[i]);
    } else if (
        backgroundSlider.getAttribute("style") ==
        backgroundArray.url[backgroundArray.url.length - 1]
    ) {
        i = 0;
        backgroundSlider.setAttribute("style", backgroundArray.url[i]);
    } else {
        i++;
        backgroundSlider.setAttribute("style", backgroundArray.url[i]);
    }
});