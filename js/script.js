$(".karoselgambar-paket").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 5000,
	speed: 300,
	asNavFor: ".karoselarrow",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".karoselarrow").slick({
	speed: 300,
	arrows: true,
	infinite: true,
	asNavFor: ".karoselgambar-paket",
});

$(".karoselgambar-icon").slick({
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 349,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});
