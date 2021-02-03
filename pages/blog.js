import { NextSeo } from 'next-seo';
import Layout from '../components/layout/layout';
import Intro from '../components/ui/intro';
import Container from '../components/ui/container';
import Categories from '../components/ui/categories';
import PostList from '../components/post/post-list';
// api and utils
import { getAllPosts } from '../lib/api';
import { getPostCategories } from '../lib/utils';

export default function Blog({ allPosts }) {
	// collect allPosts category to an array
	let postsCategories = [];
	allPosts.forEach((post) => {
		if (post.category !== undefined && post.category !== '') {
			postsCategories.push(post.category);
		}
	});
	/*
	 * Make a long string from an array,
	 * removed whitespace after each comma,
	 * converted the long string to an array.
	 */
	const allCategories = postsCategories
		.join()
		.replace(/\s*,\s*/gi, ',')
		.split(',');
	// filter unique categories from allCategories
	const uniqueCategories = allCategories.filter(
		(value, index) => allCategories.indexOf(value) === index
	);

	return (
		<>
			<div>
				<NextSeo
					title="RedQ Inc | We build products that create value"
					description="We build products that create value"
					canonical="https://redq.io"
					openGraph={{
						url: 'https://redq.io',
						title: 'RedQ Inc | We build products that create value"',
						description:
							'REDQ is a creative agency specialising in building scalable, high performance web & mobile application.',
						images: [
							{
								url:
									'https://s3.amazonaws.com/redqteam.com/cartsy_asset/cartsy_banner_image.pnghttps://s3.amazonaws.com/redqteam.com/cartsy_asset/cartsy_banner_image.png',
								width: 1200,
								height: 630,
								alt: 'pickbazar,rnb,cartsy',
							},
							{
								url:
									'https://s3.amazonaws.com/redqteam.com/cartsy_asset/cartsy_banner_image.pnghttps://s3.amazonaws.com/redqteam.com/cartsy_asset/cartsy_banner_image.png',
								width: 1200,
								height: 630,
								alt: 'pickbazar,rnb,cartsy',
							},
						],
					}}
				/>
			</div>
			<Layout>
				<Intro title="Blog" />
				<Container>
					<Categories
						className="mb-6 sm:mb-8 flex flex-wrap"
						items={getPostCategories(uniqueCategories.join(', '))}
					/>
					{allPosts.length > 0 && <PostList posts={allPosts} />}
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'category',
		'author',
		'coverImage',
		'excerpt',
	]);
	return {
		props: { allPosts },
	};
}
