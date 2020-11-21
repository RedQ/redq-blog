module.exports = {
	purge: ['./components/**/*.js', './pages/**/*.js'],
	theme: {
		extend: {
			colors: {
				'rq-gray': {
					200: '#f4f4f4',
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
					500: 'rgba(255, 255, 255, 0.5)',
					700: 'rgba(255, 255, 255, 0.7)',
				},
			},
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontFamily: {
				body: "'Fira Sans', sans-serif",
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
};
