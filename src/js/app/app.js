$(document).ready(function () {
    $('.composition_button').click(function (event) {
      event.preventDefault();
      var src = $(this).data('src');
      $('.active').removeClass('active');
      $(this).addClass('active');
      $('.circle_background_img').attr('src', src);
    });

    $('.questions_list_point').click(function () {
      $(this).find('.questions_list_point_img').toggleClass('open');
      $(this).find('.questions_list_point_answer').stop(true).slideToggle(300);
    });
});
