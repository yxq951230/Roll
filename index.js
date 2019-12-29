function scroll_pic_two() {
    var timer_pic = 50;
    $(".goods-list2").html($("#goods-list").html());
    var pic_width = $("#goods-list").width();
    var scroll_width = $("#goods-list").width();

    function step_pic_scroll() {
        let left;

        let scrollLeft = $("#automatic").scrollLeft();
        let transLeft = (scrollLeft / pic_width) * scroll_width;

        if ($("#automatic").scrollLeft() >= pic_width) {
            left = 0;
        } else {
            left = $("#automatic").scrollLeft() + 5;
        }

        $("#automatic").scrollLeft(left);
        document.getElementById(
            "out"
        ).style.transform = `translate3d(${transLeft}px, 0, 0)`;
    }

    var stop_pic_scro = setInterval(step_pic_scroll, timer_pic);
    $("#automatic").bind("mouseover", function() {
        clearInterval(stop_pic_scro);
    });

    $("#automatic").bind("mouseout", function() {
        stop_pic_scro = setInterval(step_pic_scroll, timer_pic);
    });
}
$(document).ready(function() {
    scroll_pic_two();
});
