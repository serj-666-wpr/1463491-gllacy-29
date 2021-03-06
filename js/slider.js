const page = document.querySelector(".page-body");
const slider = document.querySelector(".slider");

const firstSlide = document.querySelector(".slide-control-one");
const secondSlide = document.querySelector(".slide-control-two");
const thirdSlide = document.querySelector(".slide-control-tree");

const firstText = document.querySelector(".slider-item-first");
const secondText = document.querySelector(".slider-item-second");
const thirdText = document.querySelector(".slider-item-third");

firstSlide.addEventListener("click", function () {
	firstSlide.classList.add("current");
	secondSlide.classList.remove("current");
	thirdSlide.classList.remove("current");

	page.classList.add("page-background-green");
	page.classList.remove("page-background-blue");
	page.classList.remove("page-background-chocolate");

	firstText.classList.add("visible");
	secondText.classList.remove("visible");
	thirdText.classList.remove("visible");

	slider.classList.remove("animation-slider");
	slider.offsetWidth = page.offsetWidth;
	slider.classList.add("animation-slider");
});

secondSlide.addEventListener("click", function () {
	firstSlide.classList.remove("current");
	secondSlide.classList.add("current");
	thirdSlide.classList.remove("current");

	page.classList.remove("page-background-green");
	page.classList.add("page-background-blue");
	page.classList.remove("page-background-chocolate");

	firstText.classList.remove("visible");
	secondText.classList.add("visible");
	thirdText.classList.remove("visible");

	slider.classList.remove("animation-slider");
	slider.offsetWidth = page.offsetWidth;
	slider.classList.add("animation-slider");
});

thirdSlide.addEventListener("click", function () {
	firstSlide.classList.remove("current");
	secondSlide.classList.remove("current");
	thirdSlide.classList.add("current");

	page.classList.remove("page-background-green");
	page.classList.remove("page-background-blue");
	page.classList.add("page-background-chocolate");

	firstText.classList.remove("visible");
	secondText.classList.remove("visible");
	thirdText.classList.add("visible");

	slider.classList.remove("animation-slider");
	slider.offsetWidth = page.offsetWidth;
	slider.classList.add("animation-slider");
});