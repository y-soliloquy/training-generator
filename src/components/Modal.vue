<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
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
	<transition name="Modal-TS">
		<section v-if="props.isVisible" class="Modal">
			<div class="Modal-Box">
				<TutorialModalVue @onClickClose="onClickClose" />
			</div>
		</section>
	</transition>
</template>

<style>
.Modal {
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.1);
	background-size: cover;
	padding: 0.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;

	background-attachment: fixed;
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

/* transition */

.Modal-TS-enter-active {
	transition: opacity 0.2s linear;
}

.Modal-TS-leave-active {
	transition: opacity 0.2s linear;
}

.Modal-TS-enter,
.Modal-TS-leave-to {
	opacity: 0;
}

.Modal-TS-enter-active .Modal-Box {
	transition: transform 0.2s ease-out;
}

.Modal-TS-leave-active .Modal-Box {
	transition: transform 0.2s linear;
}

.Modal-TS-enter .Modal-Box,
.Modal-TS-leave-to .Modal-Box {
	transform: scale(0.9);
}

/* @media (max-width: 480px) {
	.Modal {
		position: fixed;
	}
} */
</style>
