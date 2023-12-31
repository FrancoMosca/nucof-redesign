import animations from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", 'san serif'],
				montserrat: ["Montserrat"]
			}
		},
	},
	plugins: [animations, require('tailwind-scrollbar')],
}
