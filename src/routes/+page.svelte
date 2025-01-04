
<!-- Friendly neighbourhood wrapper div start -->
<div class="min-h-screen flex flex-col">

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
                <p class="font-roboto text-sm">Hello, I am Alex Van der Ent, a young programmer from the UK. I spend most of my time making small private projects, and exploring the technology world. I learnt how to program in python initially, before learning rust and c. Afterward, I learnt HTML, CSS and JavaScript, before learning SvelteKit and Tailwind CSS, alongside TypeScript.</p>
            </div>
        </div>

        <!-- Projects -->
        <div id="projects" class="grid grid-cols-1 sm:grid-cols-2 gap-5 col-span-4 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl">
            <div class="flex flex-col justify-between bg-mantle dark:bg-dark-mantle rounded-xl p-5">
                <h2 class="text-center font-roboto font-medium">Sparx Maths Helper</h2>
                <p class="text-sm pt-2 font-roboto">Complete your sparx homework quicker and more efficiently. This simple script allows you to quickly store and retreive codes in the least amount of keypresses. Tested for Windows and Linux. </p>
                <p class="text-sm pt-2 font-roboto">*Reqiures the python runtime.</p>
                <div class="grid pt-3 grid-cols-1 lg:grid-cols-2 gap-2 font-roboto">
                    <a target="_blank" href="https://github.com/Herator2/sparx-helper" class="block text-center w-full bg-crust dark:bg-dark-crust rounded-full p-1 transition-all hover:bg-accent hover:dark:bg-accent active:scale-95">View on GitHub</a>
                    <a target="_blank" href="https://github.com/Herator2/sparx-helper/releases/latest/download/main.py" class="block text-center w-full bg-dark-mantle dark:bg-mantle rounded-full p-1 transition-all hover:bg-dark-crust hover:dark:bg-crust active:scale-95 text-mantle dark:text-dark-mantle">Download Latest*</a>
                </div>
            </div>

            <div class="flex flex-col justify-between bg-mantle dark:bg-dark-mantle rounded-xl p-5">
                <h2 class="text-center font-roboto font-medium">My Website</h2>
                <p class="text-sm pt-2 font-roboto">You are currently viewing this, and this is the second edition of the website, made from scratch. Initially the website used no frameworks, but I switched to SvelteKit and Tailwind CSS for this edition alongside using some TypeScript behind the scenes.</p>
                <div class="grid pt-3 grid-cols-1 gap-2 font-roboto">
                    <a target="_blank" href="https://github.com/Herator2/sparx-helper" class="block text-center w-full bg-crust dark:bg-dark-crust rounded-full p-1 transition-all hover:bg-accent hover:dark:bg-accent active:scale-95">View on GitHub</a>
                </div>
            </div>
        </div>

        <!-- Technologies -->
        <div id="technologies" class="col-span-4 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl bg-mantle dark:bg-dark-mantle p-2">
            <div class="grid md:grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto] grid-cols-7 gap-2">
                <a aria-label="html" href="https://developer.mozilla.org/en-US/docs/Web/HTML" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="35" height="35" fill="" rx="60" />
                            <path fill="#e64a19" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z" />
                            <path fill="#ff5722" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z" />
                        </g>
                    </svg>
                </a>
                
                <a aria-label="css" href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="35" height="35" fill="" rx="60" />
                            <path fill="#1976d2" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z" />
                            <path fill="#2196f3" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z" />
                        </g>
                    </svg>
                </a>

                <a aria-label="javascript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="m-auto w-[35px] h-[35px] rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="#f0db4f" rx="60" />
                            <path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
                        </g>
                    </svg>
                </a>

                <a aria-label="typescript" href="https://www.typescriptlang.org/" class="m-auto w-[35px] h-[35px] rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="#007acc" rx="60" />
                            <path fill="#fff" d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569" />
                        </g>
                    </svg>
                </a>

                <a aria-label="svelte" href="https://svelte.dev/" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <g clip-path="url(#skillIconsSvelte0)">
                                <path fill="#ff5722" d="M193.034 61.797c-16.627-23.95-49.729-30.966-73.525-15.865L77.559 72.78c-11.44 7.17-19.372 18.915-21.66 32.186c-1.984 11.136-.306 22.576 5.033 32.492c-3.66 5.491-6.102 11.593-7.17 18c-2.44 13.576.764 27.61 8.696 38.745c16.78 23.95 49.728 30.966 73.525 15.865l41.949-26.695c11.441-7.17 19.373-18.915 21.661-32.187c1.983-11.135.305-22.576-5.034-32.491c3.661-5.492 6.102-11.593 7.17-18c2.593-13.729-.61-27.763-8.695-38.898" />
                                <path fill="#fff" d="M115.39 196.491a33.25 33.25 0 0 1-35.695-13.271c-4.881-6.712-6.712-15.101-5.34-23.339c.306-1.373.611-2.593.916-3.966l.763-2.44L78.169 155a55.6 55.6 0 0 0 16.475 8.237l1.525.458l-.152 1.525c-.153 2.136.458 4.424 1.678 6.255c2.441 3.508 6.712 5.186 10.83 4.118c.916-.305 1.831-.61 2.594-1.068l41.796-26.695c2.136-1.372 3.509-3.355 3.966-5.796s-.152-5.034-1.525-7.017c-2.441-3.509-6.712-5.034-10.831-3.966c-.915.305-1.83.61-2.593 1.068l-16.017 10.22c-2.593 1.678-5.491 2.898-8.542 3.661a33.25 33.25 0 0 1-35.695-13.271c-4.729-6.712-6.712-15.102-5.186-23.339c1.372-7.932 6.254-15.102 13.118-19.373l41.949-26.695c2.593-1.678 5.492-2.898 8.543-3.814a33.25 33.25 0 0 1 35.695 13.272c4.881 6.712 6.711 15.101 5.339 23.339c-.306 1.373-.611 2.593-1.068 3.966l-.763 2.44l-2.136-1.525a55.6 55.6 0 0 0-16.474-8.237l-1.526-.458l.153-1.525c.153-2.136-.458-4.424-1.678-6.255c-2.441-3.508-6.712-5.034-10.83-3.966c-.916.305-1.831.61-2.594 1.068l-41.796 26.695c-2.136 1.373-3.509 3.356-3.966 5.797s.152 5.034 1.525 7.017c2.441 3.508 6.712 5.033 10.831 3.966c.915-.305 1.83-.611 2.593-1.068l16.017-10.22c2.593-1.678 5.491-2.899 8.542-3.814a33.25 33.25 0 0 1 35.695 13.271c4.881 6.712 6.712 15.102 5.339 23.339c-1.373 7.932-6.254 15.102-13.119 19.373l-41.949 26.695c-2.593 1.678-5.491 2.898-8.542 3.813" />
                            </g>
                            <defs>
                                <clipPath id="skillIconsSvelte0">
                                    <path fill="#ff5722" d="M53 38h149.644v180H53z" />
                                </clipPath>
                            </defs>
                        </g>
                    </svg>
                </a>

                <a aria-label="tailwind" href="https://tailwindcss.com/" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <path fill="url(#skillIconsTailwindcssDark0)" fill-rule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clip-rule="evenodd" />
                            <defs>
                                <linearGradient id="skillIconsTailwindcssDark0" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#32b1c1" />
                                    <stop offset="1" stop-color="#14c6b7" />
                                </linearGradient>
                            </defs>
                        </g>
                    </svg>
                </a>

                <a aria-label="rust" href="https://www.rust-lang.org/" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <path fill="#ff5722" d="m226.574 125.551l-8.39-5.198q-.107-1.227-.239-2.446l7.224-6.727a2.88 2.88 0 0 0 .864-2.676a2.87 2.87 0 0 0-1.821-2.14l-9.232-3.44c-.231-.799-.474-1.592-.722-2.389l5.753-7.988a2.88 2.88 0 0 0 .325-2.79a2.9 2.9 0 0 0-2.198-1.747l-9.729-1.583a72 72 0 0 0-1.17-2.178l4.091-8.982a2.89 2.89 0 0 0-.226-2.81a2.87 2.87 0 0 0-2.504-1.282l-9.881.344q-.765-.958-1.56-1.892l2.275-9.613a2.896 2.896 0 0 0-3.485-3.483l-9.613 2.274a83 83 0 0 0-1.896-1.56l.346-9.88c.038-1-.45-1.95-1.283-2.504a2.9 2.9 0 0 0-2.81-.227l-8.964 4.09q-1.086-.599-2.178-1.172l-1.587-9.727a2.87 2.87 0 0 0-1.747-2.198a2.88 2.88 0 0 0-2.79.325l-7.989 5.752a97 97 0 0 0-2.37-.72l-3.441-9.23a2.89 2.89 0 0 0-2.14-1.826a2.9 2.9 0 0 0-2.676.864l-6.728 7.224a87 87 0 0 0-2.446-.239l-5.199-8.409A2.9 2.9 0 0 0 127.972 28c-1.009 0-1.93.518-2.446 1.368l-5.199 8.41c-.818.066-1.636.148-2.446.238l-6.728-7.224a2.9 2.9 0 0 0-2.676-.864a2.88 2.88 0 0 0-2.141 1.825l-3.44 9.23c-.799.23-1.59.473-2.37.721l-7.99-5.752a2.87 2.87 0 0 0-2.79-.325A2.9 2.9 0 0 0 88 37.825l-1.586 9.727q-1.1.571-2.179 1.172l-8.964-4.09a2.893 2.893 0 0 0-4.092 2.731l.344 9.88a92 92 0 0 0-1.896 1.56l-9.614-2.274a2.91 2.91 0 0 0-2.714.77c-.71.709-1 1.731-.77 2.713l2.255 9.613a93 93 0 0 0-1.556 1.892l-9.88-.344a2.9 2.9 0 0 0-2.505 1.282a2.9 2.9 0 0 0-.227 2.81l4.09 8.982q-.599 1.08-1.172 2.178l-9.728 1.583a2.87 2.87 0 0 0-2.198 1.747a2.89 2.89 0 0 0 .325 2.79l5.753 7.988a82 82 0 0 0-.723 2.389l-9.231 3.44a2.89 2.89 0 0 0-1.822 2.14a2.89 2.89 0 0 0 .864 2.676l7.225 6.727q-.135 1.22-.239 2.446l-8.39 5.198a2.89 2.89 0 0 0-1.37 2.465c0 1.011.518 1.931 1.369 2.447l8.39 5.198q.105 1.228.239 2.446l-7.225 6.727a2.888 2.888 0 0 0 .958 4.816l9.231 3.44c.23.799.472 1.592.723 2.389l-5.753 7.988a2.886 2.886 0 0 0 1.892 4.537l9.729 1.582q.57 1.107 1.171 2.179l-4.09 8.963a2.892 2.892 0 0 0 2.731 4.091l9.862-.345a95 95 0 0 0 1.56 1.895l-2.255 9.613c-.23.975.06 1.988.77 2.695a2.89 2.89 0 0 0 2.714.768l9.614-2.255a78 78 0 0 0 1.896 1.556l-.344 9.88a2.88 2.88 0 0 0 1.282 2.503c.83.556 1.893.641 2.81.224l8.964-4.09q1.083.602 2.179 1.172l1.586 9.727c.16.99.822 1.827 1.747 2.217c.923.384 1.988.26 2.79-.323l7.99-5.752c.789.25 1.582.495 2.389.724l3.44 9.23a2.88 2.88 0 0 0 2.141 1.822a2.88 2.88 0 0 0 2.676-.864l6.728-7.224c.812.094 1.63.172 2.446.245l5.199 8.389a2.89 2.89 0 0 0 2.446 1.369c.992 0 1.931-.52 2.466-1.369l5.199-8.389a94 94 0 0 0 2.446-.245l6.728 7.224a2.88 2.88 0 0 0 2.676.864a2.87 2.87 0 0 0 2.14-1.822l3.441-9.23c.798-.229 1.592-.474 2.389-.724l7.989 5.752a2.885 2.885 0 0 0 4.537-1.894l1.587-9.727c.734-.381 1.46-.776 2.179-1.172l8.964 4.09a2.89 2.89 0 0 0 4.092-2.727l-.344-9.88a80 80 0 0 0 1.894-1.556l9.613 2.255a2.89 2.89 0 0 0 2.715-.768a2.87 2.87 0 0 0 .77-2.695l-2.256-9.613a76 76 0 0 0 1.556-1.895l9.882.345a2.87 2.87 0 0 0 2.503-1.282a2.88 2.88 0 0 0 .226-2.809l-4.09-8.963q.6-1.086 1.17-2.179l9.728-1.582a2.86 2.86 0 0 0 2.198-1.747a2.88 2.88 0 0 0-.325-2.79l-5.753-7.988c.249-.79.491-1.583.723-2.389l9.231-3.44a2.88 2.88 0 0 0 1.822-2.141a2.88 2.88 0 0 0-.864-2.675l-7.225-6.727q.132-1.22.239-2.446l8.391-5.198a2.88 2.88 0 0 0 1.368-2.447c0-.991-.516-1.93-1.367-2.465zm-56.192 69.755c-3.211-.692-5.237-3.861-4.549-7.071a5.94 5.94 0 0 1 7.053-4.568c3.211.686 5.256 3.86 4.568 7.071a5.94 5.94 0 0 1-7.053 4.568zm-2.848-19.302c-2.924-.627-5.81 1.234-6.422 4.166l-2.981 13.912c-9.194 4.167-19.496 6.498-30.199 6.498c-11.009 0-21.406-2.427-30.772-6.784l-2.981-13.913c-.627-2.924-3.498-4.797-6.422-4.166l-12.29 2.637a74 74 0 0 1-6.346-7.491h59.824c.677 0 1.128-.122 1.128-.738v-21.213c0-.615-.451-.737-1.128-.737h-17.488v-13.397h18.902c1.726 0 9.232.493 11.621 10.09c.751 2.943 2.408 12.537 3.536 15.614c1.124 3.44 5.696 10.32 10.57 10.32h29.816c.338 0 .699-.039 1.08-.107a75 75 0 0 1-6.766 7.95l-12.577-2.695zm-82.759 19.015a5.933 5.933 0 0 1-7.053-4.568c-.686-3.21 1.354-6.383 4.568-7.071a5.94 5.94 0 0 1 7.053 4.568c.686 3.211-1.355 6.383-4.568 7.071m-22.744-91.923a5.96 5.96 0 0 1-3.02 7.854a5.94 5.94 0 0 1-7.837-3.019c-1.337-2.997.023-6.517 3.02-7.855a5.94 5.94 0 0 1 7.837 3.02m-6.977 16.512l12.806-5.695c2.733-1.214 3.976-4.415 2.752-7.148l-2.637-5.962h10.359v46.63H57.501a73.3 73.3 0 0 1-2.79-20.066a74 74 0 0 1 .418-7.855zm56.193-4.53v-13.759h24.655c1.275 0 9.002 1.473 9.002 7.243c0 4.796-5.925 6.516-10.798 6.516H111.17zm89.639 12.384c0 1.827-.067 3.631-.2 5.428h-7.512c-.751 0-1.053.493-1.053 1.228v3.44c0 8.103-4.568 9.881-8.582 10.32c-3.822.43-8.046-1.597-8.562-3.937c-2.256-12.67-6.002-15.365-11.927-20.066c7.359-4.663 15.004-11.562 15.004-20.831c0-9.956-6.823-16.225-11.468-19.302c-6.536-4.3-13.761-5.16-15.711-5.16H73.277c10.53-11.733 24.847-20.066 40.901-23.124l9.156 9.594a5.415 5.415 0 0 0 7.664.176l10.244-9.785c21.407 3.994 39.564 17.334 50.076 35.737l-7.014 15.824c-1.21 2.733.025 5.944 2.752 7.148l13.494 6c.233 2.389.355 4.816.355 7.262zm-77.598-80.074a5.923 5.923 0 0 1 8.39.193a5.96 5.96 0 0 1-.197 8.409a5.92 5.92 0 0 1-8.39-.195a5.96 5.96 0 0 1 .197-8.409zm69.571 55.995a5.927 5.927 0 0 1 7.836-3.02a5.95 5.95 0 0 1 3.02 7.855a5.93 5.93 0 0 1-7.836 3.019a5.95 5.95 0 0 1-3.02-7.854" />
                        </g>
                    </svg>
                </a>

                <a aria-label="python" href="https://www.python.org/" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <path fill="#4985ff" d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716a8.71 8.71 0 0 1-8.716-8.716a8.71 8.71 0 0 1 8.716-8.717" />
                            <path fill="#ffdc49" d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716a8.71 8.71 0 0 1 8.717-8.717a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716" />
                        </g>
                    </svg>
                </a>

                <a aria-label="c" href="https://www.w3schools.com/c/c_intro.php" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <path fill="#1976d2" d="M134.001 33c35.143 0 65.827 19.086 82.261 47.456l-.16-.273l-41.349 23.808c-8.146-13.793-23.081-23.102-40.213-23.293l-.539-.003c-26.126 0-47.306 21.179-47.306 47.304a47.1 47.1 0 0 0 6.239 23.47c8.154 14.235 23.482 23.837 41.067 23.837c17.692 0 33.108-9.724 41.221-24.111l-.197.345l41.286 23.918c-16.254 28.13-46.517 47.157-81.252 47.536l-1.058.006c-35.255 0-66.026-19.204-82.419-47.724C43.579 161.353 39 145.212 39 127.999C39 75.533 81.532 33 134.001 33" />
                        </g>
                    </svg>
                </a>

                <a aria-label="c++" href="https://www.w3schools.com/cpp/cpp_intro.asp" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <path fill="#1976d2" d="M110.759 210.517C65.125 210.517 28 173.392 28 127.759C28 82.125 65.125 45 110.759 45c29.445 0 56.908 15.846 71.668 41.353l-35.816 20.726c-7.387-12.768-21.126-20.7-35.852-20.7c-22.817 0-41.38 18.563-41.38 41.38c0 22.816 18.563 41.379 41.38 41.379c14.727 0 28.466-7.932 35.854-20.702l35.816 20.725c-14.76 25.51-42.223 41.356-71.67 41.356" />
                            <path fill="#1976d2" d="M193.517 123.161h-9.196v-9.196h-9.194v9.196h-9.196v9.195h9.196v9.196h9.194v-9.196h9.196zm34.483 0h-9.196v-9.196h-9.194v9.196h-9.196v9.195h9.196v9.196h9.194v-9.196H228z" />
                        </g>
                    </svg>
                </a>

                <a aria-label="git" href="https://git-scm.com/" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <g clip-path="url(#skillIconsGit0)">
                                <path fill="#ff5722" d="m224.225 119.094l-87.319-87.319a12.87 12.87 0 0 0-14.035-2.793a12.9 12.9 0 0 0-4.177 2.793L100.569 49.9l23 23c5.35-1.875 11.475-.594 15.737 3.669a15.31 15.31 0 0 1 3.631 15.831l22.169 22.169c5.363-1.85 11.55-.657 15.831 3.637a15.32 15.32 0 0 1 3.321 16.706a15.333 15.333 0 0 1-20.029 8.293c-1.86-.771-3.55-1.9-4.973-3.324c-4.5-4.5-5.612-11.125-3.337-16.669l-20.675-20.675v54.407a15.6 15.6 0 0 1 4.062 2.9a15.326 15.326 0 0 1-21.675 21.675a15.32 15.32 0 0 1-3.326-16.704a15.3 15.3 0 0 1 3.326-4.971c1.481-1.475 3.125-2.594 5.019-3.344v-54.913a15.2 15.2 0 0 1-5.019-3.343a15.315 15.315 0 0 1-3.3-16.757L91.644 58.814l-59.875 59.812a12.88 12.88 0 0 0-2.795 14.04a12.9 12.9 0 0 0 2.795 4.179l87.325 87.312a12.9 12.9 0 0 0 4.177 2.793a12.9 12.9 0 0 0 9.858 0a12.9 12.9 0 0 0 4.177-2.793l86.919-86.781a12.88 12.88 0 0 0 3.776-9.109a12.88 12.88 0 0 0-3.776-9.11" />
                            </g>
                            <defs>
                                <clipPath id="skillIconsGit0">
                                    <path fill="#ff5722" d="M28 28h200v200H28z" />
                                </clipPath>
                            </defs>
                        </g>
                    </svg>
                </a>

                <a aria-label="github" href="https://github.com/" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <path fill="#888" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097" />
                        </g>
                    </svg>
                </a>

                <a aria-label="rustrover" href="https://www.jetbrains.com/rust/" class="m-auto w-[35px] h-[35px] rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 64 64">
                        <defs>
                          <linearGradient id="a" x1="7.62141" x2="61.2476" y1="64.7192" y2="39.8564" gradientUnits="userSpaceOnUse">
                            <stop offset=".08" stop-color="#00D886"/>
                            <stop offset=".46" stop-color="#FFAB00"/>
                          </linearGradient>
                          <linearGradient id="b" x1="60.0186" x2="1.31316" y1="59.7777" y2="1.07287" gradientUnits="userSpaceOnUse">
                            <stop offset=".19" stop-color="#FFAB00"/>
                            <stop offset=".83" stop-color="#FF004C"/>
                          </linearGradient>
                        </defs>
                        <path fill="#00D886" d="m5.81836 48.0512.00174 11.8755c0 2.2493 1.82342 4.0721 4.07273 4.0721H21.3994c1.1887 0 2.3186-.5196 3.0924-1.422l32.7098-38.1614c.6325-.7383.9804-1.6786.9804-2.6508V9.88913c0-2.24931-1.8234-4.07272-4.0727-4.07272H42.6009c-1.1887 0-2.3185.51956-3.0924 1.42196L6.79872 45.3998c-.63302.7383-.98036 1.6786-.98036 2.6514Z"/>
                        <path fill="url(#a)" d="M5.81836 49.4825v10.4466c0 2.2493 1.82342 4.0727 4.07273 4.0727H22.9837c.1926 0 .3852-.014.576-.0407l36.9437-5.2771c2.0067-.2868 3.4968-2.005 3.4968-4.032V38.979c0-2.2499-1.824-4.0733-4.0739-4.0727l-18.5385.0046c-.4375 0-.8721.0704-1.287.2089L8.60294 45.6193c-1.66284.5544-2.78458 2.1108-2.78458 3.8638v-.0006Z"/>
                        <path fill="url(#b)" d="M0 4.07273V38.041c0 1.6291.971054 3.1017 2.46807 3.7434L39.9587 57.8525c.5067.217 1.0531.3293 1.6046.3293h18.364c2.2493 0 4.0727-1.8234 4.0727-4.0727v-17.966c0-.8046-.2386-1.5913-.6854-2.2609L41.9113 1.81353C41.1561.681309 39.8854.001745 38.5239.001745L4.07273 0C1.82342 0 0 1.82342 0 4.07273Z"/>
                        <path fill="#000" d="M52 12H12v40h40V12Z"/>
                        <path fill="#fff" fill-rule="evenodd" d="M20.0198 26.3347h2.5244L25.7735 32h3.3538l-3.5713-6.0085c.0732-.0233.1478-.0446.2224-.0659.1681-.0481.3363-.0962.4881-.1666.8145-.4017 1.439-.9511 1.8753-1.6605.4425-.71.6641-1.5268.6641-2.4647 0-.9379-.2181-1.7277-.6538-2.4239-.4288-.6963-1.0429-1.2456-1.8431-1.6342-.8001-.3886-1.7248-.5757-2.7752-.5757h-6.4396v15h2.9251l.0005-5.6653Zm0-6.897h3.3217c.4931 0 .9213.0936 1.2857.2681.3714.1871.6573.4419.8576.7772.1997.3346.3002.7232.3002 1.1784 0 .4551-.0999.8437-.3002 1.1921-.2003.3347-.4856.5895-.8576.7766-.3644.1877-.7926.2681-1.2857.2681h-3.3217v-4.4605Z" clip-rule="evenodd"/>
                        <path fill="#fff" fill-rule="evenodd" d="m43.5671 32-3.5714-6.0085c.0733-.0233.1479-.0446.2225-.0659.1681-.0481.3363-.0962.4881-.1666.8145-.4017 1.4396-.9511 1.8753-1.6605.4425-.71.6641-1.5268.6641-2.4647 0-.9379-.2182-1.7277-.6538-2.4239-.4288-.6963-1.043-1.2456-1.8431-1.6342C39.9487 17.1871 39.024 17 37.9736 17H31.534v15h2.9251v-5.6653h2.5244L40.2127 32h3.3544Zm-9.1069-12.5623h3.3217c.493 0 .9212.0936 1.2857.2681.3714.1871.6572.4419.857.7772.1997.3346.3002.7232.3002 1.1784 0 .4551-.0999.8437-.3002 1.1921-.2004.3347-.4856.5895-.857.7766-.3645.1877-.7927.2681-1.2857.2681h-3.3217v-4.4605Z" clip-rule="evenodd"/>
                        <path fill="#fff" d="M16.9941 44h16v3h-16v-3Z"/>
                      </svg>
                </a>

                <a aria-label="vscode" href="https://code.visualstudio.com/" class="m-auto w-[35px] h-[35px] bg-crust dark:bg-dark-crust rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <path fill="#42a5f5" d="M33.716 100.208s-4.735-3.413.947-7.97l13.236-11.836s3.788-3.985 7.792-.513l122.149 92.479v44.346s-.059 6.964-8.996 6.194z" />
                            <path fill="#1976d2" d="m65.2 128.792l-31.484 28.623s-3.236 2.407 0 6.708l14.617 13.295s3.472 3.729 8.601-.513l33.378-25.309z" />
                            <path fill="#1976d2" d="m120.474 129.029l57.741-44.09l-.375-44.109s-2.466-9.627-10.692-4.616l-76.836 69.931z" />
                            <path fill="#90caf9" d="M168.844 222.968c3.354 3.432 7.418 2.308 7.418 2.308l44.997-22.173c5.76-3.926 4.951-8.798 4.951-8.798V61.898c0-5.82-5.958-7.831-5.958-7.831l-38.999-18.8c-8.522-5.267-14.105.947-14.105.947s7.18-5.168 10.692 4.616v175.075a8 8 0 0 1-.769 3.453c-1.026 2.071-3.255 4.004-8.601 3.195z" />
                        </g>
                    </svg>
                </a>
            </div>
        </div>

        <!-- Qualifications -->
        <!--
        <div id="qualifications" class="col-span-4 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl bg-mantle dark:bg-dark-mantle p-2">
            <p class="pt-[100px]"></p>
        </div>
        -->

        <!-- Contact -->
        <div id="contact" class="col-span-4 grid grid-cols-1 sm:grid-cols-2 grid-rows-[min-content_min-content] gap-5 scroll-mt-20 text-subtext dark:text-dark-subtext rounded-xl bg-mantle dark:bg-dark-mantle p-5">
            <div class="flex flex-col justify-between">
                <p class="font-roboto text-md p-2">You are likely to find me on my GitHub...</p>
                <div class="flex justify-between bg-crust dark:bg-dark-crust text-text dark:text-dark-text rounded-xl">
                    <p class="p-2 font-roboto font-medium">Herator2</p>
                    <a class="p-2 active:scale-95 bg-dark-mantle dark:bg-mantle transition-all rounded-r-xl hover:bg-dark-crust hover:dark:bg-crust" href="https://www.github.com/Herator2" target="_blank" aria-label="Link to github">
                        <svg class="fill-mantle dark:fill-dark-mantle" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg>
                    </a>
                </div>
            </div>
            
            <div class="flex flex-col justify-between">
                <p class="font-roboto text-md p-2">Or, Email me directly through...</p>
                <div class="flex justify-between bg-crust dark:bg-dark-crust text-text dark:text-dark-text rounded-xl">
                    <p class="p-2 font-roboto font-medium">alex@herator2.dev</p>
                    <a class="p-2 active:scale-95 bg-dark-mantle dark:bg-mantle transition-all rounded-r-xl hover:bg-dark-crust hover:dark:bg-crust" aria-label="Email me" href="mailto:alex@herator2.dev" target="_blank">
                        <svg class="fill-mantle dark:fill-dark-mantle" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Friendly neighbourhood wrapper div end -->
</div>
