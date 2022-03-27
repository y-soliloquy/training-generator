<script setup lang="ts">
import UITitle from "../ui/UITitle.vue";
import UIButton from "../ui/UIButton.vue";
import UIExplain from "../ui/UIExplain.vue";
import { defineEmits } from "vue";

const title = "チュートリアル";
const explain =
	"あなたのMAX重量を入力すると各トレーニングプログラムに適したメニューが自動で生成されます。<br />＊ベンチプレス、スクワット、デッドリフトのBIG3向けです。<br />このアプリケーションを使うことでトレーニング時の重量計算という煩わしさから解放されます。";

const emits = defineEmits(["onClickClose"]);
const onClickClose = () => {
	emits("onClickClose", false);
};
</script>

<template>
	<div class="TutorialModal">
		<UITitle :title="title" titleType="sub" />
		<UIExplain :explain="explain" />
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
	padding: 20px 0px;
}

.TutorialModal-Button {
	position: absolute;
	bottom: 30px;
}
</style>
