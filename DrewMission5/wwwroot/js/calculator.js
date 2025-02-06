$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = $("#hours").val();
        if (hours > 0) {
            $("#total").text("$" + (hours * 50));
        } else {
            alert("Please enter a valid number of hours.");
        }
    });
});
