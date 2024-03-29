/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'inter': ['Inter'],
    },
		container: {
			center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      
			screens: {
				sm: '100%',
				md: '100%',
				lg: '1024px',
				xl: '1280px'
			}
		},
		extend: {}
	},
	plugins: []
};
