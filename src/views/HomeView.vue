<script setup lang="ts">
// import { defineComponent } from "vue";
// import { Ref } from 'vue';
import { reactive } from "vue";
import HelloVisitors from "@/components/HelloVisitors.vue";
import UITitle from "../components/ui/UITitle.vue";
import UIButton from "../components/ui/UIButton.vue";
import Modal from "@/components/Modal.vue";
// export default defineComponent({
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// });
const state = reactive({
	isVisible: false,
});
const title = "筋トレメニュージェネレーター";
const text = "筋トレのメニューを自動生成します";

const openModal = () => {
	state.isVisible = true;
};

const closeModal = () => {
	state.isVisible = false;
};
</script>

<template>
	<div class="HomeView">
		<Modal :isVisible="state.isVisible" @onClickClose="closeModal" />
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<UITitle :title="title" titleType="normal" />
		<div class="HomeView-Logo">
			<img src="../assets/logo_top.png" />
		</div>
		<HelloVisitors :text="text" />
		<UIButton @click="openModal" class="HomeView-Button" size="large">チュートリアル</UIButton>
	</div>
</template>

<style>
.HomeView {
	height: 100%;
}

.HomeView-Logo {
	width: 400px;
	height: auto;
	margin: 0px auto;
}

.HomeView-Logo > img {
	width: 100%;
	height: auto;
}

.HomeView-Button {
	margin: 80px auto;
}
</style>
