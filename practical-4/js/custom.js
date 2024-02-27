$(document).ready(function() {
	$('.chat_icon').click(function() {
		$('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});

// cursor
$(document).ready(function() {
	$("body").mousemove(function(event) {
		var top =$(window).scrollTop() - $(this).offset().top + event.clientY
		var left =$(window).scrollLeft() - $(this).offset().left + event.clientX
		
		
		setTimeout(function(){
			$(".cursor_area").prepend('<span class="cursor"></span>')
			$('.cursor').css({"left":left - 30,"top":top - 30});
			
		},100)
		setInterval(function(){
			$('.cursor').eq(30).remove()
		},5000)

		
		
	});
	
});

$(document).ready(function() {
	$('body').ripples({
			dropRadius: 10, 
			perturbance: 0.01,
		});
});

