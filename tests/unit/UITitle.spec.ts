import { shallowMount } from "@vue/test-utils";
import UITitle from "@/components/ui/UITitle.vue";

test("test UITitle Component", () => {
	const title = "筋トレメニュージェネレーター";
	const wrapper = shallowMount(UITitle, {
		props: {
			title: title,
		},
	});
	expect(wrapper.text()).toMatch(title);
});

test("test UITitle Component", () => {
	const title = "チュートリアル";
	const wrapper = shallowMount(UITitle, {
		props: {
			title: title,
		},
	});
	expect(wrapper.text()).toMatch(title);
});

test("test UITitle Component", () => {
	const title = "531プログラム";
	const wrapper = shallowMount(UITitle, {
		props: {
			title: title,
		},
	});
	expect(wrapper.text()).toMatch(title);
});

test("test UITitle Component", () => {
	const title = "ピラミッド法";
	const wrapper = shallowMount(UITitle, {
		props: {
			title: title,
		},
	});
	expect(wrapper.text()).toMatch(title);
});
