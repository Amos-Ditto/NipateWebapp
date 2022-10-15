<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AccountTopBar from '../components/Layouts/AccountTopBar.vue';
import MainFooter from '../components/Layouts/MainFooter.vue';
import useAuthentications from '../store/authentications';

const base_url = import.meta.env.VITE_BASE_URL;
const useauth = useAuthentications();
const router = useRouter()

// const checkProviderStatus = async(data: string | null): Promise<{Provider: boolean}> => {
//     let response = await fetch(`${base_url}provider/status`, {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": data || ""
//         }
//     })

//     return await response.json();
// }

// onMounted(async () => {
//     if(useauth.getAuthenticatedStatus) {
//         let provider_status = await checkProviderStatus(useauth.getUser.Auth_token);
//         if(provider_status.Provider) {
//             useauth.updateProvider(true);
//             router.push({ name: "Provider-Home" })
//         } else {
//             router.push({ name: "UserHome" })
//         }

//     } else if(localStorage.getItem("Nipate_user_data")) {
//         useauth.updateUser(JSON.parse(localStorage.getItem("Nipate_user_data") || ""))
//         let provider_status = await checkProviderStatus(useauth.getUser.Auth_token);
//         if(provider_status.Provider) {
//             useauth.updateProvider(true);
//             router.push({ name: "Provider-Home" })
//         } else {
//             router.push({ name: "UserHome" })
//         }
        
//     } else {
//         router.push({name: 'Login', query: { redirect: '/account/me' }});
//     }
// })

</script>

<template>
    <main class="w-full flex flex-col bg-gray-50 relative pb-[280px]">
        <account-top-bar class="sticky top-0 z-20" />
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <main-footer class="absolute bottom-0" />
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