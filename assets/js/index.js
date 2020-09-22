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
var triggerWindowHeight = () => window.innerHeight * 0.9;

const manageAllAnimations = () => {
    if(skillBlock_top() < triggerWindowHeight()) {
        window.removeEventListener('scroll', manageAllAnimations);
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

function singleAnim (event) {
    const triggerElm = event.currentTarget;
    triggerElm.removeEventListener('mouseenter', singleAnim);
    anime({
        targets: triggerElm.querySelector('circle'),
        delay: 200,
        direction: 'reverse',
        duration: 2000,
        stroke: '#C4C4C4',
        strokeDashoffset: 337,
        easing: 'linear',
    });
    //alert(triggerElm);
    setTimeout(function(triggerElm) {
        //triggerElm.addEventListener('mouseenter', singleAnim);
        alert(triggerElm);
    }, 3000);
}


//console.log([skillBlock_top(), triggerWindowHeight()])

window.addEventListener('scroll', manageAllAnimations);

manageAllAnimations();

/*document.querySelectorAll('.logo-skill').forEach(skill => {
    skill.addEventListener('mouseenter', singleAnim);
});*/

