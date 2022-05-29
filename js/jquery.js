$(function () {
   $("#includedContent").load("grammar.html");
});

$(function () {
   $("#includedContent1").load("recs.html");
});

const btn = $('#button');

$(window).scroll(function () {
   if ($(window).scrollTop() > 300) {
      btn.addClass('show');
   } else {
      btn.removeClass('show');
   }
});

btn.on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: 0 }, '300');
});
