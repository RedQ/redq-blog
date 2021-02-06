import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/layout';
import Container from '../../components/ui/container';
import PostSingle from '../../components/post/post-single/post-single';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post }) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{post.title} | RedQ</title>
				<meta
					property="og:image"
					content="https://s3.amazonaws.com/redqteam.com/Banner/social.png"
				/>
			</Head>
			<Layout>
				{router.isFallback ? (
					<Container>
						<h1>Loading…</h1>
					</Container>
				) : (
					<article className="mb-16 sm:mb-20 md:mb-24">
						<PostSingle
							date={post?.date}
							title={post?.title}
							category={post?.category}
							coverImage={post?.coverImage}
							content={post?.content}
						/>
					</article>
				)}
			</Layout>
		</>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'category',
		'author',
		'content',
		'ogImage',
		'coverImage',
	]);
	const content = await markdownToHtml(post.content || '');
	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = await getAllPosts(['slug']);
	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post?.slug,
				},
			};
		}),
		fallback: false,
	};
}
