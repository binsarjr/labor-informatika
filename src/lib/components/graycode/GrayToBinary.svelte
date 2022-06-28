<script lang="ts">
	import { graytoBinary } from '$lib/graycode';

	export let value = '';
	let result = '';
	$: if (value) {
		result = graytoBinary(value.toString());
	}

	function onChange() {
		value = value.replace(/[^01]/g, '');
	}
</script>

<section>
	<h1 class="text-2xl">Gray to Binary</h1>
	<input
		type="text"
		bind:value
		on:input={onChange}
		class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
	/>
	<p>Result: {result}</p>
</section>
