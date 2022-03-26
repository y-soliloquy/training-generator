<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["input"]);
</script>

<template>
	<div class="UIInput">
		<span class="UIInput-Label">MAX重量 </span>
		<input type="text" @input="emit('input', $event.target)" />
	</div>
</template>

<style>
.UIInput {
	text-align: center;
}

.UIInput > input {
	width: 200px;
	height: 30px;
}

.UIInput-Label {
	font-size: 18px;
}
</style>
