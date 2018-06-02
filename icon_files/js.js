$(document).ready(function() {

	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); 
		$(this).addClass("active");
		$(".tab_content").hide();

		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	// Кнопка подробнее
	if (($('.page').hasClass('blocks') && $('.desc').height()<340 )|| ($('.page').hasClass('symbol') && $('.desc').height()<195  ) ) {
		$('#page_open_desc').hide();
	};
	$('#page_open_desc').on('click', function(event) {
		event.preventDefault();
		if ($(this).hasClass('opened')==false) {
		$('.desc').css({
			'max-height':'100%',
			overflow:'visible'
		});
		
		$(this).addClass('opened');

		} else{
			$(this).removeClass('opened')
			       .css('bottom', '0');
			       
			      if ($('.page').hasClass('blocks')) {
			      		$('.desc').css({
			      		'max-height':'340px',
			      		overflow:'hidden'
			      	});
			      } else{
			      			$('.desc').css({
			      			'max-height':'195px',
			      			overflow:'hidden'
			      		});
			      };
			 
			
		};
	});

});
