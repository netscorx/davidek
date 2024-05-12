import ClientData from '@/js/ClientData';
import ContactAndAddress from '@/js/ContactAndAddress';
import Steps from '@/js/Steps';

export default class UserData {

    constructor() {
        this.clientData = new ClientData();
        this.contactAndAddress = new ContactAndAddress();
    }

    /**
     *
     * @returns {string}
     */
    getMailtoData() {
        return `mailto:email@example.com?subject=${encodeURIComponent(
            'Dane z formularza',
        )}&body=${this._getSendData()}&`;
    }

    /**
     *
     * @param {Steps}step
     * @returns {boolean}
     */
    isValidStepData(step) {
        switch (step) {
            case Steps.ClientData:
                return this.clientData.isValid();
            case Steps.ContactAndAddressData:
                return this.contactAndAddress.isValid();
            default:
                return true;
        }
    }

    /**
     *
     * @returns {string}
     */
    printSummary() {
        return `
        <p>${this.clientData.printSummary()}</p>
        <p>${this.contactAndAddress.printSummary()}</p>
        `;
    }

    /**
     *
     * @returns {string}
     * @private
     */
    _printForMail() {
        return `
            ${this.clientData.printForMail()}\n
            ${this.contactAndAddress.printForMail()}\n
			`;
    }

    /**
     *
     * @returns {string}
     * @private
     */
    _getSendData() {
        return window.encodeURIComponent(this._printForMail());
    }
}
