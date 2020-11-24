import Head from 'next/head';
import Layout from '../components/layout/layout';
import HeroBanner from '../components/home/hero-banner';
import TechnologyBlock from '../components/technology-block';
import CallToAction from '../components/call-to-action';

export default function Index() {
	return (
		<>
			<Head>
				<title>RedQ Inc | We create product that creates value</title>
			</Head>
			<Layout>
				<HeroBanner />
				<TechnologyBlock />
				<CallToAction />
			</Layout>
		</>
	);
}
