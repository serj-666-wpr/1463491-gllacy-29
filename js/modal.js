const modalOpen = document.querySelector(".our-contacts-button");
const modal = document.querySelector(".modal");
const modalClose = modal.querySelector(".modal-close");
const modalForm = modal.querySelector(".modal-form");
const modalName = modal.querySelector(".name");
const modalEmail = modal.querySelector(".email");
const modalLetter = modal.querySelector(".letter");
const modalButton = modal.querySelector(".modal-button");

let isStorageSupport = true;
let storage = "";

try {
	storage = localStorage.getItem("name");
} catch (err) {
	isStorageSupport = false;
}

/*Open*/
modalOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.add("modal-open");
	page.classList.add("page-body-dimmer");
	if (storage) {
		modalName.value = storage;
		modalEmail.focus();
	} else {
		modalName.focus();
	}
});

/*Close*/
modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("modal-open");
	modal.classList.remove("modal-error");
	page.classList.remove("page-body-dimmer");
});

document.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		modal.classList.remove("modal-open");
		modal.classList.remove("modal-error");
		page.classList.remove("page-body-dimmer");
	}
});

/*Valid*/
modalButton.addEventListener("click", function (evt) {
	if (!modalName.value || !modalEmail.value || !modalLetter) {
		evt.preventDefault();
		modal.classList.remove("modal-error");
		modal.offsetWidth = modal.offsetWidth;
		modal.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", modalName.value);
		}
	}
});
