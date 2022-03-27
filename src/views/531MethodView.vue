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

const title = "531プログラム";
const explain = "日々の体調の揺れに対応できるプログラムです。";

type menu = {
	id: string;
	number: number;
	percentage1: number;
	count1: number;
	percentage2: number;
	count2: number;
	percentage3: number;
	count3: number;
	percentage4: number;
	count4: number;
	isAdditionalCount: boolean;
};

const menuList: menu[] = [
	{
		id: "1",
		number: 1,
		percentage1: 65,
		count1: 5,
		percentage2: 70,
		count2: 3,
		percentage3: 75,
		count3: 5,
		percentage4: 40,
		count4: 5,
		isAdditionalCount: false,
	},
	{
		id: "2",
		number: 2,
		percentage1: 75,
		count1: 5,
		percentage2: 80,
		count2: 3,
		percentage3: 85,
		count3: 3,
		percentage4: 50,
		count4: 5,
		isAdditionalCount: false,
	},
	{
		id: "3",
		number: 3,
		percentage1: 85,
		count1: 5,
		percentage2: 90,
		count2: 3,
		percentage3: 95,
		count3: 1,
		percentage4: 60,
		count4: 5,
		isAdditionalCount: true,
	},
];
</script>

<template>
	<UITitle :title="title" />
	<UIExplain :explain="explain" />
	<UIInput @input="input" :value="weight" />
	<UIHint />
	<UIFlexBox>
		<UIButton @click="onClickCalc" :disabled="!isCheckCalculateAvailable">計算</UIButton>
		<UIButton @click="onClickReset" :disabled="!isCheckResetAvailable">リセット</UIButton>
	</UIFlexBox>
	<table class="ThreeTwoOneMethodView-Table">
		<tbody>
			<tr>
				<th></th>
				<th>1週目</th>
				<th>2週目</th>
				<th>3週目</th>
				<th>4週目</th>
			</tr>
			<tr v-for="(menu, index) in menuList" :key="index">
				<th>{{ menu.number }}セット目</th>
				<td>
					<span v-if="!state.isCalculated">{{ menu.percentage1 }}%</span
					><span v-else>{{ calcWeight(menu.percentage1) }}kg</span> x
					{{ menu.count1 }}回<span v-if="menu.isAdditionalCount">+α</span>
				</td>
				<td>
					<span v-if="!state.isCalculated">{{ menu.percentage2 }}%</span
					><span v-else>{{ calcWeight(menu.percentage2) }}kg</span> x
					{{ menu.count2 }}回<span v-if="menu.isAdditionalCount">+α</span>
				</td>
				<td>
					<span v-if="!state.isCalculated">{{ menu.percentage3 }}%</span
					><span v-else>{{ calcWeight(menu.percentage3) }}kg</span> x
					{{ menu.count3 }}回<span v-if="menu.isAdditionalCount">+α</span>
				</td>
				<td>
					<span v-if="!state.isCalculated">{{ menu.percentage4 }}%</span
					><span v-else>{{ calcWeight(menu.percentage4) }}kg</span> x {{ menu.count4 }}回
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style>
.ThreeTwoOneMethodView-Table {
	border-collapse: collapse;
	margin: 25px auto;
}
.ThreeTwoOneMethodView-Table th {
	width: 120px;
	height: 50px;
	border: 1px solid black;
}
.ThreeTwoOneMethodView-Table td {
	width: 120px;
	height: 50px;
	border: 1px solid black;
}
</style>
