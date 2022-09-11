<template>
	<!-- TOP MENU LEFT -->
	<div id="menu-box"
		class="w-8 h-8 absolute left-7 top-7 text-center align-middle pt-0.5 rounded-md text-light-main active:bg-light-text active:text-light-main transition-all"
		v-on:click="leftPanel_onFocus = true">
		<div class="space-y-2 mt-1">
			<div class="w-8 h-0.5 bg-light-text rounded-full"></div>
			<div class="w-8 h-0.5 bg-light-text rounded-full"></div>
			<div class="w-8 h-0.5 bg-light-text rounded-full"></div>
		</div>
	</div>
	<div :class="getStyle_leftPanel(leftPanel_onFocus)">
		<div id="question"
			class="w-10 h-10 absolute left-7 top-6 text-center align-middle pt-0.5 text-light-text text-2xl border-[1.5px] border-light-text rounded-3xl"
			v-on:click="leftPanel_onFocus = false">
			<div>X</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobileTopMenuLeft",
	data() {
		return {
			window: {
				height: window.innerHeight,
				width: window.innerWidth,
			},
			leftPanel_onFocus: false,
		};
	},
	methods: {
		getStyle_leftPanel: function (leftPanel) {
			if (leftPanel) { return "absolute right-[0px]   top-0 w-full h-[1000px] transition-all bg-light-main opacity-100"; }
			else { return "absolute right-[400px] top-0 w-full h-[1000px] transition-all bg-light-subtext opacity-100"; }
		},
		getStyle_rightPanel: function (rightPanel) {
			if (rightPanel) { return "absolute left-[0px]   top-0 w-full h-[1000px] transition-all bg-light-main opacity-100"; }
			else { return "absolute left-[400px] top-0 w-full h-[1000px] transition-all bg-light-subtext opacity-100"; }
		},
	}
};
</script>