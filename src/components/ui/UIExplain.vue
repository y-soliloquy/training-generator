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
</style>
