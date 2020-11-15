import Head from 'next/head';
import Container from '../components/container';
import Categories from '../components/categories';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { getPostCategories } from '../lib/utils';

export default function Index({ allPosts }) {
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
		<Layout>
			<Head>
				<title>Blog</title>
			</Head>
			<Intro title="Blog" />
			<Container>
				<Categories
					className="mb-6 sm:mb-8 flex flex-wrap"
					items={getPostCategories(uniqueCategories.join(', '))}
				/>
				{allPosts.length > 0 && <MoreStories posts={allPosts} />}
			</Container>
		</Layout>
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
