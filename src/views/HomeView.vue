<script setup lang="ts">
// import { defineComponent } from "vue";
// import { Ref } from 'vue';
import HelloVisitors from "@/components/HelloVisitors.vue";
// export default defineComponent({
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// });
const text = "筋トレのメニューを自動生成します";
</script>

<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<HelloVisitors :text="text" />
	</div>
</template>
