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


anime({
    targets: 'circle',
    delay: 200,
    direction: 'reverse',
    duration: 2000,
    stroke: '#C4C4C4',
    strokeDashoffset: 337,
    easing: 'linear',
});