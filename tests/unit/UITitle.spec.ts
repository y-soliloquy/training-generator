import { shallowMount } from "@vue/test-utils";
import UITitle from "@/components/ui/UITitle.vue";

// test("test UITitle Component", () => {
// 	const title = "筋トレメニュージェネレーター";
// 	const wrapper = shallowMount(UITitle, {
// 		props: {
// 			title: title,
// 		},
// 	});
// 	expect(wrapper.text()).toMatch(title);
// });

// test("test UITitle Component", () => {
// 	const title = "チュートリアル";
// 	const wrapper = shallowMount(UITitle, {
// 		props: {
// 			title: title,
// 		},
// 	});
// 	expect(wrapper.text()).toMatch(title);
// });

// test("test UITitle Component", () => {
// 	const title = "531プログラム";
// 	const wrapper = shallowMount(UITitle, {
// 		props: {
// 			title: title,
// 		},
// 	});
// 	expect(wrapper.text()).toMatch(title);
// });

// test("test UITitle Component", () => {
// 	const title = "ピラミッド法";
// 	const wrapper = shallowMount(UITitle, {
// 		props: {
// 			title: title,
// 		},
// 	});
// 	expect(wrapper.text()).toMatch(title);
// });

describe("UITitle.vue", () => {
	it("タイトル文言に使うpropsを渡す", () => {
		const wrapper = shallowMount(UITitle, {
			props: {
				title: "タイトル",
			},
		});
		expect(wrapper.vm.$props.title).toMatch("タイトル");
	});

	it("スタイル制御に使うpropsを渡す", () => {
		const wrapper = shallowMount(UITitle, {
			props: {
				titleType: "normal",
			},
		});
		expect(wrapper.vm.$props.titleType).toMatch("normal");
	});

	it("コンポーネント表示", () => {
		const wrapper = shallowMount(UITitle);
		expect(wrapper.classes()).toContain("UITitle");
	});
});
