;
(function($, window, document, undefined) {
    var accBtn = $('.button-acc');
    var accContent = $('.content-acc');

console.log(accBtn);
    accBtn.click(function() {
console.log("boom");
        var cb = $(this);
        var dt = "#" + $(this).attr("data-toggle");
        var dc = $(dt).children(":first-child");
        var dh = $(dc).outerHeight();

        console.log(dt);

        if (!cb.hasClass("open")) {

            $(dt).animate({
                    height: dh
                }, 500,
                "easeInOutExpo");
            dc.animate({
                opacity: 1
            }, 400, function() {

                cb.addClass("open");

            });

        } else {
            $(dt).animate({
                    height: 0
                }, 300,
                "easeInOutExpo");
            dc.animate({
                opacity: 0
            }, 100, function() {

                cb.removeClass("open");

            });
        }


    });

    $(window).resize(function() {

        accBtn.each(function() {

            console.log($(this));

            if ($(this).hasClass("open")) {

                var dt = "#" + $(this).attr("data-toggle");
                var dc = $(dt).children(":first-child");

                $(dt).css({
                    "height": "0"
                });
                dc.css({
                    "opacity": "0"
                });
                $(this).removeClass("open");
            }


        })

    });


}(jQuery, this, this.document));