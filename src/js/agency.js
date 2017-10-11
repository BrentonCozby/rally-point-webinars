(function($) {
    'use strict'

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this)
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 700)
        event.preventDefault()
    })

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function(){
        $('.navbar-toggle:visible').click()
    })

    // Services Page's Dropdown menu functionality
    $('.nav-services-dropdown-btn').click(function() {
        const ul = $(this).next()
        if(ul.css('display') === 'none') {
            ul.show()
        }
        else {
            ul.hide()
        }
    })
    $('.nav-services-dropdown-menu li').click(function() {
        $(this).parent().hide()
    })

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 30
        }
    })

    $('.logo-box').click(function(e) {
        $('.logo-box').css({ borderRightColor: '#ccc' })
        $(this).css({ borderRightColor: '#fff' })

        $('.logo-overlay').fadeIn(300)
        $(this).find('.logo-overlay').fadeOut(300)

        const id = $(e.target).closest('.logo-box')[0].dataset.for
        $('.feature').fadeOut(300)
        setTimeout(function() {
            $('#' + id).fadeIn()
        }, 310)
    })

})(jQuery)
