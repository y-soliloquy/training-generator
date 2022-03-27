<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["input"]);
type Props = {
	value: number;
};

const props = defineProps<Props>();
</script>

<template>
	<div class="UIInput">
		<span class="UIInput-Label">MAX重量 </span>
		<input
			type="number"
			:value="props.value"
			onkeydown="return event.keyCode !== 69"
			@input="emit('input', $event.target)"
		/>
	</div>
</template>

<style>
.UIInput {
	text-align: center;
}

.UIInput > input {
	width: 200px;
	height: 30px;
	padding-left: 10px;
	line-height: 1.5;
	font-size: 20px;
}

.UIInput-Label {
	font-size: 18px;
}

@media (max-width: 480px) {
	.UIInput {
		padding: 20px 0px;
	}

	.UIInput > input {
		font-size: 18px;
	}
}
</style>
