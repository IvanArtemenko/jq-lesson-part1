jQuery(function ($) {

    var $addClassBtn = $("#add-class"),
        $removeClassBtn = $("#remove-class"),
        $toggleClassBtn = $("#toggle-class"),
        $getAttrBtn = $("#get-attr"),
        $setAttrBtn = $("#set-attr"),
        $clickAlertBtn = $("#click-alert"),
        $triggerAlertBtn = $("#trigger-alert"),
        $cloneThisBtn = $("#clone-this"),
        $closestElement = $("#closest-element"),
        $eachBtnText = $("#each-btn-text"),
        $findMe = $("#find-me"),
        $fadeInText = $("#fade-in-text"),
        $hiddenText = $(".hidden-text"),
        $visibleText = $(".visible-text"),
        $fadeOutText = $("#fade-out-text"),
        $hideText = $("#hide-text"),
        $showText = $("#show-text"),
        $dataAboutMe = $("#data-about-me");

    $addClassBtn.on("click", function () {
        $(this).addClass("btn-success");
    });

    $removeClassBtn.on("click", function () {
        $(this).removeClass("btn-primary");
    });

    $toggleClassBtn.on("click", function () {
        $(this).toggleClass("btn-danger");
    });

    $getAttrBtn.on("click", function () {
        alert( $(this).attr("type") );
    });

    $setAttrBtn.on("click", function () {
        $(this).attr("type", "reset");
    });

    $clickAlertBtn.on("click", function () {
        alert("Clicked");
    });

    $triggerAlertBtn.on("click", function () {
        alert( $clickAlertBtn.text() );
    });

    $cloneThisBtn.on("click", function () {
        $(this)
            .clone()
            .text($(this).text() + "(cloned)")
            .insertAfter(this);
    });

    $closestElement.on("click", function () {
        console.log( $(this).parent() );
    });

    $eachBtnText.on("click", function () {
        var allBtns = $(".btn-primary");
        var arr = [];

        allBtns.each(function () {
            var text = $(this).text();
            arr.push(text);
        });

        console.log(arr);
    });

    $findMe.on("click", function () {
        console.log( $("body").find(this).prop("outerHTML") );
    });

    $fadeInText.on("click", function () {
        $(this).next($hiddenText).fadeIn("slow");
    });

    $fadeOutText.on("click", function () {
        $(this).next($visibleText).fadeOut("slow");
    });

    $hideText.on("click", function () {
        $(this).next($visibleText).hide();
    });

    $showText.on("click", function () {
        $(this).next($hiddenText).show();
    });

    $dataAboutMe.on("click", function () {
        var thisData = [
            $(this).height(),
            $(this).width(),
            $(this).offset(),
            $(this).parent(),
            $(this).attr("type"),
            $(this).prev().prop("outerHTML"),
            $(this).next().prop("outerHTML"),
            $(this).text()
        ];

        for (var i = 0; i < thisData.length; i++) {
            console.log( thisData[i] );
        }
    });

});