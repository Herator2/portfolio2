
export let isDark = false;

export function toggleDark() {
    const htmlElement = document.documentElement;
    
    if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        isDark = false;
    } else {
        htmlElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        isDark = true;
    }
}

export function loadTheme() {
    if (localStorage.getItem("theme") === "dark") {
        toggleDark()
    }
}
