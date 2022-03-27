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
.UIButton {
	background-color: #42b983;
	border: solid 1px #42b983;
	color: white;
	box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.205);
	cursor: pointer;
	outline: none;
}

.UIButton._small {
	width: 90px;
	padding: 6px 12px;
	font-size: 15px;
	border-radius: 15px;
}
.UIButton._small:hover {
	background-color: #38c284;
}
.UIButton._small:active {
	border: solid 1px #23704d;
	background-color: #205d42;
	box-shadow: none;
	outline: none;
	position: relative;
	top: 2px;
}

.UIButton._medium {
	width: 200px;
	padding: 6px 12px;
	font-size: 20px;
	border-radius: 25px;
}

.UIButton._medium:hover {
	background-color: #38c284;
}

.UIButton._medium:active {
	border: solid 1px #23704d;
	background-color: #205d42;
	box-shadow: none;
	outline: none;
	position: relative;
	top: 2px;
}

.UIButton._large {
	width: 250px;
	padding: 6px 12px;
	font-size: 25px;
	border-radius: 25px;
}

.UIButton._large:hover {
	background-color: #38c284;
}

.UIButton._large:active {
	border: solid 1px #23704d;
	background-color: #205d42;
	box-shadow: none;
	outline: none;
	position: relative;
	top: 2px;
}

.UIButton:disabled {
	opacity: 0.5;
}

@media (max-width: 480px) {
	.UIButton._small {
		font-size: 15px;
		width: 120px;
	}
	.UIButton._medium {
		font-size: 20px;
		width: 170px;
	}
	.UIButton._large {
		font-size: 20px;
		width: 220px;
	}
}
</style>
