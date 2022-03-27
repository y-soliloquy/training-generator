<script setup lang="ts">
import { defineProps, computed } from "vue";

type Props = {
	title: string;
	titleType: string;
};

const props = defineProps<Props>();

const className = computed(() => {
	let _classNameList = [];

	if (props.titleType) {
		_classNameList.push("_" + props.titleType);
	}

	return _classNameList.join(" ");
});
</script>

<template>
	<div class="UITitle" :class="className">{{ props.title }}</div>
</template>

<style>
.UITitle._normal {
	padding: 10px 0px;
	text-align: center;
	font-size: 30px;
	font-weight: bold;
}
.UITitle._sub {
	padding: 10px 0px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
}
</style>
