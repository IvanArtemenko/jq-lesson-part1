jQuery(function ($) {
    var $onChangeInput = $("#on-change-input");
    var $secondInput = $("#second-input");
    var $submitButton = $("#submit-button");
    var $radio = $("input[name*='radio']");
    var $checkBox = $("#checkbox");

    $onChangeInput.on("keyup", function () {
        var thisVal = $(this).value;
        $secondInput.val(thisVal);

        console.log(thisVal);
    });

    $submitButton.on("click", function (e) {
        e.preventDefault();
        var radioVal = $radio.is(":checked");
        var checkBoxVal = $checkBox.is(":checked");
        var inputVal = $onChangeInput.value;
        var secondInputVal = $secondInput.value;

        console.log(radioVal, checkBoxVal, inputVal, secondInputVal);
    });

});