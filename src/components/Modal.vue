<script setup lang="ts">
import { ref, Ref, defineProps, defineEmits } from "vue";
import TutorialModalVue from "./modal/TutorialModal.vue";

type Props = {
	isVisible: boolean;
};

const props = defineProps<Props>();

const emits = defineEmits(["onClickClose"]);
const onClickClose = () => {
	emits("onClickClose");
};
</script>

<template>
	<section v-if="props.isVisible" class="Modal">
		<div class="Modal-Box">
			<TutorialModalVue @onClickClose="onClickClose" />
		</div>
	</section>
</template>

<style>
.Modal {
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.1);
	padding: 0.5em;
	display: flex;
	justify-content: center;
	align-items: center;
}

.Modal-Box {
	position: relative;
	min-height: 320px;
	max-height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
