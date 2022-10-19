<script setup lang="ts">

import useAuthentications from './store/authentications';

const base_url = import.meta.env.VITE_BASE_URL;
const useAuthentication = useAuthentications();

const checkUserDetails = async (auth_token: string): Promise<void> => {
  await fetch(`${base_url}provider/status`, {
    method: 'GET',
    headers: {
      "Authorization": auth_token || ""
    }
  })
  .then(async response => {
    if(response.status === 200) {
      useAuthentication.updateAuthentication(true);
      useAuthentication.updateUserDetails(await response.json());
    } else {
      localStorage.removeItem("Nipate_user_data");
      useAuthentication.updateAuthentication(false);
    }
  })
  .catch(error => { console.log(error) })
}

if(localStorage.getItem("Nipate_user_data")) {
  let user_local = JSON.parse(localStorage.getItem("Nipate_user_data") || "");
  useAuthentication.updateUser(user_local);
  checkUserDetails(user_local["Auth_token"]);
  
}

</script>

<template>
  <main>
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
          <component :is="Component" />
      </transition>
    </router-view>

    </main>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: 'Arial';
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  @apply bg-gray-50 text-[#014451];
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
}
input[data-autocompleted] {
    background-color: transparent !important;
}

::-webkit-scrollbar {
    width: 9px;
    height: 1px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-400;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
