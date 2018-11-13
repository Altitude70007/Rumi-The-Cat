/*global $, window, AOS*/
$(function () {
	'use strict';
	$(window).scroll(function () {
		var top = $(window).scrollTop();
		if (top >= 60) {
			$('nav').addClass('secondary');
		} else {
			$('nav').removeClass('secondary');
		}
	});
	AOS.init({
		disable: window.innerWidth < 767,
		duration: 2000
	})
});