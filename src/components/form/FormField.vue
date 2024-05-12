<template>
    <div>
        <div class="label">
            {{ formField.label }}
        </div>
        <input
            v-model="formField.value"
            :placeholder="formField.label"
            type="text"
        />
    </div>
</template>
<script>
import Vue from "vue";
import { FormField } from "@/js/FormField";
import { Prop, Component } from "vue-property-decorator";

@Component({
	components: {
		
	},
})
export default class FormEntry extends Vue {
	@Prop({ type: FormField, required: true }) formField;
}
</script>

