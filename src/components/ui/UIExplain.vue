<script setup lang="ts">
import { defineProps } from "vue";

type Props = {
	explain: string;
};

const props = defineProps<Props>();
</script>

<template>
	<div class="UIExplain" v-html="props.explain"></div>
</template>

<style>
.UIExplain {
	padding: 30px 30px;
	line-height: 2;
}

@media (max-width: 480px) {
	.UIExplain {
		font-size: 15px;
		padding: 20px 20px;
	}
}
</style>
