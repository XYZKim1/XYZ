jQuery(document).ready(function () {
    $('#myModal').show();
});
//팝업 Close 기능
function close_pop(flag) {
    $('#myModal').hide();
};



type = "text/javascript" >/*go_ux_btn*/
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 2800) {
                $('.go_ux_btn').fadeIn();
            } else {
                $('.go_ux_btn').fadeOut();
            }
        });


    });



type = "text/javascript" >/*top btn*/
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.top').fadeIn();
            } else {
                $('.top').fadeOut();
            }
        });


        $('.top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 400);
            return false;
        });
    });
