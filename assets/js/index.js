$('a').on("mouseenter", function(){
    $(this).find('.title-website').show(200);
});

$('a').on("mouseleave", function(){
    $(this).find('.title-website').hide();
});



/**message script */
anime({
    targets: '.market-message',
    delay: anime.stagger(1000, {start: 2000}),
    endDelay: 10000,
    rotateY: ['90', '0'],
    loop: true,
});



/*on scroll detection*/

var skillPresentation = document.querySelector('circle');

var skillBlock_top = () => skillPresentation.getBoundingClientRect().top;
var triggerWindowHeight = () => window.innerHeight / 2;

const manageAnimation = () => {
    if(skillBlock_top() < triggerWindowHeight()) {
        window.removeEventListener('scroll', manageAnimation);
        anime({
            targets: 'circle',
            delay: 200,
            direction: 'reverse',
            duration: 2000,
            stroke: '#C4C4C4',
            strokeDashoffset: 337,
            easing: 'linear',
        });
    }
};


//console.log([skillBlock_top(), triggerWindowHeight()])

window.addEventListener('scroll', manageAnimation);

manageAnimation();

