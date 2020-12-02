import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import Container from '../components/ui/container';
import Intro from '../components/ui/intro';

export default function Documentation() {
	return (
		<>
			<Layout>
				<Head>
					<title>Documentation | RedQ Inc</title>
				</Head>
				<Intro title="Documentation" />
				<Container>
					<Link href="/">
						<a className="inline-block mb-10">
							<span style={{ color: 'blue' }}>Back to Home</span>
						</a>
					</Link>{' '}
				</Container>
			</Layout>
		</>
	);
}
