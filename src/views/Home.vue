<script setup lang="ts">
import MainTopBar from "../components/Layouts/MainTopBar.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
</script>
<template>
	<main class="relative pb-[450px]">
		<MainTopBar class="sticky top-0 z-30" />
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
		<MainFooter class="absolute bottom-0" />
	</main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
