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
			colors: {
				'rq-gray': {
					200: '#f4f4f4',
					300: '#EFF1F7',
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
				'70px': '4.375rem',
			},
			boxShadow: {
				light: '0 4px 16px 0 rgba(16, 66, 97, 0.07)',
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
};
