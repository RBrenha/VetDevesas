$(function() {
    $('.menu_button').click(function() {
                    $(this).toggleClass('show');
                    $(".menu_sections").toggleClass("show");
                });
    
                $('.link').click(function(event) {
                    event.preventDefault();
                    const target = $($.attr(this, 'href'));
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    setTimeout(function() {
                        $('.menu_sections').removeClass('show');
                        $('.menu_button').removeClass('show');
                    }, 600);
                });
            });