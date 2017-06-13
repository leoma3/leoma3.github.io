$(document).on('click', 'a.from-left', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {
    $("#welcome-ms").fadeIn(1000, function() {
        $(this).animate({
            width: "100%"
        }, 1000, function() {
            $(this).animate({
                color: "black"
            }, 1000)
        });
    });


});
