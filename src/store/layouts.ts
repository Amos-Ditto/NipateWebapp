import { defineStore } from "pinia";
import { ref } from "vue";


export const useLayouts = defineStore('layout', () => {
    const userdashboard = ref<boolean>(false);

    const updateUserDashboard = (): void => {
        userdashboard.value = !userdashboard.value;
    }

    return { userdashboard, updateUserDashboard }
})