<template>
	<div
		class="ad-card min-h-[10rem] bg-gray-50 sm:rounded-md border border-gray-300 flex flex-col gap-y-2 hover:shadow-md cursor-pointer relative px-2 sm:px-4 py-3"
	>
		<div class="card-title flex items-center w-full">
			<h3 class="py-5 h-5 w-1/4 bg-gray-200 animate-pulse"></h3>
		</div>
		<div class="card-body py-1 flex flex-col gap-y-2 w-full">
			<div class="card-details w-full flex flex-row truncate flex-wrap py-1 items-center gap-x-2 pt-4">
				<button class="rounded py-4 px-3 h-2 w-[8rem] bg-gray-200 animate-pulse"></button>
				<small>-</small>
				<small class="bg-gray-200 animate-pulse w-[8rem] h-2 py-4"></small>
				<small>-</small>
				<small class="truncate bg-gray-200 animate-pulse w-[8rem] h-2 py-4"></small>
			</div>
			<div class="py-2 w-full">
				<p class="bg-gray-200 animate-pulse h-6 py-8"></p>
			</div>
		</div>
		<div class="card-footer flex flex-col items-start pt-3 pb-2">
			<button class="text-sm border capitalize border-gray-200 py-1.5 sm:py-2 px-4 rounded text-slate-300">send a Respond</button>
		</div>
	</div>
</template>
