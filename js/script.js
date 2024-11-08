$(".karoselgambar-paket").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 4000,
	speed: 1500,
	asNavFor: ".karoselarrow",
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".karoselarrow").slick({
	speed: 1500,
	arrows: true,
	infinite: true,
	asNavFor: ".karoselgambar-paket",
});

$(".karoselgambar-icon").slick({
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 6000,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 811,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 501,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});
