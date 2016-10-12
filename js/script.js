;$(document).ready(function (){
    $('.first.circle').circleProgress({
        value: 0.9,
        fill: {
            gradient: ["red", "orange"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
    });

    $('.second.circle').circleProgress({
        value: 0.85,
        fill: {
            gradient: ["red", "orange"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
    });

    $('.third.circle').circleProgress({
        value: 0.5,
        fill: {
            gradient: ["red", "orange"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
    });

    $('.fourth.circle').circleProgress({
        value: 0.8,
        fill: {
            gradient: ["red", "orange"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
    });

    $('.fifth.circle').circleProgress({
        value: 0.5,
        fill: {
            gradient: ["red", "orange"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
    });

    $('.sixth.circle').circleProgress({
        value: 0.8,
        fill: {
            gradient: ["red", "orange"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
    });

    $('.seventh.circle').circleProgress({
        value: 0.7,
        fill: {
            gradient: ["red", "orange"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
    });

    $('.btn').on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
    });
});