const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
	images: {
		domains: ['d2qklehrvrfpx7.cloudfront.net'],
	},
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
