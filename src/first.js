jQuery(function ($) {

    var $addClassBtn = $("#add-class");
    var $removeClassBtn = $("#remove-class");
    var $toggleClassBtn = $("#toggle-class");
    var $getAttrBtn = $("#get-attr");
    var $setAttrBtn = $("#set-attr");
    var $clickAlertBtn = $("#click-alert");
    var $triggerAlertBtn = $("#trigger-alert");
    var $cloneThisBtn = $("#clone-this");
    var $closestElement = $("#closest-element");
    var $eachBtnText = $("#each-btn-text");
    var $findMe = $("#find-me");
    var $fadeInText = $("#fade-in-text");
    var $hiddenText = $(".hidden-text");
    var $visibleText = $(".visible-text");
    var $fadeOutText = $("#fade-out-text");
    var $hideText = $("#hide-text");
    var $showText = $("#show-text");
    var $dataAboutMe = $("#data-about-me");

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

        for (var i = 0; i < allBtns.length; i++) {
            console.log(allBtns.text());
        }
    });

    $findMe.on("click", function () {
        console.log( $("body").children().find(this).prop("outerHTML") );
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