<script>
    import "../app.css";
	import { Toaster } from 'svelte-french-toast';
  </script>
  
  <Toaster />

  <div class="grid size-full">
    <slot />
  </div>