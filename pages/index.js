import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/container';
import Layout from '../components/layout';

export default function Index({ allPosts }) {
	return (
		<>
			<Layout>
				<Head>
					<title>Next.js Blog Example</title>
				</Head>
				<Container>
					<div>RedQ</div>
					<Link href="/blog">
						<a>
							<span style={{ color: 'blue' }}>Blog</span>
						</a>
					</Link>{' '}
					from here
				</Container>
			</Layout>
		</>
	);
}
