<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { loadTheme } from '$lib/dark';
	import { toggleDark } from "$lib/dark";
	let { children } = $props();

	let isStuck = $state(false);

	function handleScroll() {
		const stickyElement = document.querySelector('#sticky');
		if (stickyElement !== null) {
			const rect = stickyElement.getBoundingClientRect();
			isStuck = rect.top <= 0; // Update based on position
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	onMount(loadTheme);
</script>

<!-- Top Bar -->
<div id="sticky" class={isStuck ? "bg-mantle dark:bg-dark-mantle flex justify-between sm:justify-center lg:justify-between m-0 mt-5 gap-3 sticky top-0 transition-all" : "bg-transparent flex justify-between sm:justify-center lg:justify-between m-5 gap-3 mb-0 sticky top-0 transition-all"}>
    <!-- Contents -->
    <div id="sticky" class="justify-self-center text-text dark:text-dark-text rounded-xl sm:rounded-full bg-mantle dark:bg-dark-mantle p-2  transition-all">
        <div class="grid gap-2 sm:grid-cols-5 grid-cols-3 sm:w-[400px]">
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#about">About</a>
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#projects">Projects</a>
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#technologies">Skills</a>
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#qualifications">Merits</a>
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#contact">Contact</a>
        </div>
    </div>
    
    <!-- Theme toggles -->
    <button class="justify-self-end transition-all bg-mantle dark:bg-dark-mantle rounded-full p-1 pl-3 pr-3 active:scale-95 grid items-center sm:grid-cols-2 sm:gap-2" aria-label="Light mode" onclick={toggleDark}>
        <svg class="inline transition-all fill-text dark:fill-dark-text opacity-100 dark:opacity-25" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"/></svg>
        <svg class="inline transition-all fill-text dark:fill-dark-text opacity-25 dark:opacity-100" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M479.96-144Q340-144 242-242t-98-238q0-140 97.93-238t237.83-98q13.06 0 25.65 1 12.59 1 25.59 3-39 29-62 72t-23 92q0 85 58.5 143.5T648-446q49 0 92-23t72-62q2 13 3 25.59t1 25.65q0 139.9-98.04 237.83t-238 97.93Zm.04-72q82 0 148.78-47.07Q695.55-310.15 727-386q-20 5-39.67 8.5Q667.67-374 648-374q-113.86 0-193.93-80.07Q374-534.14 374-648q0-19.67 3.5-39.33Q381-707 386-727q-75.85 31.45-122.93 98.22Q216-562 216-480q0 110 77 187t187 77Zm-14-250Z"/></svg>
    </button>
</div>

{@render children()}

<!-- Footer -->
<footer class="bg-mantle dark:bg-dark-mantle text-text dark:text-dark-text text-center p-1 text-sm pt-4 pb-4">
    Alex Van der Ent © 2025
</footer>
