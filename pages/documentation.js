import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/container';
import Layout from '../components/layout/layout';

export default function Documentation() {
	return (
		<>
			<Layout>
				<Head>
					<title>Documentation | RedQ Inc</title>
				</Head>
				<Container>
					<div>RedQ</div>
					<Link href="/">
						<a>
							<span style={{ color: 'blue' }}>Back to Home</span>
						</a>
					</Link>{' '}
					from here
				</Container>
			</Layout>
		</>
	);
}
