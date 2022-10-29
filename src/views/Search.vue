<script setup lang="ts">
import SearchTopBar from "../components/Layouts/SearchTopBar.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
</script>

<template>
	<main class="w-full flex flex-col relative h-[100vh] overflow-y-auto">
		<SearchTopBar class="sticky top-0 bg-gray-50" />
		<section class="w-full">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</section>
		<MainFooter />
	</main>
</template>

<style scoped></style>
