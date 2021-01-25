import Head from 'next/head';
import Layout from '../components/layout/layout';
import HeroBanner from '../components/ui/hero-banner';
import TechnologyBlock from '../components/technology-block/technology-block';
import ExpertiseBlock from '../components/about-us/expertise';
import ProductCarousel from '../components/home/product-carousel';
import ServiceBlock from '../components/home/service-block';
import PromotionalBlock from '../components/home/promotional-block';
import ProductsBlock from '../components/home/products-block/products-block';
import TestimonialBlock from '../components/testimonial-block/testimonial-block';
import ProductBigBanner from '../components/product-big-banner';
import CallToAction from '../components/call-to-action';
import ContactUs from '../components/contact-us';
import CommunityBlock from '../components/community';

export default function Index() {
	return (
		<>
			<Head>
				<title>RedQ Inc | We create product that creates value</title>
			</Head>
			<Layout>
				<HeroBanner
					className="min-h-rq-450 md:min-h-rq-650 lg:min-h-rq-750 xl:min-h-screen 2xl:min-h-screen"
					title={`Let's create a project, <br class="hidden lg:block" /> together we will grow big!`}
					description={`Tell us about your project, the purpose of the project
					<br class="hidden lg:block" /> and problems we are going to solve!`}
				/>

				<ContactUs />
				<TechnologyBlock />
				<CommunityBlock />
				<ExpertiseBlock />
				<TestimonialBlock />
				<ProductBigBanner />
				<CallToAction />
			</Layout>
		</>
	);
}
