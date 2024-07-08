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
<svg class="bg-white" width="auto" height="auto" role="img">
    <title class="text-white bg-black">Audits</title>
    <g>
        <rect width="{data.auditSumUp/10000}" height="30" class="fill-current text-green-500"></rect>
        <text y="30">Up</text>
    </g>
    <g transform="translate(0, 30)"> 
        <rect width="{data.auditSumDown/10000}" height="30" class="fill-current text-red-500"></rect>
        <text y="30">Down</text>
    </g>
</svg>
</div>

<svg class="bg-sky-500" width="auto" height="auto">
    {#each data.XP_Transfers as project, i}
    <g>
<rect y="{i*25}" width="{project.amount/100}" height="20" class="fill-current text-gray-500"></rect>
    </g>
    <text y="{i*26}">{project.object.name}</text>
    {/each}
</svg>