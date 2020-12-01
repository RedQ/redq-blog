import Head from 'next/head';
import Layout from '../components/layout/layout';
import HeroBanner from '../components/ui/hero-banner';
import TechnologyBlock from '../components/technology-block/technology-block';
import StatsBlock from '../components/home/stats-block';
import ProductCarousel from '../components/home/product-carousel';
import ServiceBlock from '../components/home/service-block';
import PromotionalBlock from '../components/home/promotional-block';
import ProductsBlock from '../components/home/products-block/products-block';
import TestimonialBlock from '../components/testimonial-block/testimonial-block';
import ProductBigBanner from '../components/product-big-banner';
import CallToAction from '../components/call-to-action';

export default function Index() {
	return (
		<>
			<Head>
				<title>RedQ Inc | We create product that creates value</title>
			</Head>
			<Layout>
				<HeroBanner
					className="min-h-rq-650 lg:min-h-rq-750 xl:min-h-screen 2xl:min-h-rq-950"
					updateInfo="Pickbazar Graphql v5.6.2 just released"
					title={`We're a future focused <br class="hidden lg:block" /> software agency`}
					description={`We are passionate about building carefully thought out UI
					<br class="hidden lg:block" /> products that will improve your
					design workflow.`}
				/>
				<TechnologyBlock />
				<StatsBlock />
				<ProductCarousel />
				<ServiceBlock />
				<PromotionalBlock />
				<ProductsBlock />
				<TestimonialBlock />
				<ProductBigBanner />
				<CallToAction />
			</Layout>
		</>
	);
}
