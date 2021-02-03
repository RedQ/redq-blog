import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import HeroBanner from '../components/ui/hero-banner';
import Container from '../components/ui/container';
import Intro from '../components/ui/intro';
import ProductsBlock from '../components/home/products-block/products-block';
import data from '../public/data/redq-site-data.json';

export default function Documentation() {
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
					title={`A full-stack software agency, <br class="hidden lg:block" /> building scalable products`}
					description={`REDQ is a creative agency specialising in building scalable,
					<br class="hidden lg:block" /> high performance web & mobile application.`}
				/>

				<ProductsBlock products={data.products} />
			</Layout>
		</>
	);
}
