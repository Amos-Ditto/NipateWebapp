<script setup lang="ts">
import { useRouter } from "vue-router";
import { Advert } from "../../../../Types/Adverts";

defineProps<{
	advert: Advert;
}>();

const router = useRouter();
</script>

<template>
	<div
		@click="router.push({ name: 'User-Adverts' })"
		class="ad-card min-h-[10rem] w-full flex flex-col gap-y-4 border border-gray-300 sm:rounded-md bg-gray-50 hover:shadow-md cursor-pointer relative px-2 sm:px-4 py-3 sm:py-4 text-[#346974]"
	>
		<div class="card-title w-full flex items-center">
			<h3 class="text-lg font-bold tracking-wide capitalize">{{ advert.ADTitle }}</h3>
		</div>
		<div class="card-details w-full flex flex-row truncate flex-wrap py-1 items-center gap-x-2 pt-4">
			<small class="text-sm">{{ advert.User.FirstName }} {{ advert.User.SurName }}</small>
			<small>-</small>
			<small class="text-sm truncate">{{ advert.Location.Name }}</small>
			<small>-</small>
			<small>From: {{ advert.StartDate }}</small>
			<small>To: {{ advert.ExpiryDate }}</small>
		</div>
		<div class="card-footer w-full">
			<p class="text-base line-clamp-3">{{ advert.AdDescription }}.</p>
		</div>
	</div>
</template>
