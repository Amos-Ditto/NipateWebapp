<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentications from '../../store/authentications';
import MainDropDown from './MainDropDown.vue';


const router = useRouter();
const storeauth = useAuthentications();
const { Authenticated, UserDetails } = storeToRefs(storeauth);

// Condition data
const dropdownaccount = ref<boolean>(false);

const toggleDropDownAccount = (): void => {
    dropdownaccount.value = !dropdownaccount.value;
}

const reDirectToUserAccount = (): void => {
    if(Authenticated.value) {
        if(storeauth.UserDetails.Provider) {
            router.push({ name: 'Provider-Home' });
        } else {
            router.push({ name: 'UserHome' });
        }
    } else {
        router.push({ name: 'Login' });
    }
}

const logoutUser = (): void => {
    console.log("Auth status:", storeauth.Authenticated);
    
    storeauth.updateUser({
        MobileNumber: null, FirstName: null, Auth_token: null,
        LastName: null
    })
    // Authenticated.value = false;
    localStorage.removeItem("Nipate_user_data");
    console.log("Auth status 2nd:", storeauth.Authenticated);
    window.location.reload();   
}

const redirectToRegisterProvider = ():void => {
    if(!Authenticated.value) {
        router.push({name: 'Login', query: { redirect: '/account/new-provider' }});
        
    } else {
        if(UserDetails.value.Provider) {
            router.push({ name: 'Provider-Home' });
        } else {
            router.push({ name: 'Register-Provider' });
        }
    }
}


</script>

<template>
    <header class="py-2.5 sm:py-2 flex flex-row justify-between w-full border-b border-gray-200 px-[8px] lg:px-[78px] transition-all duration-300s">
        <RouterLink to="/" class="left-nav flex items-center flex-row py-0.5">
            <img src="../../assets/Logo/Vector.svg" alt="logo">
            <img src="../../assets/Logo/Nipate.svg" alt="logo">
        </RouterLink>

        <div class="right-nav py-0.5 flex flex-row items-center gap-1.5 sm:gap-3">
            <!-- <Transition name="slide" mode="out-in"> -->
                
                <!-- <div>
                    <button class="border-dodgerblue text-dodgerblue font-serif hover:border-blue-800">
                        Logout
                    </button>
                </div> -->
                <div class="flex flex-row items-center relative px-1.5 gap-1.5 sm:gap-3 transition-pad">
                    <div class="user-account p-2 bg-gray-200 rounded-md cursor-pointer" @click="toggleDropDownAccount">
                        <div class="i-mdi-account text-slate-500 text-xl"></div>
                    </div>
                    <Transition name="pop-up">
                        <div v-if="dropdownaccount"
                            class="user-drop-down flex flex-col gap-y-2.5 py-2 absolute top-[145%] right-0 min-h-[4rem] w-[15rem] xs:w-[18rem] bg-gray-50 rounded"
                        >
                            <div class="top-drop-down absolute -z-10 right-3 -top-2 w-4 h-4 rotate-45"></div>
                            <div class="user-client flex flex-row items-center gap-x-3 py-1.5 px-2 hover:bg-gray-100 cursor-pointer" @click="reDirectToUserAccount">
                                <div class="user-avatar p-1.5 rounded-md bg-gray-200">
                                    <div class="i-mdi-account-outline text-2xl text-slate-500"></div>
                                </div>
                                <div class="user-details flex flex-col gap-y-0">
                                    <small class="text-sm text-slate-600">{{ UserDetails.User.FirstName || "Anonymous" }} {{ UserDetails.User.SurName }}</small>
                                    <small class="text-slate-600 text-xs">{{ UserDetails.Provider ? 'Provider' : 'Client' }}</small>
                                </div>
                            </div>
                            <RouterLink :to="{ name: 'Register' }" class="register-provider text-slate-600 flex flex-row items-center gap-x-3 py-2 px-2 hover:bg-gray-100 cursor-pointer">
                                <div class="i-mdi-sign-in text-xl"></div>
                                <small class="text-base tracking-wide font-light">Register as User</small>
                            </RouterLink>
                            <div @click="redirectToRegisterProvider"
                                class="register-provider text-slate-600 flex flex-row items-center gap-x-3 py-2 px-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <div class="i-mdi-tools text-xl"></div>
                                <small class="text-base tracking-wide font-light">Register as Provider</small>
                            </div>
                        </div>
                    </Transition>
                </div>
            <!-- </Transition> -->
        </div>
    </header>
</template>

<style scoped>


.left-nav img {
    @apply max-w-[4.8rem] sm:max-w-[5.8rem] min-w-[3rem] sm:min-w-[3.5rem] h-[2rem] sm:h-[2.5rem] last:mt-1 transition-all duration-300;
}


.user-drop-down {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}
.user-drop-down .top-drop-down {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

.pop-up-enter-from {
    @apply -translate-y-2 opacity-5;
}
.pop-up-enter-active, .pop-up-leave-active {
    transition: opacity 200ms ease , transform 300ms ease;
}
.pop-up-leave-to {
    opacity: 0;
}
</style>