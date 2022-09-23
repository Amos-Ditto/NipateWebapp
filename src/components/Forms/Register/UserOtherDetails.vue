<script setup lang="ts">

const emit = defineEmits<{
    (e: 'toggleFinishRegistration'): void
}>()

const submitOtherDetails = (): void => {
    emit('toggleFinishRegistration');
}

</script>
<template>
    <form 
        @submit.prevent="submitOtherDetails"
        class="w-[96%] md:w-[600px] px-2 pt-2 sm:pt-2 pb-4 flex flex-col items-start sm:items-center justify-start sm:justify-center transition-all duration-300"
    >
        <h3 class="text-[#346974] text-3xl sm:text-2xl font-light transition-font duration-300">Register as a User</h3>
        <div class="input-fields w-full sm:w-[80%] flex flex-col gap-y-6 pt-14 sm:pt-12 transition-all duration-300">
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="county" class="text-[#346974] text-base font-semibold tracking-wide">Your Region/County</label>
                <div class="input w-full flex flex-col relative items-center justify-center">
                    <input type="text" id="county">
                    <div class="i-mdi-chevron-down absolute right-2 cursor-pointer hover:rotate-180 transition-transform duration-300"></div>
                    <div class="county-list absolute top-full translate-y-0.5 w-full flex flex-col bg-gray-100 z-20 shadow-md">
                        <div class="w-full flex items-center justify-end px-2 py-1 border-b border-gray-300">
                            <button type="button" class="py-1 px-2 text-[#346974] shadow bg-gray-200 hover:bg-gray-100">close</button>
                        </div>
                        <ul class="w-full flex flex-col">
                            <li><div class="i-mdi-map-marker"></div> Nakuru</li>
                            <li><div class="i-mdi-map-marker"></div>Baringo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="town" class="text-[#346974] text-base font-semibold tracking-wide">Your Location</label>
                <div class="input w-full flex flex-col relative items-center justify-center">
                    <input type="text" id="town">
                    <div class="i-mdi-chevron-down absolute right-2 cursor-pointer hover:rotate-180 transition-transform duration-300"></div>
                </div>
            </div>
            <div class="input-field w-full flex flex-col gap-y-2 pt-3">
                <label for="gender" class="text-[#346974] text-base font-semibold tracking-wide">Gender</label>
                <div class="input w-full flex flex-col relative items-center justify-center">
                    <select name="gender" id="gender">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
            </div>
            <div class="input-field w-full flex flex-col gap-y-2 pt-3">
                <label for="password" class="text-[#346974] text-base font-semibold">Password</label>
                <div class="input w-full flex flex-row items-center gap-x-1 relative">
                    <input type="password" name="password" id="password" required
                        class="w-full rounded"
                    >
                    <div class="show-password absolute right-6">
                        <div class="i-mdi-eye text-slate-600"></div>
                    </div>
                </div>
            </div>
            <!-- <div class="input-field w-full flex flex-col gap-y-2">
                <label for="repassword" class="text-[#346974] text-base font-semibold">Password</label>
                <div class="input w-full flex flex-row gap-x-1">
                    <input type="password" name="password" id="repassword" required
                        class="w-full rounded"
                    >
                </div>
            </div> -->
            <div class="submit-btns w-full flex flex-row items-center pt-8 pb-2 justify-between">
                <div class="progres-bar flex flex-row items-center gap-x-2">
                    <div class="progres-dot w-[9px] h-[9px] rounded-full bg-orange-400"></div>
                    <div class="progres-dot w-[9px] h-[9px] rounded-full bg-orange-400"></div>
                </div>
                <button type="submit"
                    class="min-w-[9.1rem] px-8 py-2 text-lg font-bold tracking-wide text-slate-100 bg-orange-600 rounded hover:bg-orange-500 transition-colors duration-300"
                >Finish</button>
            </div>
        </div>
    </form>
</template>

<style scoped>

.input #county,
.input #town {
    @apply w-full px-3 py-2 bg-inherit border-b border-gray-300 focus:border-blue-300 text-slate-700;
}
input {
    @apply outline-none focus:border-blue-300;
}
.input select {
    @apply w-full py-3 bg-gray-100 border-2 border-gray-300 px-3 rounded outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
}
.input #password {
    @apply py-3 sm:py-2.5 bg-gray-100 border-2 border-gray-300 px-3 outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
}

.county-list ul li {
    @apply flex flex-row gap-x-1 items-center text-sm text-[#346974] py-2 px-2 hover:bg-blue-100 cursor-pointer;
}
.county-list ul li .i-mdi-map-marker {
    @apply text-slate-400 text-sm;
}
</style>