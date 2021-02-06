import { NextSeo } from 'next-seo';
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

// import data from '../public/data/redq-site-data.json';
export async function getStaticProps() {
	const data = await (
		await fetch(
			'https://redqsitedata.s3-us-west-1.amazonaws.com/redq-site-data.json'
		)
	).json();
	return {
		props: { data },
	};
}
export default function Index({ data }) {
	return (
		<>
			<div>
				<NextSeo
					title="RedQ Inc | We build products that create value"
					description="We build products that create value"
					canonical="https://redq.io/blog"
					openGraph={{
						url: 'https://redq.io',
						title: 'RedQ Inc | We build products that create value"',

						description:
							'REDQ is a creative agency specializing in building scalable, high performance web & mobile applications.',
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
					updateInfo={data.currentOffer}
					title={`We're a future focused <br class="hidden lg:block" /> full-stack software agency.`}
					description={`REDQ is a creative agency specializing in building scalable,
					<br class="hidden lg:block" /> high performance web & mobile application.`}
				/>
				<TechnologyBlock />
				<StatsBlock />
				<ProductCarouselBlock />
				<ServiceBlock />
				<PromotionalBlock />
				<ProductsBlock products={data.products} />

				<TestimonialBlock />
				<ProductBigBanner />

				<CallToAction />
			</Layout>
		</>
	);
}
