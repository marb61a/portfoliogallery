$(document).ready(function(){
	$('nav a').on('click', function(){
	    
		// Current class assigniment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');
		
		// Sets the heading text
		$('h1#heading').text($(this).text());
		
		// Get and filter link text
		var category = $(this).text().toLowerCase().replace(' ','-');
		
		// Removes the hidden class if 'all-projects' is selected
		if(category == 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		// Stop the link behaviour
		return false;
	});
});