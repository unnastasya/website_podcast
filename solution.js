let menuBtn = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
menuBtn.addEventListener("click", function () {
	menuBtn.classList.toggle("active");
	menu.classList.toggle("active");
});

let menuItem = document.querySelectorAll(".header__nav__item");
menuItem.forEach((el) => {
	el.addEventListener("click", function () {
		menuBtn.classList.remove("active");
		menu.classList.remove("active");
	});
});
