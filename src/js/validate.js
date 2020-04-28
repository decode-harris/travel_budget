// variables : user input selectors
let user__location = document.querySelector('#location');
let user__accom = document.querySelector('#accom');
let user__time = document.querySelector('#time');
let user__price = document.querySelector('#price');

// function : validate user input & display user errors
function validate__list() {

    if (user__location.value == '') {
            
        user__location.style.border = '2px solid red';
        user__location.style.color = 'red';
        user__location.setAttribute('placeholder', 'add a destination');
    }

    if (user__accom.value == '') {
            
        user__accom.style.border = '2px solid red';
        user__accom.style.color = 'red';
        user__accom.setAttribute('placeholder', 'add accommodation name');
    }

    if (user__time.value == '') {
            
        user__time.style.border = '2px solid red';
        user__time.style.color = 'red';
        user__time.setAttribute('placeholder', 'add a timeframe');
    }

    if (user__price.value == '') {
            
        user__price.style.border = '2px solid red';
        user__price.style.color = 'red';
        user__price.setAttribute('placeholder', 'add price per night');
    }

    else {
        user__location.style.border = '2px solid green';
        user__accom.style.border = '2px solid green';
        user__time.style.border = '2px solid green';
        user__price.style.border = '2px solid green';

        user__location.style.color = 'green';
        user__accom.style.color = 'green';
        user__time.style.color = 'green';
        user__price.style.color = 'green';
        
        
    }
    
    // == output.js ===
    create__list(); // create lists displaying user input

}

// function : user input
function validate__user() {

    if (user__location.value != '') {
        console.log(user__location.value);
    }
    if (user__accom.value != '') {
        console.log(user__accom);
    }
    if (user__price.value != '') {
        console.log(user__price);
    }
    if (user__time.value != '') {
        console.log(user__time);
    }

    //  === calc.js ===
    calc__values();  // calculate values after validation

};


