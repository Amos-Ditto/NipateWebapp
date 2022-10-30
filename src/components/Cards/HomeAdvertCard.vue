<script setup lang="ts">
import { Advert } from "../../Types/Adverts";

defineProps<{
	advert: Advert;
}>();
</script>
<template>
	<div
		class="card flex flex-col gap-y-2 px-2 sm:px-4 py-3 rounded border border-gray-300 hover:shadow-md transition-shadow duration-200 cursor-pointer"
	>
		<div class="card-header py-3">
			<h3 class="capitalize text-base font-bold tracking-wide">{{ advert.ADTitle }}</h3>
		</div>
		<div class="card-body w-full flex flex-col items-start">
			<p class="text-sm tracking-wide line-clamp-3">{{ advert.AdDescription }}</p>
		</div>
		<div class="card-footer flex flex-row items-center gap-x-4 pt-3">
			<button class="text-sm bg-gray-200 rounded tracking-wide px-4 py-1">{{ advert.Location.Name }}</button>
			<div class="details flex flex-row gap-x-2">
				<div class="i-mdi-call text-lg"></div>
				<small class="text-sm tracking-wide">+{{ advert.User.MobileNumber }}</small>
			</div>
		</div>
	</div>
</template>
