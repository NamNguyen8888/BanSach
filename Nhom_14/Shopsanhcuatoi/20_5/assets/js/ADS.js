$(document).ready(function() {
	$('#ads').addClass('appear');
        $('#blur').addClass('blur_appear');
    var ads = setInterval(function() {
        $('#ads').removeClass('appear');
        $('#blur').removeClass('blur_appear');
        clearInterval(ads);
    }, 5000)

    $('#ads').click(function(event) {
        alert("Đã click vào xem thêm quà tặng cho bé.")
        $('#ads').removeClass('appear');
        $('#blur').removeClass('blur_appear');
    });
});