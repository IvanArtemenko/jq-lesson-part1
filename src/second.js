jQuery(function ($) {
    var $slideMe = $("#slide-me");
    var $mouseOver = $("#mouse-over");
    var counter = 0;
    $mouseOver.text(counter);

    $slideMe.on("click", function () {
        $(".slide-text").slideToggle("slow");
    });

    $mouseOver.on("mouseover", function () {
        counter >= 20 ? $slideMe.trigger("click") && alert("20 is max") : counter++;

        $(this).text("Entered: " + counter + " times");
    });


});