<script setup lang="ts">
import { defineEmits, defineProps, computed } from "vue";
type Props = {
	size: string;
};
const props = defineProps<Props>();
const emit = defineEmits(["click"]);
const click = () => {
	emit("click");
};
const className = computed(() => {
	let _classNameList = [];

	if (props.size) {
		_classNameList.push("_" + props.size);
	}

	return _classNameList.join(" ");
});
</script>

<template>
	<button class="UIButton" :class="className" @click="click"><slot></slot></button>
</template>

<style>
.UIButton._small {
	width: 90px;
	padding: 6px 12px;
	font-size: 15px;
	border-radius: 15px;
	background-color: #42b983;
	border: solid 1px #42b983;
	color: white;
}
.UIButton._large {
	width: 250px;
	padding: 6px 12px;
	font-size: 25px;
	border-radius: 25px;
	background-color: #42b983;
	border: solid 1px #42b983;
	color: white;
}
.UIButton:disabled {
	opacity: 0.5;
}
</style>
