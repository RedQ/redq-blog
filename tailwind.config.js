module.exports = {
	purge: ['./components/**/*.js', './pages/**/*.js'],
	variants: {
		extend: {
			borderWidth: ['hover', 'focus'],
			borderStyle: ['hover', 'focus'],
			borderColor: ['hover', 'focus'],
		},
	},
	theme: {
		extend: {
			rotate: {
				'rq-8': '8deg',
			},
			colors: {
				'filter-text': '#71747D',
				'rq-gray': {
					100: '#ECF0F5',
					200: '#f4f4f4',
					300: '#EFF1F7',
					400: '#D9DEE3',
					500: '#898989',
					600: '#6C6C6C',
					700: '#343D48',
					800: '#0B1419',
				},
				'rq-blue': {
					800: '#2950DB',
				},
				'rq-white': {
					100: 'rgba(255, 255, 255, 0.1)',
					300: 'rgba(255, 255, 255, 0.3)',
					500: 'rgba(255, 255, 255, 0.5)',
					700: 'rgba(255, 255, 255, 0.7)',
				},
			},
			fontFamily: {
				body: "'Fira Sans', sans-serif",
			},
			fontSize: {
				'15px': '0.9375rem',
				'40px': '2.5rem',
				'44px': '2.75rem',
				'70px': '4.375rem',
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				light: '0 4px 16px 0 rgba(16, 66, 97, 0.07)',
				base: '0 2px 8px rgba(97, 121, 142, 0.15)',
				medium: '0px 13px 40px rgba(75, 102, 135, 0.1)',
				large: '0px 12px 50px rgba(97, 114, 138, 0.1)',
			},
		},
	},
};
