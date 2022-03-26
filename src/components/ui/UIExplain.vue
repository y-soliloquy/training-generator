<script setup lang="ts">
import { defineProps } from "vue";

type Props = {
	explain: string;
};

const props = defineProps<Props>();
</script>

<template>
	<div class="UIExplain">{{ props.explain }}</div>
</template>

<style>
.UIExplain {
	padding: 30px 0px;
}
</style>
