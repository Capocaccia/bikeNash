$(document).ready( function() {
    $(".trailInfo").hide();
    $('.hamiltonCreekContainer').hover( function() {
        $(this).find('.trailInfo').fadeIn(300);
    }, function() {
        $(this).find('.trailInfo').fadeOut(300);
    });

    $('.percyWarnerContainer').hover( function() {
        $(this).find('.trailInfo').fadeIn(300);
    }, function() {
        $(this).find('.trailInfo').fadeOut(300);
    });

    $('.mtbImg').mouseenter(function() {
        $('.mapTagMtb').css("color", "#0198E1");
    })

    $('.mtbImg').mouseleave(function() {
        $('.mapTagMtb').css("color", "black");
    })

    $('.roadImg').mouseenter(function() {
        $('.mapTagRoad').css("color", "#FC1501");
    })

    $('.roadImg').mouseleave(function() {
        $('.mapTagRoad').css("color", "black");
    })

    $('.centralTnTagContainer').mouseenter(function() {
        $('.centralTnTag').css("color", "#0198E1");
    })

    $('.centralTnTagContainer').mouseleave(function() {
        $('.centralTnTag').css("color", "black");
    })

     $('.bCycleContainer').mouseenter(function() {
        $('.bCycleTag').css("color", "#0198E1");
    })

    $('.bCycleContainer').mouseleave(function() {
        $('.bCycleTag').css("color", "black");
    })
});
