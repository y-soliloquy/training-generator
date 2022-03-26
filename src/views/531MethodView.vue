<script setup lang="ts">
import UITitle from "../components/ui/UITitle.vue";
import UIExplain from "../components/ui/UIExplain.vue";
import UIInput from "../components/ui/UIInput.vue";
import UIFlexBox from "../components/ui/UIFlexBox.vue";
import UIButton from "../components/ui/UIButton.vue";

import { ref, Ref } from "vue";

let weight: Ref<number> = ref(0);

const title = "531プログラム";
const explain = "日々の体調の揺れに対応できるプログラムです。";
</script>

<template>
	<UITitle :title="title" />
	<UIExplain :explain="explain" />
	<UIInput :value="weight" />
	<UIFlexBox>
		<UIButton>計算</UIButton>
		<UIButton>リセット</UIButton>
	</UIFlexBox>
</template>

<style></style>
