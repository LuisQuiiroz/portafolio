/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Montserrat', 'sans-serif']
			},
			colors:{
				"white-1": "#eaedf3",
				"orange-1": "#ff6b01",
				"blue-1": "#212737",
				"gray-1": "#494f55",
			}
		},
		fontFamily: {
			'anton': ['Anton', 'sans-serif']
		}
	},
	plugins: [],
}
