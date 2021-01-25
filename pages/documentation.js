import Head from 'next/head';
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
			<Head>
				<title>RedQ Inc | We create product that creates value</title>
			</Head>
			<Layout>
				<HeroBanner
					className="min-h-rq-650 lg:min-h-rq-750 xl:min-h-screen 2xl:min-h-rq-950"
					title={`Meet our product`}
					description={`Besides building highly scalable products, we keep on eye to make fruitful documentations for our product `}
				/>

				<ProductsBlock products={data.products} />
			</Layout>
		</>
	);
}
