<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { loadTheme } from '$lib/dark';
	let { children } = $props();

	onMount(loadTheme);
</script>

{@render children()}
