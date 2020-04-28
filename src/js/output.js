// variables : list class element
let lists = document.querySelector('.lists');

// function : create list elments
function create__list() {

    if (user__location.value == '') {
        
    }
    if (user__accom.value == '') {
        
    }
    if (user__time.value == '') {
        
    }
    if (user__price.value == '') {
        // validate__list();
    }
    else {
        // create an un-ordered list
        let ul = document.createElement('ul');
        
        // provide a visual for the user with list elements
        let li__location = document.createElement('li');
        li__location.innerHTML = 'destination :' +  user__location.value;
        
        let li__accommodation = document.createElement('li');
        li__accommodation.innerHTML = 'accommodation :' +  user__accom.value;

        let li__price = document.createElement('li');
        li__price.innerHTML = 'cost per night' +  user__price.value;

        let li__time = document.createElement('li');
        li__time.innerHTML =  'nights : ' +  user__time.value;

        

        let li__total = document.createElement('li');
        li__total.innerHTML = 'total : ' +  user__price.value * user__time.value;
        console.log(li__total);

        // provide user with delete btn for list
        
        ul.appendChild(li__location);
        ul.appendChild(li__accommodation)
        ul.appendChild(li__time);
        ul.appendChild(li__total);
        // ul.appendChild(li__price);
        
        lists.appendChild(ul);
    
    }
    
    // === validate.js ===
    validate__user();
    
    form__reset();   
}

// function : form reset
function form__reset() {
    user__location.value = '';
    user__accom.value = '';
    user__time.value = '';
    user__price.value = '';
}