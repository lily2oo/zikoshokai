/*jquery勉強中なので全部自分で書いた。多分間違ってるやつある*/

/*くるくる*/
$(function () {
  $('#headerlogo').on('click', function () {
    $(this).css({
      transform: 'rotate(1080deg)'
    });
  });
});

/*丸*/
$(function () {

  var duration = 800;

  $('.position1').find('.circle3').on('mouseout', function () {
    $('.position1').find('.circle2').stop(true).animate({
        top: '50%',
        left: '50%'
      },
      duration,
      'easeOutQuad'
    );
  })
  $('.position1').find('.circle3').on('mouseover', function () {
    $('.position1').find('.circle2').stop(true).animate({
        top: '-50%',
        left: '-50%'
      },
      duration,
      'easeOutQuad'
    );
  });
});

$(function () {

  var duration = 800;

  $('.position2').find('.circle3').on('mouseout', function () {
    $('.position2').find('.circle2').stop(true).animate({
        top: '50%',
        left: '50%'
      },
      duration,
      'easeOutQuad'
    );
  })
  $('.position2').find('.circle3').on('mouseover', function () {
    $('.position2').find('.circle2').stop(true).animate({
        top: '-50%',
        left: '150%'
      },
      duration,
      'easeOutQuad'
    );
  });
});


$(function () {

  var duration = 800;

  $('.position3').find('.circle3').on('mouseout', function () {
    $('.position3').find('.circle2').stop(true).animate({
        top: '50%',
        left: '50%'
      },
      duration,
      'easeOutQuad'
    );
  })
  $('.position3').find('.circle3').on('mouseover', function () {
    $('.position3').find('.circle2').stop(true).animate({
        top: '150%',
        left: '150%'
      },
      duration,
      'easeOutQuad'
    );
  });
});
$(function () {

  var duration = 800;

  $('.position4').find('.circle3').on('mouseout', function () {
    $('.position4').find('.circle2').stop(true).animate({
        top: '50%',
        left: '50%'
      },
      duration,
      'easeOutQuad'
    );
  })
  $('.position4').find('.circle3').on('mouseover', function () {
    $('.position4').find('.circle2').stop(true).animate({
        top: '150%',
        left: '-50%'
      },
      duration,
      'easeOutQuad'
    );
  });
});

/*でっかくちっちゃく*/
$(function () {
  $(".jsi").on('click',function () {
    var targetClassName = '.' + $(this).find('.toumei').data('target_class');
    $(targetClassName).toggle();
  });
});
