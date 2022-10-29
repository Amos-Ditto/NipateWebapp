<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSearch } from "../../store/searchData";

const router = useRouter();
const usesearch = useSearch();
const searching = ref<boolean>(false);

const searchItem = (): void => {
	searching.value = true;
	setTimeout(() => {
		searching.value = false;
		router.push({ name: "Search-Home" });
	}, 800);
};
</script>
<template>
	<div class="w-full py-2 sm:py-5 flex flex-col justify-center items-center gap-y-12 sm:gap-y-16">
		<div class="hero-title flex w-full justify-center items-center">
			<h3
				class="text-center leading-[1.325] sm:leading-[1.25] text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-bl from-[#014451] to-[#1f7794] font-bold tracking-wide transition-font duration-300"
			>
				Find the best people <br class="" />
				to serve you.
			</h3>
		</div>
		<div class="serch-container grid grid-cols-4 gap-x-2 sm:gap-x-5 w-[84%] sm:w-[65%] lg:w-[50%]">
			<div class="search-input col-span-3 relative flex items-center justify-center">
				<input type="text" placeholder="Search for service..." v-model="usesearch.searchdata.searchdata" />
				<div class="i-mdi-magnify absolute left-3 scale-125 text-base text-slate-400"></div>
			</div>
			<div class="search-btn">
				<button
					@click="searchItem"
					class="capitalize flex flex-row items-center justify-center rounded sm:rounded-lg py-2 sm:py-2.5 px-4 sm:px-8 min-w-[5.4rem] sm:min-w-[8rem] bg-orange-400 hover:bg-orange-500 text-slate-100 text-base sm:text-lg font-light tracking-wider transition-colors duration-300"
				>
					<span class="loader" v-if="searching"></span>
					<span v-else>search</span>
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.search-input input {
	@apply w-full pl-8 md:pl-10 pr-4 py-2 sm:py-2.5 text-base sm:text-lg font-light tracking-wider border border-gray-300 rounded sm:rounded-lg outline-none;
	@apply transition-all duration-300;
}
.loader {
	@apply border-b-gray-400 border-4 border-slate-100 w-6 sm:w-7 h-6 sm:h-7;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
