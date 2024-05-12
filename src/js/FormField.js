export class FormField {
    /**
     *
     * @param {string}label
     * @param {Validator}validator
     */
    constructor(label, validator) {
        this.label = label;
        this.value = '';
        this.validator = validator;
    }

    /**
     *
     * @returns {boolean}
     */
    isValid() {
        return this.validator.isValid(this.value);
    }

    /**
     *
     * @returns {string}
     */
    printForSummary() {
        return this.label + ': ' + this.printValue();

    }

    printForMail() {
        return `${this.label}: ${this.printValue()}\n`;
    }

    /**
     *
     * @returns {string}
     */
    printValue() {
        if (this.value.length === 0) {
            return '-';
        }
        return this.value;
    }
}