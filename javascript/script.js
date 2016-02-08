$(window).load(function() {
	//script
	var $window = $(window);
	var $menu = $('#header'); 
	setTimeout(function(){		
		var menuTop = $menu.offset().top;
		$window.on('scroll', function() {
			var windowTop = $window.scrollTop();
			if(windowTop > menuTop){
				$menu.addClass("fixed");
			}else{
				$menu.removeClass("fixed");
			}
		});
	}, 1500);
	//nextsection
	var $scrollDown = $('.nextsection');
	if($scrollDown.length > 0){
		var $pageTop = $('.flexslider');
		$scrollDown.on('click', function(event) {
			event.preventDefault();
			$('body, html').animate({
				scrollTop: $pageTop.outerHeight()
			}, 400);
		});
	};

	//menu
	var $iconThreeBars = $(".icon-bars");

	$iconThreeBars.on("click", function(){
        var $this = $(this);

        $this.parent().toggleClass("open");
	});  
	//slider
  $('.flexslider').flexslider({
    animation: "slide"
  });
});