import Head from 'next/head';
import Layout from '../components/layout/layout';
import HeroBanner from '../components/home/hero-banner';
import TechnologyBlock from '../components/technology-block';
import StatsBlock from '../components/home/stats-block';
import ProductCarousel from '../components/home/product-carousel';
import ServiceBlock from '../components/home/service-block';
import ProductAdBlock from '../components/home/product-ad-block';
import ProductsBlock from '../components/home/products-block/products-block';
import TestimonialBlock from '../components/testimonial-block';
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
				<StatsBlock />
				<ProductCarousel />
				<ServiceBlock />
				<ProductAdBlock />
				<ProductsBlock />
				<TestimonialBlock />
				<CallToAction />
			</Layout>
		</>
	);
}
