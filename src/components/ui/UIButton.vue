<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["click"]);
const click = () => {
	emit("click");
};
</script>

<template>
	<button class="UIButton" @click="click"><slot></slot></button>
</template>

<style>
.UIButton {
	width: 90px;
	padding: 6px 12px;
	font-size: 15px;
	border-radius: 15px;
	background-color: #42b983;
	border: solid 1px #42b983;
	color: white;
}
.UIButton:disabled {
	opacity: 0.5;
}
</style>
