'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal');
const overlay = $('.overlay');
const btnCloseModal = $('.close-modal');
const btnOpenModals = $$('.show-modal');

const openModal = () => {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

btnOpenModals.forEach(item => {
	item.addEventListener('click', openModal);
});

const closeModal = () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
