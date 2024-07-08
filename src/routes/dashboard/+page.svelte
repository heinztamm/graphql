<script lang="ts">
    // Dashboard logic
    import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';
    import { enhance } from '$app/forms';
    import type { Result } from '$lib/types/types';

	export let data: Result;

    const firstName = data.user.name;
</script>

<div class="flex grow justify-center">
    <h1 class="text-4xl size-fit m-2">Dashboard</h1>
    <p>{firstName}</p>
</div>