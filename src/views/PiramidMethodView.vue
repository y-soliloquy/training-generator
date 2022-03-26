<script setup lang="ts">
import UITitle from "../components/ui/UITitle.vue";
import UIExplain from "../components/ui/UIExplain.vue";
import UIInput from "../components/ui/UIInput.vue";

const title = "ピラミッド法";
const explain =
	"オーソドックスに着実に筋肥大と筋力アップを目指す場合、ピラミッド法が適しています。";
</script>

<template>
	<UITitle :title="title" />
	<UIExplain :explain="explain" />
	<UIInput />
</template>

<style></style>
