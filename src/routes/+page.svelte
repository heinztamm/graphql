<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    import { redirect } from '@sveltejs/kit';
    import LoginForm from '$lib/components/LoginForm.svelte';

    // export const load = async ({ locals }) => {
    //     if (locals.user) {
    //         throw redirect(302, '/dashboard'); // Redirect authenticated users
    //     }
    // };
</script>

<LoginForm />
