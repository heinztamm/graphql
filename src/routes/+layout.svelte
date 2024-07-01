<script>
    import "../app.css";
	import { Toaster } from 'svelte-french-toast';
  </script>
  
  <Toaster />

  <div class="content flex-left w-full">
    <slot />
  </div>