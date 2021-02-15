const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
	async rewrites() {
		return [
			//we need to define a no-op rewrite to trigger checking
			//all pages/static files before we attempt proxying
			{
				source: '/:path*',
				destination: '/:path*',
			},
			{
				source: '/landing/:path*',
				destination: `https://redqio.vercel.app/landing/:path*`,
			},
			{
				source: '/pickbazar',
				destination: `https://redqio.vercel.app/landing/pickbazar`,
			},
			{
				source: '/rnb',
				destination: `https://redqio.vercel.app/landing/rnb`,
			},
			{
				source: '/deadline',
				destination: `https://redqio.vercel.app/landing/deadline`,
			},
			{
				source: '/storyhub',
				destination: `https://redqio.vercel.app/landing/storyhub`,
			},
			{
				source: '/picksy',
				destination: `https://redqio.vercel.app/landing/picksy`,
			},
			{
				source: '/headless',
				destination: `https://redqio.vercel.app/landing/headless`,
			},
			{
				source: '/medsy',
				destination: `https://redqio.vercel.app/landing/medsy`,
			},
			{
				source: '/isomorphic',
				destination: `https://redqio.vercel.app/landing/isomorphic`,
			},
			{
				source: '/reactive',
				destination: `https://redqio.vercel.app/landing/reactive`,
			},
			{
				source: '/turbowp',
				destination: `https://redqio.vercel.app/landing/turbowp`,
			},
			{
				source: '/react-next-landing',
				destination: `https://redqio.vercel.app/landing/react-next-landing`,
			},
			{
				source: '/listbook',
				destination: `https://redqio.vercel.app/landing/listbook`,
			},
			{
				source: '/shoppy',
				destination: `https://redqio.vercel.app/landing/shoppy`,
			},
			{
				source: '/cartsy',
				destination: `https://redqio.vercel.app/landing/cartsy`,
			},
		];
	},

	images: {
		domains: ['d2qklehrvrfpx7.cloudfront.net'],
	},
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
