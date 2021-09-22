export class AssociatingElements {

    generateIncorrectError() {
        let alertElement = document.createElement('li');
        alertElement.innerText = 'I am an error!';
        this.incorrectAlerts.appendChild(alertElement);
    }

    generateCorrectError() {
        let alertElement = document.createElement('li');
        alertElement.innerText = 'I am an error!';
        this.correctAlerts.appendChild(alertElement);
    }

}