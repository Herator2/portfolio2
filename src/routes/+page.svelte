<script>
	import { toggleDark } from "$lib/dark";
    import { onMount } from 'svelte';
  
    let isStuck = false;
  
    function handleScroll() {
        const stickyElement = document.querySelector('#sticky');
        if (stickyElement !== null) {
            const rect = stickyElement.getBoundingClientRect();
            isStuck = rect.top <= 0; // Update based on position
        }
    }

    function copyEmail() {
        let email = "alex@herator2.dev";

        const copyText = async () => {
            try {
                await navigator.clipboard.writeText(email);
                alert("Copied");
            } catch(err) {
                console.error("Failed email copy: ", err);
            }
        }
    }
  
    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<!-- Friendly neighbourhood wrapper div start -->
<div class="min-h-screen flex flex-col">

<!-- Top Bar -->
<div id="sticky" class={isStuck ? "bg-mantle dark:bg-dark-mantle flex justify-center lg:justify-between m-0 mt-5 gap-3 sticky top-0 transition-all" : "bg-transparent flex justify-center lg:justify-between m-5 gap-3 mb-0 sticky top-0 transition-all"}>
    <!-- Contents -->
    <div id="sticky" class="justify-self-center text-text dark:text-dark-text rounded-full bg-mantle dark:bg-dark-mantle p-2 max-w-xl transition-all">
        <div class="grid gap-2 grid-cols-5">
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#about">About</a>
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#technologies">Skills</a>
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#projects">Projects</a>
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#qualifications">Merits</a>
            <a class="block text-center rounded-full p-1 transition-all active:scale-95 font-roboto hover:bg-accent hover:dark:bg-dark-accent" href="#contact">Contact</a>
        </div>
    </div>
    
    <!-- Theme toggles -->
    <button class="justify-self-end transition-all bg-mantle dark:bg-dark-mantle rounded-full p-1 pl-3 pr-3 active:scale-95" aria-label="Light mode" on:click={toggleDark}>
        <svg class="inline transition-all fill-text dark:fill-dark-text opacity-100 dark:opacity-25" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"/></svg>
        <svg class="inline transition-all fill-text dark:fill-dark-text opacity-25 dark:opacity-100" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M479.96-144Q340-144 242-242t-98-238q0-140 97.93-238t237.83-98q13.06 0 25.65 1 12.59 1 25.59 3-39 29-62 72t-23 92q0 85 58.5 143.5T648-446q49 0 92-23t72-62q2 13 3 25.59t1 25.65q0 139.9-98.04 237.83t-238 97.93Zm.04-72q82 0 148.78-47.07Q695.55-310.15 727-386q-20 5-39.67 8.5Q667.67-374 648-374q-113.86 0-193.93-80.07Q374-534.14 374-648q0-19.67 3.5-39.33Q381-707 386-727q-75.85 31.45-122.93 98.22Q216-562 216-480q0 110 77 187t187 77Zm-14-250Z"/></svg>
    </button>
</div>

<!-- Name / Title -->
<div class="mt-24 mb-24">
    <h1 class="text-text dark:text-dark-text font-roboto font-bold text-4xl text-center">
        Hey, I'm
        <!-- This span allows some of the text to be accented with a gradient -->
        <span class="bg-clip-text bg-gradient-to-r from-orange to-red text-transparent">
            Alex
        </span>
    </h1>
    <h2 class="text-subtext dark:text-dark-subtext font-roboto font-semibold text-xl text-center">
        A programmer from the UK
    </h2>
</div>


