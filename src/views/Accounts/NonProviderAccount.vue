<script setup lang="ts">
import UserAccountDetails from "../../components/Heroes/UserAccountDetails.vue";
import ClientDashboardRequestsEmpty from "../../components/Cards/Empty/ClientDashboardRequestsEmpty.vue";
import ClientDashboardAdvertsEmpty from "../../components/Cards/Empty/ClientDashboardAdvertsEmpty.vue";
import ClientDashboardRequests from "../../components/Cards/Requests/Dashboard/ClientDashboardRequests.vue";
import DashboardClientRequestSuspense from "../../components/Cards/LoadingSuspense/DashboardClientRequestSuspense.vue";
import ClientDashboardAdvert from "../../components/Cards/Requests/Dashboard/ClientDashboardAdvert.vue";
import { ref, watch } from "vue";
import { Request } from "../../Types/Requests";
import useAuthentications from "../../store/authentications";
import { useRouter } from "vue-router";
import { Advert } from "../../Types/Adverts";

const requestlist = ref<Request[]>([]);
const fetchingrequests = ref<boolean>(false);
const emptyrequests = ref<boolean>(false);

const base_url = import.meta.env.VITE_BASE_URL;
const useauth = useAuthentications();
const router = useRouter();

const fetchDashboardRequests = async (): Promise<void> => {
	fetchingrequests.value = true;
	await fetch(`${base_url}service/request/client`, {
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
				router.push({ name: "Login" });
			}
			setTimeout(() => {
				fetchingrequests.value = false;
			}, 500);
		})
		.catch((error) => {
			setTimeout(() => {
				fetchingrequests.value = false;
			}, 500);
			console.log(error);
		});
};

fetchDashboardRequests();

watch(requestlist, (newRequestList) => {
	if (requestlist.value.length === 0) {
		emptyrequests.value = true;
	} else {
		emptyrequests.value = false;
	}
});

// Deals with Adverts

const advertlist = ref<Advert[]>([]);
const fetchingads = ref<boolean>(false);
const emptyadverts = ref<boolean>(false);

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
			<div class="user-container w-full px-3 pb-10 flex flex-col">
				<UserAccountDetails />
			</div>
		</div>
		<div class="body-section w-full flex flex-col gap-y-12 px-1 sm:px-4">
			<div class="other-section flex flex-col gap-y-10 w-full">
				<div class="requests-dummy w-full flex flex-col gap-y-3">
					<div class="request-title flex flex-row items-center justify-between w-full">
						<h3 class="font-bold text-lg">Requested Services</h3>
						<button
							@click="router.push({ name: 'Client-Requests-List' })"
							class="more py-1.5 px-4 rounded-lg capitalize flex flex-row gap-x-4 items-center justify-between text-sm border border-gray-200"
						>
							<span>view more</span>
							<div class="i-mdi-arrow-right"></div>
						</button>
					</div>
					<Transition mode="out-in">
						<ClientDashboardRequestsEmpty v-if="emptyrequests" />
						<div class="requests-data w-full grid grid-cols-1 gap-y-3" v-else>
							<Transition mode="out-in">
								<div class="empty grid grid-cols-1 gap-y-3" v-if="fetchingrequests">
									<DashboardClientRequestSuspense />
									<DashboardClientRequestSuspense />
									<DashboardClientRequestSuspense />
								</div>
								<div class="data w-full grid grid-cols-1 gap-y-3" v-else>
									<ClientDashboardRequests
										v-for="request in requestlist.slice(0, 3)"
										:key="request.id"
										:request="request"
									/>
								</div>
							</Transition>
						</div>
					</Transition>
				</div>
				<div class="ad-dummy w-full flex flex-col gap-y-3">
					<div class="ad-title flex flex-row items-center justify-between w-full">
						<h3 class="font-bold text-lg">My Advertisements</h3>
						<button
							@click="router.push({ name: 'User-Adverts' })"
							class="more py-1.5 px-4 rounded-lg capitalize flex flex-row gap-x-4 items-center justify-between text-sm border border-gray-200"
						>
							<span>view more</span>
							<div class="i-mdi-arrow-right"></div>
						</button>
					</div>
					<Transition mode="out-in">
						<ClientDashboardAdvertsEmpty v-if="emptyadverts" />
						<div class="ads-list w-full grid grid-cols-1 gap-y-3" v-else>
							<Transition mode="out-in">
								<div class="loading-ads w-full grid grid-cols-1 gap-y-3" v-if="fetchingads"></div>
								<div class="ads-data w-full grid grid-cols-1 gap-y-3" v-else>
									<ClientDashboardAdvert v-for="advert in advertlist.slice(0, 3)" :key="advert.id" :advert="advert" />
								</div>
							</Transition>
						</div>
					</Transition>
				</div>
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
