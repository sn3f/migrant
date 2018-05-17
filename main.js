$(function() {
	$('.bg-light').click(function() {
		$('.result:visible').each(function(index) {
			$(this).css('padding', '0');
			$(this).html('');
		});
		var el = $(this).nextAll('.result:visible').first();
		el.html($(this).find('.d-none').html());
		el.css('padding', '40px 0px');
	});
	
	$('.result').on('click', '.close', function (){
		$(this).parent().css('padding', '0');
        $(this).parent().html('');
    });
	
	$('.btn-info').click(function() {
		$('#info').html($(this).next().html());
	});
	
	$('#info').on('click', '.close', function (){
        $(this).parent().html('');
    });
});