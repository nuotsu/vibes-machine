/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				serif: `'Apple Garamond', serif`,
				dos: `'Perfect DOS', serif`,
				handwritten: `'Nothing You Could Do', cursive`,
			},
			colors: {
				sand: '#fdf6e3',
				wave: '#2664f6',
				hot: '#ff00a8',
				leaf: '#7bc64b',
			},
			screens: {
				'<sm': { max: '640px' },
				'<md': { max: '768px' },
				'<lg': { max: '1024px' },
				'<xl': { max: '1280px' },
				'<2xl': { max: '1536px' },
			}
		},
	},
	plugins: [],
}
