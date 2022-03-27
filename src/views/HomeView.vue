<script setup lang="ts">
// import { defineComponent } from "vue";
// import { Ref } from 'vue';
import HelloVisitors from "@/components/HelloVisitors.vue";
import UITitle from "../components/ui/UITitle.vue";
// export default defineComponent({
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// });
const title = "筋トレメニュージェネレーター";
const text = "筋トレのメニューを自動生成します";
</script>

<template>
	<div class="HomeView">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<UITitle :title="title" />
		<div class="HomeView-Logo">
			<img src="../assets/logo_top.png" />
		</div>
		<HelloVisitors :text="text" />
	</div>
</template>

<style>
.HomeView-Logo {
	width: 400px;
	height: auto;
	margin: 0px auto;
}

.HomeView-Logo > img {
	width: 100%;
	height: auto;
}
</style>
