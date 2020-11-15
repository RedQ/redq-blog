/**
 * Get Post Categories
 * @param {string} categories - comma separated categories with first character uppercase
 */
export function getPostCategories(categories) {
	const postCategories = [];
	if (categories) {
		const categoryData = categories.split(', ');
		categoryData.map((category) =>
			postCategories.push({
				name: category,
				slug: category.replace(/[^A-Z0-9]+/gi, '-').toLowerCase(),
			})
		);
	}
	return postCategories;
}

/**
 * Get categories
 * @param {Array} posts - posts data
 */
export function getCategories(posts) {
	const categories = [];
	posts?.map((post) => {
		const postCategories = getPostCategories(post?.category);
		postCategories.map((postCategory) => {
			if (categories?.length) {
				if (
					!categories.some((category) => category?.slug === postCategory?.slug)
				) {
					categories.push(postCategory);
				}
			} else {
				categories.push(postCategory);
			}
		});
	});
	return categories;
}

export function getPostsByCategory(posts, categorySlug) {
	const categoryPosts = [];
	posts.map((post) => {
		const postCategories = getPostCategories(post?.category);
		if (
			postCategories.some((postCategory) => postCategory.slug === categorySlug)
		) {
			categoryPosts.push(post);
		}
	});
	return categoryPosts;
}
