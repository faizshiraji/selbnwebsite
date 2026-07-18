// Press & Media Slider Script

document.addEventListener("DOMContentLoaded", function () {

    const pressSlider = document.getElementById("pressSlider");
    let scrollAmount = 0;

    window.slidePress = function (direction) {
        if (!pressSlider) return;

        const card = pressSlider.querySelector(".press-card");
        if (!card) return;

        const gap = 25; // must match CSS gap
        const cardWidth = card.offsetWidth + gap;

        scrollAmount += cardWidth * direction;

        // prevent over scroll (optional safety)
        if (scrollAmount < 0) scrollAmount = 0;

        pressSlider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    };

});
