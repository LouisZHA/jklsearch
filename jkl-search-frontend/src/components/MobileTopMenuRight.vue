<template>
		<!-- TOP MENU RIGHT-->
		<div id="question"
			class="w-10 h-10 absolute right-7 top-6 text-center align-middle pt-0.5 text-light-panelLogo_right text-2xl border-[1.5px] border-light-panelLogo_right rounded-3xl"
			v-on:click="rightPanel_onFocus = true">
			<div>?</div>
		</div>
		<div class="w-auto h-4 text-right ml-0  mr-0  rounded-md"></div>
		<div :class="getStyle_rightPanel(rightPanel_onFocus)">
			<div id="question"
				class="w-10 h-10 absolute right-7 top-6 text-center align-middle pt-0.5 text-light-panelLogo_right text-2xl border-[1.5px] border-light-panelLogo_right rounded-3xl"
				v-on:click="rightPanel_onFocus = false">
				<div>X</div>
			</div>
		</div>
</template>

<script>
export default {
	name: "MobileTopMenuRight",
	data() {
		return {
			window: {
				height: window.innerHeight,
				width: window.innerWidth,
			},
			rightPanel_onFocus: false,
		};
	},
	methods: {
		getStyle_rightPanel: function (rightPanel) {
			if (rightPanel) { return "absolute left-[0px]   top-0 w-full h-[1000px] transition-all bg-light-panel_right opacity-100"; }
			else { return "absolute left-[400px] top-0 w-full h-[1000px] transition-all bg-light-card opacity-100"; }
		},
	}
};
</script>