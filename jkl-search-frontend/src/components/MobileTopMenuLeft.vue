<template>
	<!-- TOP MENU LEFT -->
	<div id="menu-box"
		class="w-8 h-8 absolute left-7 top-7 text-center align-middle pt-0.5 rounded-md text-light-main active:bg-light-text active:text-light-main transition-all"
		v-on:click="leftPanel_onFocus = true">
		<div class="space-y-2 mt-1">
			<div class="w-8 h-0.5 bg-light-panelLogo_left rounded-full"></div>
			<div class="w-8 h-0.5 bg-light-panelLogo_left rounded-full"></div>
			<div class="w-8 h-0.5 bg-light-panelLogo_left rounded-full"></div>
		</div>
	</div>
	<div :class="getStyle_leftPanel(leftPanel_onFocus)">
		<div id="close"
			class="w-10 h-10 absolute left-7 top-6 text-center align-middle pt-0.5 text-light-panelLogo_left text-2xl border-[1.5px] border-light-panelLogo_left rounded-3xl"
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
			window_param: {
				height: window.innerHeight,
				width: window.innerWidth,
			},
			leftPanel_onFocus: false,
		};
	},
	methods: {
		getStyle_leftPanel: function (leftPanel) {
			if (leftPanel) { return "absolute right-[0px]   top-0 w-full h-[1000px] transition-all bg-light-panel_left opacity-100"; }
			else { return "absolute right-[400px] top-0 w-full h-[1000px] transition-all bg-light-card opacity-100"; }
		},
	}
};
</script>