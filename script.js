$('.buttom-1').mouseover(
    function header2_text_board_a_i_hover() {
        $('.buttom-1').css('background-color','rgba(255, 255, 255, 1)').css('color','rgba(0,0,0,1)');
        $('.buttom-1_b').css('top','-10px').css('left','-10px').css('right','-10px').css('bottom','-10px').css('border','rgba(255, 255, 255, 1) solid 1px');
    }
).mouseout(
    function header2_text_board_a_i_unhover() {
        $('.buttom-1').css('background-color','transparent').css('color','rgba(255, 255, 255, 1)');
        $('.buttom-1_b').css('top','0').css('left','0').css('right','0').css('bottom','0').css('border','rgba(255, 255, 255, 1) solid 0px');
    });

$('.buttom-2').mouseover(
    function header2_text_board_a_i_hover() {
        $('.buttom-2_i').css('margin-left','10px').css('opacity','100');
        $('.buttom-2').css('padding-left','20px').css('text-decoration','black solid 2px !important');
    }
).mouseout(
    function header2_text_board_a_i_unhover() {
        $('.buttom-2_i').css('margin-left','0px').css('opacity','0');
        $('.buttom-2').css('padding-left','0').css('text-decoration','black solid 0px !important');
    });