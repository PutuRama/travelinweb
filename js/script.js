$(".hero__slick").slick({
	autoplay: true,
	autoplaySpeed: 3000,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 3000,
	arrows: true,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
			},
		},
	],
});

$(".autoplay").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
});

$(".partner-slick").slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
});
