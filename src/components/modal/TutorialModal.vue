<script setup lang="ts">
import UITitle from "../ui/UITitle.vue";
import UIButton from "../ui/UIButton.vue";
import { defineEmits } from "vue";

const title = "－チュートリアル－";

const emits = defineEmits(["onClickClose"]);
const onClickClose = () => {
	emits("onClickClose", false);
};
</script>

<template>
	<div class="TutorialModal">
		<UITitle :title="title" />
		<UIButton class="TutorialModal-Button" size="large" @click="onClickClose">閉じる</UIButton>
	</div>
</template>

<style>
.TutorialModal {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 900px;
	height: 100%;
}

.TutorialModal-Button {
	position: absolute;
	bottom: 30px;
}
</style>
