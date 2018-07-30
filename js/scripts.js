$(document).ready(function(){
	$('.article__item:not(:first)').hide();
	$('.item__link').first().addClass('active');
	

	$('.item__link').on('click', function(e){
		e.preventDefault();
		
		$(this).addClass('active');
		$('.item__link').not(this).removeClass('active');

		var item = $(this).data('id');
		
		$('.article').find('#' + item).slideDown(300);
		$('.article__item').not('#' + item).slideUp(300);
	});
});