<!-- Containers -->
<div class="m-8">
    <div class="max-w-5xl flex-grow grid ml-auto mr-auto gap-8 grid-cols-4 grid-rows-[min-content_min-content_min-content_min-content]">
        <!-- About me -->
        <div id="about" class="col-span-4 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl bg-mantle dark:bg-dark-mantle p-2">
            <div class="text-center p-3">
                <p class="font-roboto text-sm">Hello, I am Alex Van der Ent, A young programmer from the UK. I spend most of my time making small private projects, and exploring the technology world. I learnt how to program in python initially, before learning rust and c. Afterward, I learnt HTML, CSS and JavaScript, before learning SvelteKit and Tailwind CSS, alongside TypeScript.</p>
            </div>
        </div>

        <!-- Technologies -->
        <!--
        <div id="technologies" class="col-span-4 sm:col-span-2 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl bg-mantle dark:bg-dark-mantle p-2">
            <p class="pt-[100px]"></p>
        </div>
        -->

        <!-- Projects -->
        <div id="projects" class="grid grid-cols-2 gap-5 col-span-4 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl">
            <div class="flex flex-col justify-between bg-mantle dark:bg-dark-mantle rounded-xl p-5">
                <h2 class="text-center font-roboto font-medium">Sparx Maths Helper</h2>
                <p class="text-sm pt-2 font-roboto">Complete your sparx homework quicker and more efficiently. This simple script allows you to quickly store and retreive codes in the least amount of keypresses. Tested for Windows and Linux. </p>
                <p class="text-sm pt-2 font-roboto">*Reqiures the python runtime.</p>
                <div class="grid pt-3 grid-cols-1 lg:grid-cols-2 gap-2 font-roboto">
                    <a target="_blank" href="https://github.com/Herator2/sparx-helper" class="block text-center w-full bg-crust dark:bg-dark-crust rounded-full p-1 transition-all hover:bg-accent hover:dark:bg-accent">View on GitHub</a>
                    <a target="_blank" href="https://github.com/Herator2/sparx-helper/releases/latest/download/main.py" class="block text-center w-full bg-crust dark:bg-dark-crust rounded-full p-1 transition-all hover:bg-accent hover:dark:bg-accent">Download Latest*</a>
                </div>
            </div>

            <div class="flex flex-col justify-between bg-mantle dark:bg-dark-mantle rounded-xl p-5">
                <h2 class="text-center font-roboto font-medium">My Website</h2>
                <p class="text-sm pt-2 font-roboto">You are currently viewing this, and this is the second edition of the website, made from scratch. Initially the website used no frameworks, but I switched to SvelteKit and Tailwind CSS for this edition alongside using some TypeScript behind the scenes.</p>
                <div class="grid pt-3 grid-cols-1 gap-2 font-roboto">
                    <a target="_blank" href="https://github.com/Herator2/sparx-helper" class="block text-center w-full bg-crust dark:bg-dark-crust rounded-full p-1 transition-all hover:bg-accent hover:dark:bg-accent">View on GitHub</a>
                </div>
            </div>
        </div>

        <!-- Qualifications -->
        <!--
        <div id="qualifications" class="col-span-4 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl bg-mantle dark:bg-dark-mantle p-2">
            <p class="pt-[100px]"></p>
        </div>
        -->

        <!-- Contact -->
        <div id="contact" class="col-span-4 grid grid-cols-2 grid-rows-[min-content_min-content] gap-5 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl bg-mantle dark:bg-dark-mantle p-5">
            <p class="font-roboto text-md p-2">You are likely to find me on my GitHub...</p>
            <p class="font-roboto text-md p-2">Or, Email me directly through...</p>
            <div class="flex justify-between bg-crust dark:bg-dark-crust text-text dark:text-dark-text rounded-xl">
                <p class="p-2 font-roboto font-medium">Herator2</p>
                <a class="border-l-2 border-l-subtext dark:border-l-dark-subtext p-2 active:scale-95 hover:bg-accent transition-all rounded-r-xl" href="https://www.github.com/Herator2" target="_blank" aria-label="Link to github">
                    <svg class="fill-subtext dark:fill-dark-subtext" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg>
                </a>
            </div>
            
            <div class="flex justify-between bg-crust dark:bg-dark-crust text-text dark:text-dark-text rounded-xl">
                <p class="p-2 font-roboto font-medium">alex@herator2.dev</p>
                <a class="border-l-2 border-l-subtext dark:border-l-dark-subtext p-2 active:scale-95 hover:bg-accent transition-all rounded-r-xl" aria-label="Email me" href="mailto:alex@herator2.dev" target="_blank">
                    <svg class="fill-subtext dark:fill-dark-subtext" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg>
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<footer class="bg-mantle dark:bg-dark-mantle text-text dark:text-dark-text text-center p-1 text-sm">
    Alex Van der Ent - 2024
</footer>

<!-- Friendly neighbourhood wrapper div end -->
</div>
