(function ($) {
	("use strict");
	var windowOn = $(window);
	windowOn.on("load", function () {
		$("#loading").fadeOut(1000);
	});
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});
	$("#mobile-menu2").meanmenu({
		meanMenuContainer: ".mobile-menu2",
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});
	$(".close-sidebar,.offcanvas-overlay").on("click", function () {
		$(".sidebar-cart").removeClass("cart-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".action-item-cart").on("click", function () {
		$(".sidebar-cart").addClass("cart-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});
	$(".cart-toggle-btn").on("click", function () {
		$(".cartmini__wrapper").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".cartmini__close-btn").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});
	windowOn.on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	$("select").niceSelect();

	
	function tp_settings_append($x) {
		var settings = $("body");
		let dark;
		$x == true ? (dark = "d-block") : (dark = "d-none");
		var settings_html = `<div class="tp-theme-settings-area transition-3" style="display:none">
		<div class="tp-theme-wrapper">
		   <div class="tp-theme-header text-center">
			  <h4 class="tp-theme-header-title">Theme Settings</h4>
		   </div>

		   <!-- THEME TOGGLER -->
		   <div class="tp-theme-toggle mb-20 ${dark}" style="display:none">
			  <label class="tp-theme-toggle-main" for="tp-theme-toggler">
				 <span class="tp-theme-toggle-dark"><i class="fa-light fa-moon"></i> Dark</span>
					<input type="checkbox" id="tp-theme-toggler">
					<i class="tp-theme-toggle-slide"></i>
				 <span class="tp-theme-toggle-light active"><i class="fa-light fa-sun-bright"></i> Light</span>
			  </label>
		   </div>

		   <!--  RTL SETTINGS -->
		   <div class="tp-theme-dir mb-20">
			  <label class="tp-theme-dir-main" for="tp-dir-toggler">
				 <span class="tp-theme-dir-rtl"> RTL</span>
					<input type="checkbox" id="tp-dir-toggler">
					<i class="tp-theme-dir-slide"></i>
				 <span class="tp-theme-dir-ltr active"> LTR</span>
			  </label>
		   </div>

		   <!-- COLOR SETTINGS -->
		   <div class="tp-theme-settings">
			  <div class="tp-theme-settings-wrapper">
				 <div class="tp-theme-settings-open">
					<button class="tp-theme-settings-open-btn">
					   <span class="tp-theme-settings-gear">
						  <i class="fal fa-cog"></i>
					   </span>
					   <span class="tp-theme-settings-close">
						  <i class="fal fa-times"></i>
					   </span>
					</button>
				 </div>
				 <div class="row row-cols-4 gy-2 gx-2">
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
					   <button class="tp-theme-color-btn tp-color-settings-btn d-none" data-color-default="#4e9f24" type="button" data-color="#4e9f24"></button>
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#4e9f24"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#0d640b"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#138c17"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#73c100"></button>
					   </div>
					</div>
				 </div>
			  </div>
			  <div class="tp-theme-color-input">
				 <h6>Choose Custom Color</h6>
				 <input type="color" id="tp-color-setings-input" value="#0b3d2c">
				 <label id="tp-theme-color-label" for="tp-color-setings-input"></label>
			  </div>
		   </div>
		</div>
	 </div>`;
		settings.append(settings_html);
	}
	tp_settings_append(false);


	$(".tp-theme-settings-open-btn").on("click", function () {
		$(".tp-theme-settings-area").toggleClass("settings-opened");
	});
	$(".slider-drag").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});
	$(".slider-drag").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});
	$("a,.sub-menu").on("mouseenter", function () {
		$(".mouseCursor").addClass("d-none");
	});
	$("a,.sub-menu").on("mouseleave", function () {
		$(".mouseCursor").removeClass("d-none");
	});

	function itCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n, i = 0,
					o = !1;
				(window.onmousemove = function (s) {
					o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (n = s.clientY), (i = s.clientX);
				}), $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
					e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
				}), $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
					($(this).is("a", "button") && $(this).closest(".cursor-pointer").length) || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
				}), (e.style.visibility = "visible"), (t.style.visibility = "visible");
			}
		}
	}
	itCursor();

	function tp_rtl_settings() {
		$("#tp-dir-toggler").on("change", function () {
			toggle_rtl();
			window.location.reload();
		});

		function tp_set_scheme(tp_dir) {
			localStorage.setItem("tp_dir", tp_dir);
			document.documentElement.setAttribute("dir", tp_dir);
			if (tp_dir === "rtl") {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.rtl.css");
			} else {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}

		function toggle_rtl() {
				tp_set_scheme("rtl");
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.rtl.css");
		}

		function tp_init_dir() {
				tp_set_scheme("rtl");
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.rtl.css");
				document.getElementById("tp-dir-toggler").checked = true;
		}
		tp_init_dir();
	}
	if ($("#tp-dir-toggler").length > 0) {
		tp_rtl_settings();
	}
	var tp_rtl = localStorage.getItem("tp_dir");
	let rtl_setting = tp_rtl == "rtl" ? true : false;

	function tp_theme_toggler() {
		$("#tp-theme-toggler").on("change", function () {
			toggleTheme();
		});

		function tp_set_scheme(tp_theme) {
			localStorage.setItem("tp_theme_scheme", tp_theme);
			document.documentElement.setAttribute("tp-theme", tp_theme);
		}

		function toggleTheme() {
			if (localStorage.getItem("tp_theme_scheme") === "tp-theme-dark") {
				tp_set_scheme("tp-theme-light");
			} else {
				tp_set_scheme("tp-theme-dark");
			}
		}

		function tp_init_theme() {
			if (localStorage.getItem("tp_theme_scheme") === "tp-theme-dark") {
				tp_set_scheme("tp-theme-dark");
				document.getElementById("tp-theme-toggler").checked = true;
			} else {
				tp_set_scheme("tp-theme-light");
				document.getElementById("tp-theme-toggler").checked = false;
			}
		}
		tp_init_theme();
	}
	if ($("#tp-theme-toggler").length > 0) {
		tp_theme_toggler();
	}

	function tp_color_settings() {
		function tp_set_color(tp_color_scheme) {
			localStorage.setItem("tp_color_scheme", tp_color_scheme);
			document.querySelector(":root").style.setProperty("--clr-theme-2", tp_color_scheme);
			document.getElementById("tp-color-setings-input").value = tp_color_scheme;
			document.getElementById("tp-theme-color-label").style.backgroundColor = tp_color_scheme;
		}

		function tp_set_input() {
			var color = localStorage.getItem("tp_color_scheme");
			document.getElementById("tp-color-setings-input").value = color;
			document.getElementById("tp-theme-color-label").style.backgroundColor = color;
		}
		tp_set_input();

		function tp_init_color() {
			var defaultColor = $(".tp-color-settings-btn").attr("data-color-default");
			var setColor = localStorage.getItem("tp_color_scheme");
			if (setColor != null) {} else {
				setColor = defaultColor;
			}
			if (defaultColor !== setColor) {
				document.querySelector(":root").style.setProperty("--clr-theme-2", setColor);
				document.getElementById("tp-color-setings-input").value = setColor;
				document.getElementById("tp-theme-color-label").style.backgroundColor = setColor;
				tp_set_color(setColor);
			} else {
				document.querySelector(":root").style.setProperty("--clr-theme-2", defaultColor);
				document.getElementById("tp-color-setings-input").value = defaultColor;
				document.getElementById("tp-theme-color-label").style.backgroundColor = defaultColor;
				tp_set_color(defaultColor);
			}
		}
		tp_init_color();
		let themeButtons = document.querySelectorAll(".tp-color-settings-btn");
		themeButtons.forEach((color) => {
			color.addEventListener("click", () => {
				let datacolor = color.getAttribute("data-color");
				document.querySelector(":root").style.setProperty("--clr-theme-2", datacolor);
				document.getElementById("tp-theme-color-label").style.backgroundColor = datacolor;
				tp_set_color(datacolor);
			});
		});
		const colorInput = document.querySelector("#tp-color-setings-input");
		const colorVariable = "--clr-theme-2";
		colorInput.addEventListener("change", function (e) {
			var clr = e.target.value;
			document.documentElement.style.setProperty(colorVariable, clr);
			tp_set_color(clr);
			tp_set_check(clr);
		});

		function tp_set_check(clr) {
			const arr = Array.from(document.querySelectorAll("[data-color]"));
			var a = localStorage.getItem("tp_color_scheme");
			let test = arr.map((color) => {
				let datacolor = color.getAttribute("data-color");
				return datacolor;
			}).filter((color) => color == a);
			var arrLength = test.length;
			if (arrLength == 0) {
				$(".tp-color-active").removeClass("active");
			} else {
				$(".tp-color-active").addClass("active");
			}
		}

		function tp_check_color() {
			var a = localStorage.getItem("tp_color_scheme");
			var list = $(`[data-color="${a}"]`);
			list.parent().addClass("active").parent().siblings().find(".tp-color-active").removeClass("active");
		}
		tp_check_color();
		$(".tp-color-active").on("click", function () {
			$(this).addClass("active").parent().siblings().find(".tp-color-active").removeClass("active");
		});
	}
	if ($(".tp-color-settings-btn").length > 0 && $("#tp-color-setings-input").length > 0 && $("#tp-theme-color-label").length > 0) {
		tp_color_settings();
	}
	if (jQuery(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",
			rtl: rtl_setting,
			autoplay: {
				delay: 50000000,
			},
			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");
					$(this).removeClass("anim" + anim).addClass(anim + " animated").css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration,
					}).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
						$(this).removeClass(anim + " animated");
					});
				});
			};
			animated();
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}
		animated_swiper(sliderActive1, sliderInit1);
	}
	if (jQuery(".slider__active-2").length > 0) {
		let sliderActive1 = ".slider__active-2";
		let sliderInit1 = new Swiper(sliderActive1, {
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",
			rtl: rtl_setting,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: ".swiper-paginations",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");
					$(this).removeClass("anim" + anim).addClass(anim + " animated").css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration,
					}).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
						$(this).removeClass(anim + " animated");
					});
				});
			};
			animated();
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}
		animated_swiper(sliderActive1, sliderInit1);
	}
	var themeSlider = new Swiper(".classname", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});
	$(".grid").imagesLoaded(function () {
		var $grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				columnWidth: ".grid-item",
			},
		});
		$(".masonary-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({
				filter: filterValue
			});
		});
		$(".masonary-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});
	$(".image-popups").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	$(".popup-video").magnificPopup({
		type: "iframe",
	});
	new WOW().init();
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});
	$(".cart-minus").click(function () {
		var $input = $(this).parent().find("input");
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$(".cart-plus").click(function () {
		var $input = $(this).parent().find("input");
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	$("#showlogin").on("click", function () {
		$("#checkout-login").slideToggle(900);
	});
	$("#showcoupon").on("click", function () {
		$("#checkout_coupon").slideToggle(900);
	});
	$("#cbox").on("click", function () {
		$("#cbox_info").slideToggle(900);
	});
	$("#ship-box").on("click", function () {
		$("#ship-box-info").slideToggle(1000);
	});
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});
	if ($(".scene").length > 0) {
		$(".scene").parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	}
	$(".hover__active").on("mouseenter", function () {
		$(this).addClass("active").parent().siblings().find(".hover__active").removeClass("active");
	});
	if (typeof $.fn.knob != "undefined") {
		$(".knob").each(function () {
			var $this = $(this),
				knobVal = $this.attr("data-rel");
			$this.knob({
				draw: function () {
					$(this.i).val(this.cv + "%");
				},
			});
			$this.appear(function () {
				$({
					value: 0,
				}).animate({
					value: knobVal,
				}, {
					duration: 2000,
					easing: "swing",
					step: function () {
						$this.val(Math.ceil(this.value)).trigger("change");
					},
				});
			}, {
				accX: 0,
				accY: -150,
			});
		});
	}
	$(".drop-btn").on("click", function () {
		$(this).siblings("").toggleClass("content-hidden");
		$(this).parent("").toggleClass("child-content-hidden");
	});
	$(".slider-range-bar").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		},
	});
	$(".category-click").click(function () {
		$(this).siblings(".category-items").slideToggle();
		$(this).toggleClass("items-open");
	});
	$(".side-info-close,.offcanvas-overlay").on("click", function () {
		$(".side-info").removeClass("info-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".side-toggle").on("click", function () {
		$(".side-info").addClass("info-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});
	if (jQuery(".client-active").length > 0) {
		let client = new Swiper(".client-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			observer: true,
			observeParents: true,
			rtl: rtl_setting,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				500: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
				1400: {
					slidesPerView: 5,
				},
			},
		});
	}
	if (jQuery(".portfolio-active").length > 0) {
		let portfolio = new Swiper(".portfolio-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			allowTouchMove: false,
			observer: true,
			observeParents: true,
			rtl: rtl_setting,
			navigation: {
				nextEl: ".portfolio-button-next",
				prevEl: ".portfolio-button-prev",
			},
			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 2,
				},
			},
		});
	}
	const category = new Swiper(".category-basic-slider", {
		slidesPerView: 1,
		spaceBetween: 40,
		loop: true,
		centeredSlides: false,
		observer: true,
		observeParents: true,
		rtl: rtl_setting,
		pagination: {
			el: ".category-basic-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".category-basic-button-next",
			prevEl: ".category-basic-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
	if (jQuery(".product-active").length > 0) {
		let product = new Swiper(".product-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			observer: true,
			observeParents: true,
			rtl: rtl_setting,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});
	}
	if (jQuery(".featured-product-active").length > 0) {
		let featuredproduct = new Swiper(".featured-product-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			observer: true,
			observeParents: true,
			rtl: rtl_setting,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".featured-button-next",
				prevEl: ".featured-button-prev",
			},
			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});
	}
	if (jQuery(".portfolio-active-style-2").length > 0) {
		let portfolio2 = new Swiper(".portfolio-active-style-2", {
			slidesPerView: 1,
			spaceBetween: 40,
			loop: true,
			observer: true,
			observeParents: true,
			rtl: rtl_setting,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
			},
			pagination: {
				el: ".portfolio-pagination",
				clickable: true,
			},
		});
	}
	if (jQuery(".portfolio-active-style-3").length > 0) {
		let portfolio3 = new Swiper(".portfolio-active-style-3", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			observer: true,
			observeParents: true,
			autoplay: false,
			rtl: rtl_setting,
			breakpoints: {
				600: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
			pagination: {
				el: ".portfolio-pagination",
				clickable: true,
			},
		});
	}
	const testitmonial = new Swiper(".testimonial-content-style-2", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		observer: true,
		observeParents: true,
		rtl: rtl_setting,
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
	const testitmonial4 = new Swiper(".testimonial-content-style-4", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: false,
		observer: true,
		observeParents: true,
		rtl: rtl_setting,
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
		},
	});
	var testthumb = new Swiper(".testimonial-thumb", {
		spaceBetween: 10,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		observer: true,
		observeParents: true,
		rtl: rtl_setting,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 2,
			},
		},
	});
	var swiper2 = new Swiper(".testimonial-content-slide", {
		spaceBetween: 10,
		loop: true,
		rtl: rtl_setting,
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		thumbs: {
			swiper: testthumb,
		},
	});
	var testthumb3 = new Swiper(".testimonial-thumb3", {
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		centeredSlides: true,
		loop: true,
		observer: true,
		observeParents: true,
		rtl: rtl_setting,
	});
	var swiper3 = new Swiper(".testimonial-content-slide3", {
		spaceBetween: 10,
		loop: true,
		rtl: rtl_setting,
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		thumbs: {
			swiper: testthumb3,
		},
	});
	if (jQuery(".instagram-slider-active").length > 0) {
		let instagramslider = new Swiper(".instagram-slider-active", {
			slidesPerView: 2,
			spaceBetween: 0,
			loop: true,
			observer: true,
			observeParents: true,
			rtl: rtl_setting,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				500: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 6,
				},
				1400: {
					slidesPerView: 7,
				},
				1600: {
					slidesPerView: 8,
				},
			},
		});
	}
	const blogThumb = new Swiper(".blog-thumb-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		observer: true,
		observeParents: true,
		rtl: rtl_setting,
		pagination: {
			el: ".blog-thumb-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".blog-thumb-button-next",
			prevEl: ".blog-thumb-button-prev",
		},
	});
	$(".go-top").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});
	$(function () {
		$(".beforeAfter").beforeAfter({
			movable: true,
			clickMove: true,
			alwaysShow: true,
			position: 50,
			opacity: 0.4,
			activeOpacity: 1,
			hoverOpacity: 0.8,
			separatorColor: "#ffffff",
			bulletColor: "#ffffff",
			arrowColor: "#333333",
		});
	});
})(jQuery);