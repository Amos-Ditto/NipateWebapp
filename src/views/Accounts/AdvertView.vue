<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import AdvertAccount from "../../components/Cards/AdvertAccount.vue";
import AdvertAccountSuspense from "../../components/Cards/LoadingSuspense/AdvertAccountSuspense.vue";
import useAuthentications from "../../store/authentications";
import { Advert } from "../../Types/Adverts";

const base_url = import.meta.env.VITE_BASE_URL;
const router = useRouter();
const useauth = useAuthentications();

const advertlist = ref<Advert[]>([]);
const fetchingadssuspense = ref<boolean>(false);
const emptylist = ref<boolean>(false);

const createNewAd = (): void => {
    router.push({ name: "Create-Advert" });
};

const fetchAdverts = async (): Promise<void> => {
    fetchingadssuspense.value = true;
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
                fetchingadssuspense.value = false;
            }, 500);
        })
        .catch((error) => {
            console.log(error);
            setTimeout(() => {
                fetchingadssuspense.value = false;
            }, 400);
        });
};

// Fetch personal ads
fetchAdverts();

watch(advertlist, (newAdvertList) => {
    if (advertlist.value.length === 0) {
        emptylist.value = true;
    } else {
        emptylist.value = false;
    }
});
</script>
<template>
    <section class="w-full flex flex-col gap-y-10 sm:gap-y-14">
        <div class="top-nav flex flex-row justify-between sm:px-8">
            <div class="left-nav">
                <h3 class="text-2xl font-bold">Adverts</h3>
            </div>
            <div class="right-nav pr-1">
                <button
                    @click="createNewAd"
                    class="px-4 py-1.5 rounded-2xl bg-slate-600 hover:bg-slate-700 transition-colors duration-300 text-slate-100 text-sm flex flex-row items-center gap-x-1"
                >
                    <div class="i-mdi-plus text-slate-100 text-base"></div>
                    New Advert
                </button>
            </div>
        </div>
        <div class="body-section flex flex-col gap-y-2 sm:px-8 text-[#346974]">
            <div class="data w-full" v-if="!emptylist">
                <Transition mode="out-in">
                    <div
                        class="adsuspense flex flex-col gap-y-2"
                        v-if="fetchingadssuspense"
                    >
                        <AdvertAccountSuspense />
                        <AdvertAccountSuspense />
                        <AdvertAccountSuspense />
                    </div>
                    <div class="adlist flex flex-col gap-y-2" v-else>
                        <AdvertAccount
                            v-for="advert in advertlist"
                            :key="advert.id"
                            :advert="advert"
                        />
                    </div>
                </Transition>
            </div>
            <div class="empty w-full text-[#346974]" v-else>
                <div
                    class="empty-container flex flex-col items-center justify-center gap-y-3 pt-6 pb-2 border border-gray-300 rounded"
                >
                    <div
                        class="icon w-full flex items-center justify-center py-3"
                    >
                        <div
                            class="i-mdi-alert-circle-outline text-7xl text-[#98a4a6] scale-125"
                        ></div>
                    </div>
                    <div
                        class="text-desc flex flex-col gap-y-5 items-center justify-center"
                    >
                        <h3 class="text-xl font-semibold tracking-wide">
                            You have not posted any adverts yet.
                        </h3>
                        <button
                            @click="router.push({ name: 'Create-Advert' })"
                            class="py-2 px-6 text-sm tracking-wide capitalize border border-gray-200 hover:border-steelblue hover:text-steelblue focus:text-steelblue focus:border-steelblue transition-colors duration-200 rounded"
                        >
                            place Advert
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.popup-enter-from,
.popup-leave-to {
    @apply opacity-0 -translate-y-2;
}
.popup-enter-active,
.popup-leave-active {
    transition: opacity 300ms ease, transform 300ms ease;
}
</style>
