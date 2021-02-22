const sections = document.querySelectorAll('section'),
    bubble = document.querySelector('.bubble'),
    gradients = [
        'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
        'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)'
    ],
    options = {
        threshold: 0.7
    };
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className,
            activeAnchor = document.querySelector(`[data-page=${className}]`),
            gradientIndex = entry.target.getAttribute('data-index'),
            coords = activeAnchor.getBoundingClientRect(),
            directions = {
                height: "2.4",
                width: coords.width,
                top: "93",
                left: coords.left
            };
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}%`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    })
};
sections.forEach(section => {
    observer.observe(section)
})