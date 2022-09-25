<script setup lang="ts">
import { ref } from 'vue';
import UserDetails from '../../components/Forms/Register/UserDetails.vue';
import UserOtherDetails from '../../components/Forms/Register/UserOtherDetails.vue';
import type UserRegister from '../../Types/UserRegister';

const toggleforms = ref<boolean>(true);

if(localStorage.getItem('nipate_user_id') !== null) {toggleforms.value=false};

const fetcheduserinitialdata = ref<UserRegister>({
    id: 0,
    MobileNumber: '',
    IDNumber: '',
    FirstName: ''
});

const toggleContinueRegistration = (): void => {
    toggleforms.value = false;
}

const toggleFinishRegistration = (): void => {
    toggleforms.value = true;
}

const userRegisteredDetails = (payload: UserRegister): void => {
    fetcheduserinitialdata.value = payload;
    console.log('Fetched Data: ', fetcheduserinitialdata.value);
    localStorage.setItem('nipate_user_id', payload.id.toString());
}

</script>
<template>
    <section class="w-full px-4 sm:px-8 flex flex-col justify-center items-center">
        <div class="w-full flex flex-row justify-center">
            <Transition name="slide" mode="out-in">
                <UserDetails v-if="toggleforms" 
                    @toggle-continue-registration="toggleContinueRegistration"
                    @user-registered-details="userRegisteredDetails"
                />
                <UserOtherDetails v-else="toggleforms"
                    @toggle-finish-registration="toggleFinishRegistration"
                    :userinitialdata="fetcheduserinitialdata"
                />
            </Transition>
        </div>
        <div class="other-links w-[96%] md:w-[600px] px-2 sm:px-16 pt-8 sm:pt-6 flex flex-row gap-x-2 items-center justify-center sm:justify-end">
            <p><small class="text-base font-light tracking-tight text-[#014451]">Already have an Account?</small>
            <router-link :to="{name: 'Login'}" class="text-xl ml-2 hover:underline font-bold text-[#346974] tracking-tight">Login</router-link></p>
        </div>
    </section>
</template>

<style scoped>

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>