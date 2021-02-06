const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
	async rewrites() {
		return [
			// we need to define a no-op rewrite to trigger checking
			// all pages/static files before we attempt proxying
			{
				source: '/:path*',
				destination: '/:path*',
			},
			{
				source: '/:path*',
				destination: `https://redq.io/:path*`,
			},
		];
	},
	images: {
		domains: ['d2qklehrvrfpx7.cloudfront.net'],
	},
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
