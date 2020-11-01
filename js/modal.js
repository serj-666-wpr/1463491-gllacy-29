const modalOpen = document.querySelector(".button-write-us");
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
	modal.classList.add("modal-current");
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
	modal.classList.remove("modal-current");
	modal.classList.remove("modal-error");
});

document.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		modal.classList.remove("modal-current");
		modal.classList.remove("modal-error");
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
	if (!modalName.value) {
		modalName.classList.add("invalid");
	}
	if (!modalEmail.value) {
		modalEmail.classList.add("invalid");
	}
	if (!modalLetter.value) {
		modalLetter.classList.add("invalid");
	}
});
