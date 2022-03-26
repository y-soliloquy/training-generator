<script setup lang="ts">
import { defineProps } from "vue";
type Props = {
	text: string;
};
const props = defineProps<Props>();
</script>

<template>
	<div>{{ props.text }}</div>
</template>

<style></style>
