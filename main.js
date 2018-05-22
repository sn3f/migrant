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
	
	 adjustIframeHeight('#chart-iframe', 1400, 20);
});

function adjustIframeHeight(iframe, minHeight, fix){

    var height = 0, $frame = $(iframe);
    if(typeof fix=='undefined') fix = 0;

    setInterval(function(){
        if( typeof $frame.contents()!=null && typeof $frame.contents() !='undefined' && $frame.contents() !=null && $frame.attr('src')!='') {
            curHeight = $frame.contents().find('body').height();
            $frame.css('height', height + fix); // you might need to add some extra values like +20px.
        } else {
            $frame.css('height', minHeight); // minimum height for the iframe.
        }
    },200);
}