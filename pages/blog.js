import { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
// import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout>
				<Head>
					<title>Next.js Blog Example with {CMS_NAME}</title>
				</Head>
				<motion.div initial="exit" animate="enter" exit="exit">
					<Intro />
					<Container>
						{/*{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}*/}
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</Container>
				</motion.div>
			</Layout>
		</>
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
