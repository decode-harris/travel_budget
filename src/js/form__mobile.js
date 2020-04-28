// form__mobile();
views();
function views(mobile, tablet, desktop) {
    // this.tablet = 'tablet';
    // this.desktop = 'desktop';
    
    if (window.screen.width <= '700px' && window.screen.width <= '350px') {
        this.mobile = 'mobile';
        console.log('Active : mobile view');
    }
    if (window.screen.width >= '700px' && window.screen.width <= '960px') {
        this.mobile = 'tablet';
        console.log('Active : tablet view');
    }
    if (window.screen.width >= '960px') {
        this.mobile = 'desktop';
        console.log('Active : desktop view');
    } 
    else {
        // form__mobile;
    }
}



function form__mobile() {

    if (views == 'mobile') {
        let form__labels = document.querySelectorAll('label');
        // form__labels.style.display = 'none';
        user__location.setAttribute('placeholder', 'destination');
        user__accom.setAttribute('placeholder', 'accommodation name');
        user__time.setAttribute('placeholder', 'length of stay');
        user__price.setAttribute('placeholder', 'price per night');
    }
    if (views == 'desktop') {
        let form__labels = document.querySelectorAll('label');
        // form__labels.style.display = 'none';
        user__location.setAttribute('placeholder', 'destination');
        user__accom.setAttribute('placeholder', 'accommodation name');
        user__time.setAttribute('placeholder', 'length of stay');
        user__price.setAttribute('placeholder', 'price per night');
    }
    
}