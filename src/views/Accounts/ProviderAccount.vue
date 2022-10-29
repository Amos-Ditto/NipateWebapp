<script setup lang="ts">
import ProviderDashboardRequest from "../../components/Cards/Requests/Dashboard/ProviderDashboardRequest.vue";
import DashboardProviderRequestSusspense from "../../components/Cards/LoadingSuspense/DashboardProviderRequestSusspense.vue";
import ProviderDashboardAdvertEmpty from "../../components/Cards/Empty/ProviderDashboardAdvertEmpty.vue";
import UserAccountDetails from "../../components/Heroes/UserAccountDetails.vue";
import ProviderDashboardEdvert from "../../components/Cards/Requests/Dashboard/ProviderDashboardEdvert.vue";
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { Request } from "../../Types/Requests";
import useAuthentications from "../../store/authentications";
import { Advert } from "../../Types/Adverts";

const base_url = import.meta.env.VITE_BASE_URL;
const useauth = useAuthentications();
const router = useRouter();

const requestlist = ref<Request[]>([]);
const emptyrequestlist = ref<boolean>(false);
const fetchingrequests = ref<boolean>(false);

const redirectNewServices = () => {
	router.push({ name: "Provider-Services-New" });
};

const fetchProviderRequests = async (): Promise<void> => {
	fetchingrequests.value = true;
	await fetch(`${base_url}service/provider/request`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: useauth.User.Auth_token || "",
		},
	})
		.then(async (response) => {
			if (response.status === 200) {
				requestlist.value = await response.json();
			} else {
				console.log(await response.json());
				router.push({ name: "Login" });
			}
			setTimeout(() => {
				fetchingrequests.value = false;
			}, 500);
		})
		.catch((error) => {
			console.log(error);
			setTimeout(() => {
				fetchingrequests.value = false;
			}, 500);
		});
};

// Fetch requests on Update
fetchProviderRequests();

watch(requestlist, (newRequestList) => {
	if (requestlist.value.length === 0) {
		emptyrequestlist.value = true;
	} else {
		emptyrequestlist.value = false;
	}
});

// Adverts
const advertlist = ref<Advert[]>([]);
const emptyadverts = ref<boolean>(false);
const fetchingads = ref<boolean>(false);

const fetchAdverts = async (): Promise<void> => {
	fetchingads.value = true;
	await fetch(`${base_url}service/user/advert`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: useauth.User.Auth_token || "",
		},
	})
		.then(async (response) => {
			if (response.status === 200) {
				advertlist.value = await response.json();
			} else {
				router.push({ name: "Login" });
			}
			setTimeout(() => {
				fetchingads.value = false;
			}, 500);
		})
		.catch((error) => {
			setTimeout(() => {
				fetchingads.value = false;
			}, 500);
			console.log(error);
		});
};

fetchAdverts();

watch(advertlist, (newAdvertList) => {
	if (advertlist.value.length === 0) {
		emptyadverts.value = true;
	} else {
		emptyadverts.value = false;
	}
});
</script>
<template>
	<section class="flex flex-col w-full gap-y-4">
		<div class="top-section w-full flex flex-row justify-between gap-y-6">
			<div class="user-container w-full px-0 sm:px-3 pb-12 flex flex-col">
				<UserAccountDetails />
			</div>
			<div class="other-links hidden sm:flex flex-row items-start">
				<button
					class="bg-slate-700 hover:bg-slate-800 flex flex-row items-center gap-x-0.5 xs:gap-x-1.5 transition-colors capitalize text-slate-100 text-xs xs:text-sm font-light py-2 px-2.5 xs:px-4 rounded-3xl truncate"
					@click="redirectNewServices"
				>
					<div class="i-mdi-plus text-base"></div>
					add new Service
				</button>
			</div>
		</div>
		<div class="w-full px-3 flex flex-col gap-y-4 border-gray-300 pb-2 rounded-lg text-[#346974]">
			<div class="nav-section-title flex items-center justify-between px-6 lg:pr-10 py-3 rounded-md border border-gray-300">
				<h3 class="text-lg capitalize font-bold">Services request</h3>
				<button
					@click="router.push({ name: 'Provider-Requests-List' })"
					class="more py-1.5 px-4 rounded-lg capitalize flex flex-row gap-x-4 items-center justify-between text-sm border border-gray-200"
				>
					<span>view more</span>
					<div class="i-mdi-arrow-right"></div>
				</button>
			</div>
			<div class="a-container grid grid-cols-1 gap-y-3">
				<div class="loading-list grid grid-cols-1 gap-y-3" v-if="fetchingrequests">
					<DashboardProviderRequestSusspense />
					<DashboardProviderRequestSusspense />
					<DashboardProviderRequestSusspense />
				</div>
				<div class="data" v-else>
					<div class="empty-list" v-if="emptyrequestlist">
						<div
							class="empty-requset border border-gray-300 rounded pt-5 pb-2 flex flex-col gap-y-5 items-center justify-center w-full"
						>
							<div class="i-mdi-alert-circle-outline text-7xl text-slate-400"></div>
							<div class="empty-details flex flex-col items-center justify-center gap-y-3">
								<h3 class="text-xl font-light text-center">
									You have no Requests yet, Edit your services for easier search.
								</h3>
								<button
									class="text-sm tracking-wide border border-gray-200 hover:text-steelblue focus:text-steelblue hover:border-steelblue focus:border-steelblue rounded px-4 py-1.5 capitalize transition-colors duration-200"
								>
									Edit here
								</button>
							</div>
						</div>
					</div>
					<div class="request-list grid grid-cols-1 gap-y-3" v-else>
						<ProviderDashboardRequest v-for="request in requestlist.slice(0, 3)" :key="request.id" :request="request" />
					</div>
				</div>
			</div>
		</div>
		<div class="w-full px-3 flex flex-col gap-y-4 pt-8 text-[#346974]">
			<div class="nav-section-title flex items-center justify-between px-6 lg:pr-10 py-3 rounded-md border border-gray-300">
				<h3 class="text-lg capitalize font-bold">your adverts</h3>
				<button
					@click="router.push({ name: 'User-Adverts' })"
					class="more py-1.5 px-4 rounded-lg capitalize flex flex-row gap-x-4 items-center justify-between text-sm border border-gray-200"
				>
					<span>view more</span>
					<div class="i-mdi-arrow-right"></div>
				</button>
			</div>
			<div class="a-container grid grid-cols-1 gap-y-3">
				<Transition mode="out-in">
					<div class="empty-ads" v-if="emptyadverts">
						<ProviderDashboardAdvertEmpty />
					</div>
					<div class="ads-data" v-else>
						<Transition mode="out-in">
							<div class="fetching-data" v-if="fetchingads"></div>
							<div class="ads-data" v-else>
								<ProviderDashboardEdvert v-for="advert in advertlist.slice(0, 3)" :key="advert.id" :advert="advert" />
							</div>
						</Transition>
					</div>
				</Transition>
			</div>
		</div>
	</section>
</template>
<style scoped>
button.more:hover,
button.more:focus {
	@apply border-gray-300 gap-x-6;
}
button.more {
	@apply transition-all duration-200;
}
</style>
