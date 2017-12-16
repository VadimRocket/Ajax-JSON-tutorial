$(function() {

	$(window).scroll(function(){
		if($(this).scrollTop() > 1){
			$('.preview').css('display','none');
		}
		// else{	
		// 	setTimeout(function(){
		// 			$('.preview').css('display','block');
		// 		},4000)
		// }
	});
	

});
