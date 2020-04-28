let btn__submit = document.querySelector('.btn__submit');

btn__submit.addEventListener('click', (e)=>{
    e.preventDefault();
    //  === validate.js ===

     // validate user input
    // validate__user();
    
    // validate list data
    validate__list();
});

let btn__start = document.querySelector('.btn__start');

btn__start.addEventListener('click', ()=>{
    let form = document.querySelector('.form');
    if (form.style.display == 'none') {
        form.style.display = 'grid';
    }
    else {
        form.style.display = 'none';
    }

    btn__start.style.display = 'none';
    // let title = document.querySelector('.title');
    // title.style.display = 'none';

    user__location.setAttribute('placeholder', 'destination');
    user__accom.setAttribute('placeholder', 'accommodation name');
    user__time.setAttribute('placeholder', 'length of stay');
    user__price.setAttribute('placeholder', 'price per night');
});
