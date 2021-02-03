import { NextSeo } from 'next-seo';
import Layout from '../components/layout/layout';
import HeroBanner from '../components/ui/hero-banner';
import TechnologyBlock from '../components/technology-block/technology-block';
import ExpertiseBlock from '../components/about-us/expertise';
import TestimonialBlock from '../components/testimonial-block/testimonial-block';
import ProductBigBanner from '../components/product-big-banner';
import CallToAction from '../components/call-to-action';
import CommunityBlock from '../components/community';
import PickbazarBlock from '../components/home/pickbazar-block';

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
						title: 'RedQ Inc | We build products that create value"',
						description:
							'REDQ is a creative agency specialising in building scalable, high performance web & mobile application.',
						images: [
							{
								url:
									'https://s3.amazonaws.com/redqteam.com/cartsy_asset/cartsy_banner_image.pnghttps://s3.amazonaws.com/redqteam.com/cartsy_asset/cartsy_banner_image.png',
								width: 1200,
								height: 630,
								alt: 'pickbazar,rnb,cartsy',
							},
							{
								url:
									'https://s3.amazonaws.com/redqteam.com/cartsy_asset/cartsy_banner_image.pnghttps://s3.amazonaws.com/redqteam.com/cartsy_asset/cartsy_banner_image.png',
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
					title={`We're a future focused <br class="hidden lg:block" /> full-stack software agency.`}
					description={`REDQ is a creative agency specialising in building scalable,
					<br class="hidden lg:block" /> high performance web & mobile application.`}
				/>
				<TechnologyBlock />
				<ExpertiseBlock />
				<CommunityBlock />
				<PickbazarBlock />
				<TestimonialBlock />
				<ProductBigBanner />
				<CallToAction />
			</Layout>
		</>
	);
}
