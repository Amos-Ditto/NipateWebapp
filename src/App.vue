<script setup lang="ts">

import { onMounted } from 'vue';
import useAuthentications from './store/authentications';
import { UserAuth } from './Types/GeneralTypes';

const base_url = import.meta.env.VITE_BASE_URL;
const useAuthentication = useAuthentications();

const validateUseHeaders = async (data: string): Promise<{"User": boolean}> => {
  const response = await fetch(`${base_url}auth/confirm`, {
    method: 'GET',
    headers: {
      "Authorization": data || ""
    }
  })
  return await response.json();
}
onMounted(async () => {
  
  if(localStorage.getItem("Nipate_user_data")) {
    let user_local = localStorage.getItem("Nipate_user_data") || "";
    let user_auth = validateUseHeaders(JSON.parse(user_local)["Auth_token"]);
    if((await user_auth).User === true) {
      useAuthentication.updateUser(JSON.parse(user_local));
    } else {
      localStorage.removeItem("Nipate_user_data");
    }
  
  }
})

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
