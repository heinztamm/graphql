<script lang="ts">
	// Dashboard logic
	import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';
	import { enhance } from '$app/forms';
	import type { Result } from '$lib/types/types';

	export let data: Result;

	const firstName = data.user.name;
</script>

<div class="flex flex-col grow content-center">
	<h1 class="text-4xl size-fit m-2">Dashboard</h1>
	<h2>{firstName}</h2>
	<h2>dein auditRatio, Man: {data.user.auditRatio}</h2>
</div>

<div class="flex flex-col">
	<svg class="rounded-lg p-px bg-gray-500" width="auto" height="auto" role="img">
		<title class="text-white bg-black">Audits</title>
		<g>
			<rect width={data.auditSumUp / 10000} height="30" class="fill-current text-green-500"></rect>
			<text y="30">Up</text>
		</g>
		<g transform="translate(0, 30)">
			<rect width={data.auditSumDown / 10000} height="30" class="fill-current text-red-500"></rect>
			<text y="30">Down</text>
		</g>
	</svg>
</div>

<svg class="bg-sky-500 m-2 rounded-lg pt-4" width="auto" height="540">
	{#each data.XP_Transfers as project, i}
		<g transform={`translate(0, ${i * 30})`} class="group">
			<rect
				width={project.amount / 200}
				height="20"
				class="fill-current text-gray-200 hover:text-slate-700 transition-all"
			></rect>
			<text x={project.amount / 200 + 5} y="15" class="group-hover:scale-0">
				{project.object.name}
			</text>
			<text
				x={project.amount / 200 + 5}
				y="15"
				class="text-white scale-0 group-hover:scale-100 bg-black"
			>
				{project.amount / 1000} kB
			</text>
		</g>
	{/each}
</svg>
