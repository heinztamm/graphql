<script>
    import { goto, invalidate } from '$app/navigation';

    async function signout() {
        const response = await fetch('?/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                action: 'logout'
            })
        });

        if (response.ok) {
            // Invalidate the data and reload the page to reflect the signout
            console.log("great succcesss")
            await invalidate('/dashboard');
            await goto('/');
        } else {
            console.error('Signout failed', response);
        }
    }
</script>

<nav class="w-full">
    <!-- Other navigation items -->
    <button on:click={signout} class="relative p-2 border mb-5 drop-shadow-md bg-gradient-to-l from-blue-500/80 to-purple-500/50 rounded-xl pointer text-white float-right">Sign Out</button>
</nav>

<slot />
