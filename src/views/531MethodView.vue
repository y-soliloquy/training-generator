<script setup lang="ts">
import UITitle from "../components/ui/UITitle.vue";
import UIExplain from "../components/ui/UIExplain.vue";
import UIInput from "../components/ui/UIInput.vue";

const title = "531プログラム";
const explain = "日々の体調の揺れに対応できるプログラムです。";
</script>

<template>
	<UITitle :title="title" />
	<UIExplain :explain="explain" />
	<UIInput />
</template>

<style></style>
