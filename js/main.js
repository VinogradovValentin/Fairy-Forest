window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})


// Smooth Scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create ({
    wrapper: '.wrapper',
    content: '.content'
})