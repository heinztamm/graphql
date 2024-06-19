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

<nav>
    <!-- Other navigation items -->
    <button on:click={signout}>Sign Out</button>
</nav>

<slot />
