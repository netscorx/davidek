<template>
    <div>
        <div class="header">
            <h1>{{ stepHeader }}</h1>
        </div>
        <div class="content">
            <EntryFieldValues
                v-if="currentStep !== Steps.Summary"
                :step-data="stepData"
            />
            <Summary
                v-else
                :user-data="userData"
            />
        </div>
        <div class="footer">
            <div>
                <button
                    v-if="showBackButton"
                    @click="handleBackClick"
                >
                    {{ backButtonLabel }}
                </button>
            </div>
            <div>
                <button
                    @click="handleNextClick"
                >
                    {{ nextButtonLabel }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import EntryFieldValues from './steps/EntryFieldValues.vue';
import Summary from '@/components/form/steps/Summary';
import Steps from '@/js/Steps.js';
import UserData from '@/js/UserData.js';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        Summary,
        EntryFieldValues,
    },
})
export default class FormLayout extends Vue {
    data(){
        return {
            Steps: Steps,
            currentStep: Steps.ClientData,
            userData: new UserData(),
        };
    }

    get backButtonLabel(){
        return 'wstecz';
    }

    get nextButtonLabel(){
        if (this.currentStep !== Steps.Summary) {
            return 'dalej';
        } else {
            return 'Wyślij';
        }
    }

    /**
     *
     * @returns {boolean}
     */
    get showBackButton(){
        return this.currentStep !== Steps.ClientData;
    }

    /**
     * @returns{StepData}
     */
    get stepData(){
        if (this.currentStep === Steps.ClientData){
            return this.userData.clientData;
        } else if (this.currentStep === Steps.ContactAndAddressData){
            return this.userData.contactAndAddress;
        }
        return undefined;
    }

    /**
     *
     * @returns {string}
     */
     get stepHeader(){
        if (this.currentStep === Steps.ClientData) {
            return this.userData.clientData.getLabel();
        } else if (this.currentStep === Steps.ContactAndAddressData) {
            return this.userData.contactAndAddress.getLabel();
        } else if (this.currentStep === Steps.Summary) {
            return "Podsumowanie";
        }
        return '';
    }

    handleBackClick(){
        if (this.showBackButton){
            this.currentStep--;
        }
    }

    handleNextClick() {
        const allFieldsValid = Object.values(this.stepData).every(field => field.isValid());

        if (allFieldsValid) {
            this.currentStep++;
        } else {
            alert('Nie można przejść do następnego kroku, ponieważ nie wszystkie pola są prawidłowo podane.');
        }
    }

    /**
     *
     * @returns {boolean}
     */
    isValidStep(){
        return this.userData.isValidStepData(this.currentStep);
    }

    sendMail(){
        window.location = this.userData.getMailtoData();
    }
}
</script>
