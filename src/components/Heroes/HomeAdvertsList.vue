<script setup lang="ts">
import { ref } from "vue";
import { Advert } from "../../Types/Adverts";
import HomeAdvertCard from "../Cards/HomeAdvertCard.vue";
import HomeAdvertSuspense from "../Cards/LoadingSuspense/HomeAdvertSuspense.vue";

const base_url = import.meta.env.VITE_BASE_URL;

const advertlist = ref<Advert[]>([]);
const fetching = ref<boolean>(false);

const fetchingAdverts = async (): Promise<void> => {
	fetching.value = true;
	await fetch(`${base_url}service/advert`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(async (response) => {
			advertlist.value = await response.json();
			setTimeout(() => {
				fetching.value = false;
			}, 800);
		})
		.catch((error) => {
			console.log(error);
			setTimeout(() => {
				fetching.value = false;
			}, 800);
		});
};

fetchingAdverts();
</script>
<template>
	<div class="w-full flex flex-col gap-y-2 text-[#346974]">
		<div class="title w-full">
			<h3 class="text-lg tracking-wide font-bold capitalize">Services near you.</h3>
		</div>
		<div class="list-data">
			<Transition mode="out-in">
				<div class="fetching grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-y-3 gap-x-4" v-if="fetching">
					<HomeAdvertSuspense />
					<HomeAdvertSuspense />
					<HomeAdvertSuspense />
					<HomeAdvertSuspense />
					<HomeAdvertSuspense />
					<HomeAdvertSuspense />
				</div>
				<div class="data grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-y-3 gap-x-4" v-else>
					<HomeAdvertCard v-for="advert in advertlist" :key="advert.id" :advert="advert" />
				</div>
			</Transition>
		</div>
	</div>
</template>
