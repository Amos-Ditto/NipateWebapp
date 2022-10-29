<script setup lang="ts">
import useAuthentications from "../../store/authentications";

const useauth = useAuthentications();
</script>
<template>
	<div class="user-details flex flex-row gap-x-3">
		<div class="user-icon p-3.5 sm:p-2 rounded-lg sm:rounded-xl border border-gray-300 flex items-center justify-center">
			<div class="i-mdi-account-outline text-4xl xs:text-4xl sm:text-5xl text-slate-400"></div>
		</div>
		<div class="user-details-list flex flex-col gap-y-1.5 sm:gap-y-3">
			<small class="text-lg sm:text-xl font-light tracking-wide text-[#346974]"
				>{{ useauth.UserDetails.User.FirstName }} {{ useauth.UserDetails.User.SurName }}</small
			>
			<div class="location flex flex-row items-center gap-x-0.5 xs:gap-x-1 sm:gap-x-2">
				<div class="i-mdi-map-marker-outline text-slate-500 text-lg sm:text-base"></div>
				<small class="text-slate-500 text-base sm:text-xs">{{ useauth.UserDetails.Location.Name }}, Kenya</small>
			</div>
		</div>
	</div>
</template>
