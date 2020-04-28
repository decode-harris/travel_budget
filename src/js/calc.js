let calc__total = document.querySelector('.calc__total');
let calc__time = document.querySelector('.calc__time');
let calc__accom = document.querySelector('.calc__accom');
let calc__country = document.querySelector('.calc__country');

// function : calculate values
function calc__values() {

    console.log(user__time.value);
    console.log(user__price.value);
    console.log(user__time.value + user__price.value);


    calc__time.innerHTML = user__time.value;
    calc__accom.innerHTML = '$' + user__time.value * user__price.value;

    calc__total.innerHTML = calc__accom.innerHTML;

    calc__country.innerHTML = user__location.value;
    
    // === output.js ===
    form__reset(); // reset form after calcuations are complete
}