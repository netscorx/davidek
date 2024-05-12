<template>
	<div>
		<div
			v-for="(field, id) in stepData.getFields()"
			v-bind:key="id"
			class="step-entry"
		>
			<FormField :form-field="stepData[field]" />
		</div>
	</div>
</template>

<script>
import FormField from "../FormField.vue";
import StepData from "@/js/StepData";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
	components: {
        FormField,
	},
})
export default class EntryFieldValues extends Vue {
	@Prop({type: StepData, required: true}) stepData;
}
</script>
