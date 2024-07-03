<script lang="ts">
    // Dashboard logic
    import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';

    // Function to check for the 'toast' cookie and display it
    function checkForToast() {
        const cookies = document.cookie.split('; ');
        const toastCookie = cookies.find(row => row.startsWith('toast='));
        if (toastCookie) {
            toast("toast found")
            const message = toastCookie.split('=')[1];
            toast(message, { duration: 3000 });
            // Remove the toast cookie after displaying it
            document.cookie = 'toast=; Max-Age=0; path=/';
        } else {
            toast("no toast found", { duration: 3000 });
        }
    }

    onMount(() => {
        checkForToast();
    });
</script>

<div class="flex grow justify-center">
    <h1 class="text-4xl size-fit m-2">Dashboard</h1>
</div>