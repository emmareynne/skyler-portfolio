/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Frank Ruhl Libre', 'serif'],
			'serif': ['Frank Ruhl Libre', 'serif'],
			'display': ['Yuji Mai', 'Yuji Syuku', 'serif'],
		'heading': ['Faculty Glyphic', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
	corePlugins: {
		textDecoration: false,
	},
}
