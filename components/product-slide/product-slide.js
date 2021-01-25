import SectionHeader from '../ui/section-header';
import DefaultView from './default-view';
import MobileView from './mobile-view';
// testimonial data
import { productsBanner } from '../../public/data/home-page/product-banner.data';
import { productsBannerMobile } from '../../public/data/home-page/product-bannerMobile.data';

export default function ProductSlideBlock() {
	return (
		<section className=" py-4 md:py-12 2xl:py-16 px-4 md:px-0">
			{productsBanner.length > 0 && (
				<div className="hidden md:block">
					<DefaultView data={productsBanner} />
				</div>
			)}
			{productsBannerMobile.length > 0 && (
				<div className="block md:hidden">
					<MobileView data={productsBannerMobile} />
				</div>
			)}
		</section>
	);
}
