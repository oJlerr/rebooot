$(function(){
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset ='';
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 400);
		e.preventDefault();
	});
});
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});