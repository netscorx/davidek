import { FormField } from "@/js/FormField";
import Validators from "@/js/Validators";
import StepData from "./StepData";

export default class ClientData extends StepData {

	constructor() {
		super();
		this.firstName = new FormField(
			"Imię",
			Validators.NOT_EMPTY_STRING,
		);
		this.secondName = new FormField(
			"Drugie imię",
			Validators.NOT_EMPTY_STRING_NOT_REQUIRED,
		);
		this.lastName = new FormField(
			"Nazwisko",
			Validators.NOT_EMPTY_STRING,
		);
	}
	getLabel() {
		return "Dane klienta";
	}
	printSummary() {
        return `
			<p><strong>${this.getLabel()}:</strong></p>
            <p>Imię: ${this.firstName.printValue()}</p>
            <p>Drugie imię: ${this.secondName.printValue()}</p>
            <p>Nazwisko: ${this.lastName.printValue()}</p>
        `;
    }
}
