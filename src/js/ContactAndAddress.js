import { FormField } from "@/js/FormField";
import Validators from "@/js/Validators";
import StepData from "./StepData";

export default class ContactAndAddress extends StepData {

	constructor() {
		super();
		this.email = new FormField("Email", Validators.EMAIL);
		this.phoneNumber = new FormField("Telefon", Validators.PHONE_NUMBER);
		this.street = new FormField("Ulica", Validators.NOT_EMPTY_STRING);
		this.houseNumber = new FormField("Numer domu", Validators.NUMBER_REQUIRED);
		this.apartmentNumber = new FormField("Numer mieszkania", Validators.NUMBER_NOT_REQUIRED);
		this.postalCode = new FormField("Kod pocztowy", Validators.POSTAL_CODE);
		this.city = new FormField("Miasto", Validators.NOT_EMPTY_STRING);
	}
	getLabel() {
		return "Dane kontaktowe oraz adresowe";
	}
	printSummary() {
        return `
			<p><strong>${this.getLabel()}:</strong></p>
            <p>Email: ${this.email.printValue()}</p>
            <p>Telefon: ${this.phoneNumber.printValue()}</p>
            <p>Ulica: ${this.street.printValue()}</p>
            <p>Numer domu: ${this.houseNumber.printValue()}</p>
            <p>Numer mieszkania: ${this.apartmentNumber.printValue()}</p>
            <p>Kod pocztowy: ${this.postalCode.printValue()}</p>
            <p>Miasto: ${this.city.printValue()}</p>
        `;
    }
}