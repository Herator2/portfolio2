import type { Config } from 'tailwindcss';

export default {
	darkMode: "class",

	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			"transparent": "transparent",

			"pink": "#ea76cb",
			"purple": "#8839ef",
			"red": "#d20f39",
			"orange": "#fe640b",
			"green": "#40a02b",
			"light-blue": "#04a5e5",
			"blue": "#1e66f5",
			
			"accent": "#3b82f6",

			"text": "#4c4f69",
			"subtext": "#5c5f77",
			"mantle": "#f0f0f0",
			"crust": "#dbdbdb",

			"dark-text": "#c6d0f5",
			"dark-subtext": "#b5bfe2",
			"dark-mantle": "#1e2030",
			"dark-crust": "#181926"
		},
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"]
			}
		}
	},

	plugins: []
} satisfies Config;
