<script setup lang="ts">
import UITitle from "../components/ui/UITitle.vue";
import UIExplain from "../components/ui/UIExplain.vue";
import UIInput from "../components/ui/UIInput.vue";
import UIFlexBox from "../components/ui/UIFlexBox.vue";
import UIButton from "../components/ui/UIButton.vue";
import UIHint from "../components/ui/UIHint.vue";

import { ref, Ref, reactive, computed } from "vue";

let weight: Ref<number> = ref(0);

const state = reactive({
	isCalculated: false,
	isCalculateAvailable: false,
	isInterval: false,
});

const input = (event: { value: string }) => {
	if (!state.isInterval) {
		weight.value = Number(event.value);
	}
};

const calcWeight = (percentage: number) => {
	const result: number = weight.value * (percentage / 100);
	return result;
};

const onClickCalc = () => {
	state.isCalculated = true;
	state.isInterval = true;
};

const onClickReset = () => {
	weight.value = 0;
	state.isCalculated = false;
	state.isInterval = false;
};

const isCheckCalculateAvailable = computed(() => {
	return weight.value > 0 && !state.isInterval ? true : false;
});

const isCheckResetAvailable = computed(() => {
	return state.isCalculated ? true : false;
});

const title = "ピラミッド法";
const explain =
	"オーソドックスに着実に筋肥大と筋力アップを目指す場合、ピラミッド法が適しています。";

type menu = {
	id: string;
	number: number;
	percentage: number;
	count: number;
};

const menuList: menu[] = [
	{
		id: "1",
		number: 1,
		percentage: 60,
		count: 8,
	},
	{
		id: "2",
		number: 2,
		percentage: 70,
		count: 6,
	},
	{
		id: "3",
		number: 3,
		percentage: 80,
		count: 4,
	},
	{
		id: "4",
		number: 4,
		percentage: 70,
		count: 1000,
	},
	{
		id: "5",
		number: 5,
		percentage: 60,
		count: 1000,
	},
];
</script>

<template>
	<UITitle :title="title" titleType="normal" />
	<UIExplain :explain="explain" />
	<UIInput @input="input" :value="weight" />
	<UIHint
		:isCheckCalculateAvailable="isCheckCalculateAvailable"
		:isCheckResetAvailable="isCheckResetAvailable"
		:isInterval="state.isInterval"
	/>
	<UIFlexBox>
		<UIButton @click="onClickCalc" :disabled="!isCheckCalculateAvailable" size="small"
			>計算</UIButton
		>
		<UIButton @click="onClickReset" :disabled="!isCheckResetAvailable" size="small"
			>リセット</UIButton
		>
	</UIFlexBox>
	<table class="PiramidMethodView-Table">
		<tbody>
			<tr v-for="(menu, index) in menuList" :key="index">
				<th>{{ menu.number }}セット目</th>
				<td>
					<span v-if="!state.isCalculated">{{ menu.percentage }}%</span
					><span v-else>{{ calcWeight(menu.percentage) }}kg</span> x
					<span v-if="menu.count !== 1000">{{ menu.count }}回</span
					><span v-else>限界回数</span>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style>
.PiramidMethodView-Table {
	border-collapse: collapse;
	margin: 25px auto;
}
.PiramidMethodView-Table th {
	width: 300px;
	height: 50px;
	border: 1px solid black;
}
.PiramidMethodView-Table td {
	width: 300px;
	height: 50px;
	border: 1px solid black;
}
</style>
