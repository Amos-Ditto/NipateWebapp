<template>
	<main class="w-full flex flex-col gap-2 justify-center pb-12">
		<nav class="w-full px-8 py-3">
			<div class="logo flex flex-row px-1 gap-2">
				<img src="../assets/Logo/Vector.svg" alt="logo" />
				<img src="../assets/Logo/Nipate.svg" alt="logo" />
			</div>
		</nav>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
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

.logo img {
	@apply min-w-[2.5rem] max-w-[2.6rem] last:max-w-[5.8rem] sm:min-w-[4rem] sm:max-w-[5rem] sm:last:max-w-[6.2rem] h-[2.4rem] last:h-[2.6rem] sm:h-[2.6rem] sm:last:h-[3rem] transition-all duration-300;
}
</style>
