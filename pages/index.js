import Head from 'next/head';
import Layout from '../components/layout/layout';
import HeroBanner from '../components/ui/hero-banner';
import TechnologyBlock from '../components/technology-block/technology-block';
import StatsBlock from '../components/home/stats-block';
import ServiceBlock from '../components/home/service-block';
import PromotionalBlock from '../components/home/promotional-block';
import ProductsBlock from '../components/home/products-block/products-block';
import TestimonialBlock from '../components/testimonial-block/testimonial-block';
import ProductBigBanner from '../components/product-big-banner';
import CallToAction from '../components/call-to-action';
import ProductCarouselBlock from '../components/product-slide/product-slide';

export default function Index() {
	return (
		<>
			<Head>
				<title>RedQ Inc | We create product that creates value</title>
			</Head>
			<Layout>
				<HeroBanner
					className="min-h-rq-650 lg:min-h-rq-750 xl:min-h-screen 2xl:min-h-rq-950"
					updateInfo="Cartsy v1.4.2 has just been released!"
					title={`We're a future focused <br class="hidden lg:block" /> full-stack software agency.`}
					description={`REDQ is a creative agency specialising in building scalable,
					<br class="hidden lg:block" /> high performance web & mobile application.`}
				/>
				<TechnologyBlock />
				<StatsBlock />
				<ProductCarouselBlock />
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
