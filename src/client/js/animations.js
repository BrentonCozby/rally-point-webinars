// Add selectors here and they will all have the class 'visible'
// added to them when they scroll into view
let selectors = [
    $('section h2'),
    $('section h3'),
    $('section p'),
    $('.things-that-go-wrong')
]



let animElements = []

function _populateElements() {
    selectors.forEach($selector => {
        $selector.each((i, el) => {
            animElements.push({element: $(el), position: null})
        })
    })
}

function _getPositions() {
    _populateElements()

    animElements.forEach($el => {
        $el.position = $el.element.offset().top
    })
}

const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
const windowScroll = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
let windowHeight = null
let offset = null

function playAnimations() {
    animElements.forEach(el => {
        const triggerPoint = el.position - windowHeight + offset
        if(window.scrollY > triggerPoint)
            el.element.addClass('scroll-visible')
        else
            el.element.removeClass('scroll-visible')
    })
}

$(document).ready(function() {
    setInterval(function() {
        windowHeight = $(window).height()
        offset = windowHeight * .1
        _getPositions()
    }, 1000)

})

export { playAnimations }
