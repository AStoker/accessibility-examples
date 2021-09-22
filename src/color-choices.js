
export class ColorChoices {
    toggle(ev) {
        let elem = ev.target;
        
        if (elem.classList.contains('active')) {
            elem.classList.remove('active');
        } else {
            elem.classList.add('active');
        }
    }
}