<template>

	<div class="w-full h-screen flex flex-col bg-light-main">
		<MobileTransparentFilter />
		<MobileLogo/>
		<MobileSearchCard/>
	</div>
	<MobileTopMenuRight></MobileTopMenuRight>
	<MobileTopMenuLeft></MobileTopMenuLeft>
</template>


<script>
import MobileTransparentFilter from '../components/MobileTransparentFilter.vue'
import MobileLogo from '../components/MobileLogo.vue';
import MobileTopMenuRight from '../components/MobileTopMenuRight.vue';
import MobileTopMenuLeft  from '../components/MobileTopMenuLeft.vue';
import MobileSearchCard from '../components/MobileSearchCard.vue'
export default {
	name: "MobileHome",
	components: {
		MobileTransparentFilter,
		MobileLogo,
		MobileTopMenuLeft,
		MobileTopMenuRight,
		MobileSearchCard,
	}
}
</script>
