const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close"),
	navItem = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
	navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu");
});
function removeMenu() {
	navMenu.classList.remove("show-menu");
}

navItem.forEach((n) => n.addEventListener("click", removeMenu));

const skillsContent = document.querySelectorAll(".skills__content"),
	skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
	let itemClass = this.parentNode.className;

	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills__content skills__close";
	}

	if (itemClass === "skills__content skills__close") {
		this.parentNode.className = "skills__content skills__open";
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener("click", toggleSkills);
});

const tabs = document.querySelectorAll("[data-target]"),
	tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
	tab.addEventListener("click", function () {
		const target = document.querySelector(tab.dataset.target);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("qualification__active");
		});
		target.classList.add("qualification__active");
		tab.forEach((tab) => {
			tab.classList.remove("qualification__active");
		});
		tab.classList.add("qualification__active");
	});
});

const themebtn = document.getElementById("theme-btn");
const body = document.querySelector("body");
const header = document.querySelector("header");
const iconTheme = "fa-sun";

const getCurrentIcon = () =>
	themebtn.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

console.log(getCurrentIcon());
themebtn.addEventListener("click", function () {
	body.classList.toggle("dark-theme");
	themebtn.classList.toggle(iconTheme);
});
