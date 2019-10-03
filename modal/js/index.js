$(function() {
	$('.modalOpen').on('click',function(){
		openModal();
	})
	$('.modalClose').on('click',function(){
		closeModal();
	})
	$(window).on('click',function(e){
		if(e.target == $(".modal")[0]){
			closeModal();
		}
	})
});

function openModal(){
	$('.modal').fadeIn(300);
	// $('body').css('overflow','hidden')
}
function closeModal(){
	$('.modal').fadeOut(200);
	// $('body').css('overflow','auto')
}