$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="arrow"></button>',
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function(){
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__wrapper').eq(i).toggleClass('catalog-item__wrapper_active');
            });
        });
    }

    toggleSlide('.catalog-item__link')
    toggleSlide('.catalog-item__link_back')

	//Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn("slow");
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});

	$('.button_catalog-item').on('click', function() {
		$('.overlay, #order').fadeIn('slow');
	});

	$('.button_catalog-item').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
		
	});

	function validateForms(form) {
		$(form).validate({
			rules:{
				name: "required",
				phone: 'required',
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: 'Укажите свое имя',
				phone: 'Укажите свой номер телефона',
				email: {
					required: 'Укажите свой email',
					email: 'Укажите email в правильной форме'
				}
			}
		});
	}
	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	$('input[name=phone]').mask("+3 (999) 999-99-99");
});