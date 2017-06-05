    $(document).on('click', 'a.from-left', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
