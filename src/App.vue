<template>
	<div id="app">
		<Form />
	</div>
</template>

<script>
import Form from "./components/form/Form.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
	components: {
        Form,
	},
})
export default class App extends Vue {}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
