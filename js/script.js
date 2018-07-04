var sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
          $('.back-to-top').fadeIn(100);
        } else {
            $('.back-to-top').fadeOut(0);
        }
    });
    $('.back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1200, 'easeInOutExpo');
    });
});

//date
    var nowdate = document.querySelector("span.date");
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var Days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var thisDay = date.getDay();
        thisDay = Days[thisDay];
    var year = date.getFullYear();
    nowdate.innerHTML = thisDay + ', ' + day + ' ' + months[month] + ' ' + year;