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
