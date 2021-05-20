const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

const ModalOpen = () => {
    modalElem.classList.remove('hidden');
};

const ModalClose = () => {
    modalElem.classList.add('hidden');
};

moreElems.forEach(more => {
    more.addEventListener('click', ModalOpen);
})

modalElem.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        ModalClose();
    }
})