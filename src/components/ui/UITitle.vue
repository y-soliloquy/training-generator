<script setup lang="ts">
import { defineProps } from "vue";

type Props = {
	title: string;
};

const props = defineProps<Props>();
</script>

<template>
	<div class="UITitle">{{ props.title }}</div>
</template>

<style>
.UITitle {
	padding: 10px 0px;
	text-align: center;
	font-size: 30px;
	font-weight: bold;
}
</style>
