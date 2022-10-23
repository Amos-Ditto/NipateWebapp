<template>
    <ul class="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-y-2 gap-x-1 px-3 py-1">
        <li>
            <input type="checkbox" name="mon" id="mon">
            <label for="mon">monday</label>
        </li>
        <li>
            <input type="checkbox" name="tue" id="tue">
            <label for="tue">tuesday</label>
        </li>
        <li>
            <input type="checkbox" name="wed" id="wed">
            <label for="wed">wednesday</label>
        </li>
        <li>
            <input type="checkbox" name="thur" id="thur">
            <label for="thur">thursday</label>
        </li>
        <li>
            <input type="checkbox" name="fri" id="fri">
            <label for="fri">friday</label>
        </li>
        <li>
            <input type="checkbox" name="sat" id="sat">
            <label for="sat">saturday</label>
        </li>
        <li>
            <input type="checkbox" name="sun" id="sun">
            <label for="sun">Sunday</label>
        </li>
    </ul>
</template>

<style scoped>

li {
    @apply px-4 sm:px-1 py-2 flex flex-row gap-x-2 items-center;
}
input[type="checkbox"] {
    @apply p-2 bg-orange-400 w-5 h-5 cursor-pointer;
}
label {
    @apply capitalize text-sm tracking-wide cursor-pointer;
}
</style>