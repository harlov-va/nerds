const buttonWrite = document.querySelector(`.write-us`);
const popup = document.querySelector(`.modal-appointment`);
const close = popup.querySelector(`.modal-close`);

const form = popup.querySelector(`form`);
const name = popup.querySelector(`[name=name]`);
const email = popup.querySelector(`[name=email]`);

const isStorageSupport = true;
let storage = ``;

try {
    storage = localStorage.getItem(`name`);
} catch(err) {
    isStorageSupport = false;
}

const toggleClass = (evt) => {
    evt.preventDefault();
    popup.classList.toggle(`modal-show`);
    if (storage) {
        name.value = storage;
        email.focus();
    } else {
        name.focus();
    }
}

buttonWrite.addEventListener(`click`, toggleClass);
close.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    popup.classList.remove(`modal-show`);
    popup.classList.remove(`modal-error`);
});

form.addEventListener(`submit`, (event) => {
    if (!name.value || !email.value) {
        event.preventDefault(); 
        popup.classList.remove(`modal-error`);
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add(`modal-error`);
    } else {
        if (isStorageSupport) {
            localStorage.setItem(`name`,name.value);
        }
    }
})

window.addEventListener(`keydown`,(evt) => {    
    if(evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains(`modal-show`)){
            popup.classList.remove(`modal-show`);
            popup.classList.remove(`modal-error`);
        }
    }
})