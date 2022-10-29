<script setup lang="ts">
import { useRouter } from "vue-router";
import { estimateDuration } from "../../../../composables/estimateDuration";
import { Request } from "../../../../Types/Requests";

defineProps<{
	request: Request;
}>();

const router = useRouter();
</script>

<template>
	<div
		@click="router.push({ name: 'Provider-Requests-List' })"
		class="ad-card min-h-[10rem] bg-gray-50 sm:rounded-md border border-gray-300 flex flex-col gap-y-2 hover:shadow-md cursor-pointer relative px-2 sm:px-4 py-3"
	>
		<div class="card-title flex items-center w-full">
			<h3 class="text-lg font-semibold tracking-wide capitalize">{{ request.Service.ServiceTitle }}</h3>
		</div>
		<div class="card-body py-1 flex flex-col gap-y-2 w-full">
			<div class="card-details w-full flex flex-row truncate py-1 items-center gap-x-2 pt-4">
				<button class="text-sm tracking-wide bg-gray-200 rounded py-1 px-3">{{ request.Service.Service.Name }}</button>
				<small>-</small>
				<small class="text-sm truncate text-ellipsis overflow-hidden"
					>{{ request.User.FirstName }} {{ request.User.SurName }}</small
				>
				<small>-</small>
				<small class="text-sm truncate text-ellipsis overflow-hidden">{{ request.CenterLocation.DisplayName }}</small>
				<small>-</small>
				<small class="text-sm truncate text-ellipsis overflow-hidden">{{ estimateDuration(request.TimeStamp) }} ago</small>
			</div>
			<div class="py-2">
				<p class="text-sm line-clamp-3">{{ request.RequestText }}</p>
			</div>
		</div>
		<div class="card-footer flex flex-col items-start pt-3 pb-2">
			<button
				@click="router.push({ name: 'Provider-Requests-List' })"
				class="text-sm border capitalize border-gray-300 py-1.5 sm:py-2 px-4 rounded tracking-wide hover:border-steelblue transition-colors duration-300 hover:text-steelblue"
			>
				send a Respond
			</button>
		</div>
	</div>
</template>
