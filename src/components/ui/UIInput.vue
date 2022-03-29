<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, computed } from "vue";
// const emit = defineEmits(["input"]);

const props = withDefaults(
	defineProps<{
		modelValue: number | any;
		isInterval: boolean;
	}>(),
	{
		modelValue: null,
		isInterval: false,
	}
);

const emit = defineEmits<{
	(e: "update:modelValue", weight: number): number;
}>();

const weight = computed({
	get: () => props.modelValue,
	set: (value) => {
		// 値に変更があると呼ばれるsetter
		emit("update:modelValue", value);
	},
});

// type Props = {
// 	number: number;
// };

// defineProps<Props>();
</script>

<template>
	<div class="UIInput">
		<span class="UIInput-Label">MAX重量 </span>
		<!-- <input
			type="number"
			v-model="weight"
			onkeydown="return event.keyCode !== 69"
			@input="emit('input', $event.target)"
		/> -->
		<input
			type="number"
			inputmode="numeric"
			min="0"
			v-model="weight"
			onkeydown="return event.keyCode !== 69"
			:disabled="props.isInterval"
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
