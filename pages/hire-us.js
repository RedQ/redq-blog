import { NextSeo } from 'next-seo';

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
import RnbBlock from '../components/about-us/rnb';

export default function Index() {
	return (
		<>
			<div>
				<NextSeo
					title="RedQ Inc | We build products that create value"
					description="We build products that create value"
					canonical="https://redq.io"
					openGraph={{
						url: 'https://redq.io',
						title: 'RedQ Inc | We build products that create value',
						description:
							'REDQ is a creative agency specializing in building scalable, high performance web & mobile application.',
						images: [
							{
								url: 'https://s3.amazonaws.com/redqteam.com/Banner/social.png',
								width: 1200,
								height: 630,
								alt: 'pickbazar,rnb,cartsy',
							},
							{
								url: 'https://s3.amazonaws.com/redqteam.com/Banner/social.png',
								width: 1200,
								height: 630,
								alt: 'pickbazar,rnb,cartsy',
							},
						],
					}}
				/>
			</div>
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
				<RnbBlock />
			</Layout>
		</>
	);
}
