$(document).ready(function() {
    const images = [
        "img/img1.jpg",
        "img/img2.jpeg",
        "img/img3.jpeg"
    ];
    let currentIndex = 0;

    $("#heroImage").on("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        const newSrc = images[currentIndex];
        $(this).fadeOut(200, function() {
            // Change the image source after fading out
            $(this).attr("src", newSrc);
            $(this).fadeIn(200);
        });
    });
});