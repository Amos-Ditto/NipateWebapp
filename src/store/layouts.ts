import { defineStore } from "pinia";
import { ref } from "vue";

// const state = {
//     userdashboard: false as boolean,
// }

// const getters = {
//     getUserDashboard(state: { userdashboard: boolean }): boolean {
//         return state.userdashboard;
//     }
// }
// const actions = {
//     updateUserDashboard(): void {
//         state.userdashboard = !state.userdashboard;
//         console.log("User Dashboard");
        
//     }
// }

// const useLayouts = defineStore({
//     id: 'layout',
//     state: () => (state),
//     getters: getters,
//     actions: actions,
// })

// export default useLayouts;

export const useLayouts = defineStore('layout', () => {
    const userdashboard = ref<boolean>(false);

    const updateUserDashboard = (): void => {
        userdashboard.value = !userdashboard.value;
    }

    return { userdashboard, updateUserDashboard }
})