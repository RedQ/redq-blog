const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
	// images: {
	// 	deviceSizes: [320, 420, 768, 1024, 1200],
	// 	domains: ['d2qklehrvrfpx7.cloudfront.net'],
	// },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
