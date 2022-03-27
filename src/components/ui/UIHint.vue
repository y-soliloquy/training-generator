<script setup lang="ts">
import { defineProps } from "vue";

type Props = {
	isCheckCalculateAvailable: boolean;
	isCheckResetAvailable: boolean;
	isInterval: boolean;
};

const props = defineProps<Props>();
</script>

<template>
	<div class="UIHint">
		<span v-if="!props.isInterval && !props.isCheckCalculateAvailable" class="UIHint-Input"
			>半角数字で入力してください。</span
		><span v-if="props.isCheckCalculateAvailable" class="UIHint-Calculate">計算できます。</span
		><span v-if="props.isInterval && props.isCheckResetAvailable" class="UIHint-Reset"
			>再計算する場合にはリセットしてください。</span
		>
	</div>
</template>

<style>
.UIHint {
	padding: 20px 0px 0px 0px;
}
.UIHint-Input {
	color: red;
}
.UIHint-Calculate {
	color: #42b983;
}
.UIHint-Reset {
	color: #42b983;
}
</style>
