import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '../components/container';
import Layout from '../components/layout';

export default function Index() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Layout>
				<Head>
					<title>Next.js Blog Example</title>
				</Head>
				<motion.div initial="exit" animate="enter" exit="exit">
					<Container>
						<div>RedQ</div>
						<Link href="/blog">
							<a>
								<span style={{ color: 'blue' }}>Blog</span>
							</a>
						</Link>{' '}
						from here
					</Container>
				</motion.div>
			</Layout>
		</>
	);
}
