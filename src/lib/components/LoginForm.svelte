<script>
    let login = '';
	let password = '';
    let input_style = 'p-2 rounded w-full border font-dark';
</script>

<form method="POST" action="?/login" class="form flex-col m-auto object-bottom items-center relative space-y-1.5 text-black">
	<div class="flex relative">
		<input
			type="text"
			placeholder="Username/email"
			name="login"
			autocomplete=""
			required
			class={input_style}
			bind:value={login}
		/>
	</div>

	<div class="flex relative">
		<input
			type="password"
			name="password"
			placeholder="password"
			autocomplete="current-password"
			id="password"
            required
			class={input_style}
			bind:value={password}
		/>
	</div>

	<div class="flex relative">
		<button
			type="submit"
			class="p-2 border mb-5 drop-shadow-md bg-gradient-to-l from-blue-500/80 to-purple-500/50 rounded-xl pointer w-full text-white"
			>Sign in</button
		>
	</div>
</form>