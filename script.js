// <!-- imaage wheel effect -->
var counter =0;
var proCount =0;
window.addEventListener('wheel',function(event){
  if (event.deltaY < 0) {

		counter += 45;
		proCount += 1;
		//console.log(counter2)
		$(".main_box").css({"transform":"rotate("+counter+"deg"});
		$(".proBox").removeClass('active');
		if(proCount > 7){proCount = 0}
		$(".proBox").eq(proCount).addClass('active');
		
	}else if (event.deltaY > 0) {	

		counter -= 45;
		proCount -= 1;
		//console.log(counter2)
		$(".main_box").css({"transform":"rotate("+counter+"deg"});
		$(".proBox").removeClass('active');
		if(proCount < -7 ){proCount = 0}
		$(".proBox").eq(proCount).addClass('active');

	}
})


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
	$('.chat_icon').click(function() {
		$('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
