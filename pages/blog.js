import Head from 'next/head';
import Container from '../components/container';
import Categories from '../components/categories';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

// dummy category
const categories = [
	{
		path: '/blog',
		title: '#React',
	},
	{
		path: '/blog',
		title: '#Next',
	},
	{
		path: '/blog',
		title: '#Gatsby',
	},
	{
		path: '/blog',
		title: '#GraphQL',
	},
	{
		path: '/blog',
		title: '#React Native',
	},
	{
		path: '/blog',
		title: '#WordPress',
	},
];

export default function Index({ allPosts }) {
	const morePosts = allPosts.slice(1);
	return (
		<Layout>
			<Head>
				<title>Next.js Blog Example with {CMS_NAME}</title>
			</Head>
			<Intro title="Blog" />
			<Container>
				<Categories
					className="mb-6 sm:mb-8 flex flex-wrap"
					items={categories}
				/>
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</Container>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	]);
	return {
		props: { allPosts },
	};
}
