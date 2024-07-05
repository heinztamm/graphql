<script context="module" lang="ts">
    import LoginForm from '$lib/components/LoginForm.svelte';
    import { onMount } from 'svelte';
    import toast from 'svelte-french-toast';

    // export const load = async ({ locals }) => {
    //     if (locals.user) {
    //         throw redirect(302, '/dashboard'); // Redirect authenticated users
    //     }
    // };
</script>

<div class="place-self-center">
    <LoginForm />
</div>
