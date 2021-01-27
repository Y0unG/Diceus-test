$('.slider__container').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	  {
		 breakpoint: 1024,
		 settings: {
		 }
	  },
	  {
		 breakpoint: 800,
		 settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		 }
	  },
	  {
		 breakpoint: 700,
		 settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		 }
	  },
	  {
		breakpoint: 500,
		settings: {
		  slidesToShow: 1
		}
	 }
	]
 });

 let burger = document.querySelector('.header__burger');
burger.addEventListener("click", function() {
	let menuMob = document.querySelector('.menu__mob');
	menuMob.classList.toggle('showed');
	let burger = document.querySelector('.header__burger');
	burger.classList.toggle('burger_showed')
})