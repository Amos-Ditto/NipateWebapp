<script setup lang="ts">
import HeroDashboard from "../../components/Heroes/HeroDashboard.vue";
import RecentServiceData from "../../components/Cards/RecentServiceData.vue";
</script>
<template>
	<main
		class="w-full pt-8 pb-12 md:pb-28 px-1 sm:px-[8px] lg:px-[80px] xl:px-[90px] 2xl:px-[130px] transition-pad duration-300 flex flex-col gap-y-12"
	>
		<section class="w-full py-4">
			<HeroDashboard />
		</section>
		<section></section>
	</main>
</template>

<style scoped>
main {
	transition: padding 300ms ease;
}
</style>
