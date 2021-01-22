import Head from 'next/head';
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
import data from '../public/data/redq-site-data.json';
// export async function getStaticProps() {
//   const res = await (await fetch('https://')).json();
//   return {
//     props: res,
//   };
// }
export default function Index(props) {
  console.log(data, 'data');
  return (
    <>
      <div>
        <Head>
          <title>RedQ Inc | We create product that creates value</title>
        </Head>
        <NextSeo
          title="RedQ Inc | We create product that creates value"
          description="We create product that creates value"
          canonical="https://www.canonicalurl.ie/"
          openGraph={{
            url: 'https://www.canonicalurl.ie/',
            title: 'Open Graph Title',
            description: 'Open Graph Description',
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
              },
              {
                url: 'https://www.example.ie/og-image-02.jpg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
              },
              { url: 'https://www.example.ie/og-image-03.jpg' },
              { url: 'https://www.example.ie/og-image-04.jpg' },
            ],
          }}
        />
      </div>
      <Layout>
        <HeroBanner
          className="min-h-rq-650 lg:min-h-rq-750 xl:min-h-screen 2xl:min-h-rq-950"
          updateInfo={data.currentOffer}
          title={`We're a future focused <br class="hidden lg:block" /> full-stack software agency.`}
          description={`REDQ is a creative agency specialising in building scalable,
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
