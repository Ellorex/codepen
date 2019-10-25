! function() {
    for (var t = 0, n = ["ms", "moz", "webkit", "o"], o = 0; o < n.length && !window.requestAnimationFrame; ++o) window.requestAnimationFrame = window[n[o] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n[o] + "CancelAnimationFrame"] || window[n[o] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(n, o) {
        var a = (new Date).getTime(),
            e = Math.max(0, 16 - (a - t)),
            r = window.setTimeout(function() {
                n(a + e)
            }, e);
        return t = a + e, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(), jQuery(function($) {
    var t = "",
        n = "",
        o = $("#frequence"),
        a = $(".frequences"),
        e = $(".frequences-list"),
        r = e.find("li a.active"),
        s = $(window).scrollTop(),
        i = 0,
        l = e.outerHeight(),
        c = l / e.find("li").length,
        f = "";
    $frequenceListClone = e.clone(), a.after("<div class='icon-right current-freq'></div>"), f = $(".current-freq"), f.addClass("no-transition"), $frequenceListClone.addClass("no-transition"), a.prepend("<div class='round-noise fadeIn round-noise-1' data-bottom-top='transform:translateY(55%);' data-top-bottom='transform:translateY(-70%);' data-smooth-scrolling='off' data-anchor-target='.frequences'></div>"), a.prepend("<div class='round-noise fadeIn round-noise-2' data-bottom-top='transform:translateY(-800%);' data-top-bottom='transform:translateY(800%);' data-smooth-scrolling='off' data-anchor-target='.frequences'></div>"), a.prepend("<div class='round-noise fadeIn round-noise-3' data-bottom-top='transform:translateY(800%);' data-top-bottom='transform:translateY(-800%);' data-smooth-scrolling='off' data-anchor-target='.frequences'></div>"), Modernizr.touch;
    var d = function(t) {
            console.log("change change"), r = e.find("li a.active"), l = e.outerHeight(), c = l / e.find("li").length, i = Math.floor(($(window).scrollTop() + parseInt($("#main").css("margin-top")) / e.find("li").length) / c), i > e.find("li").length - 1 && (i = e.find("li").length - 1), r.removeClass("active"), e.find("li").eq(i).find("a").addClass("active"), r = e.find("li a.active"), m()
        },
        m = function() {
            if (f.removeClass("no-transition"), e = $(".frequences-list"), e.length > 0) {
                var t = r.offset(),
                    n = e.offset();
                a.css({
                    "background-color": r.attr("data-color")
                }), f.css({
                    "-webkit-transform": "translate3d(0," + (t.top - $(window).scrollTop()) + "px,0)",
                    "-moz-transform": "translate3d(0," + (t.top - $(window).scrollTop()) + "px,0)",
                    "-ms-transform": "translate3d(0," + (t.top - $(window).scrollTop()) + "px,0)",
                    "-o-transform": "translate3d(0," + (t.top - $(window).scrollTop()) + "px,0)",
                    transform: "translate3d(0," + (t.top - $(window).scrollTop()) + "px,0)",
                    left: e.offset().left
                }), o.html(e.find("li a.active").attr("data-freq")), $frequenceListClone.hasClass("no-transition") && ($frequenceListClone.removeClass("no-transition"), setTimeout(function() {
                    f.removeClass("no-transition")
                }, 400))
            } else $(window).off("scroll", d)
        },
        p = function(t) {
            clearInterval(n), $(window).off("scroll", d), r = e.find("li a.active"), r.removeClass("active"), console.log($(this).parents("li").index()), $(this).addClass("active"), r = e.find("li a.active"), l = e.outerHeight(), c = l / e.find("li").length;
            var o = e.offset();
            console.log(e.css("margin-top")), i = r.offset().top - parseInt(e.css("margin-top")) - parseInt($("#main").css("padding-top")), i = r.offset().top - parseInt(e.css("margin-top")) - parseInt($("#main").css("margin-top"));
            var a = r.position();
            return n = setInterval(function() {
                i = r.offset().top - parseInt(e.css("margin-top")) - parseInt($("#main").css("margin-top"));
                var t = r.offset();
                f.css({
                    "-webkit-transform": "translate3d(0," + (a.top - (i - parseInt($("#main").css("margin-top")))) + "px,0)",
                    "-moz-transform": "translate3d(0," + (a.top - (i - parseInt($("#main").css("margin-top")))) + "px,0)",
                    "-ms-transform": "translate3d(0," + (a.top - (i - parseInt($("#main").css("margin-top")))) + "px,0)",
                    "-o-transform": "translate3d(0," + (a.top - (i - parseInt($("#main").css("margin-top")))) + "px,0)",
                    transform: "translate3d(0," + (a.top - (i - parseInt($("#main").css("margin-top")))) + "px,0)",
                    left: e.offset().left
                })
            }, 1), $("html,body").animate({
                scrollTop: i
            }, 600), setTimeout(function() {
                m(), clearInterval(n), $(window).on("scroll", d)
            }, 601), t.preventDefault(), !1
        },
        w = function() {
            $(window).scrollTop() >= a.offset().top + a.outerHeight() - $(window).outerHeight() ? o.css({
                position: "absolute"
            }) : o.removeAttr("style")
        };
    e.find("a").on("click", p), d(), $(window).on("scroll", d), $(window).on("scroll", w)
});