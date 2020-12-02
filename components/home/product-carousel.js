import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import GlideCarousel, {
	GlideSlide,
	GlideNavButton,
} from '../ui/glide-carousel';
// import data
import { productsBanner } from '../../public/data/home-page/product-banner.data';

export default function ProductCarousel() {
	const carouselOptions = {
		type: 'carousel',
		perView: 1,
		focusAt: 'center',
		startAt: 1,
		gap: 15,
		peek: {
			before: 64,
			after: 64,
		},
	};
	return (
		<div className="w-full my-10 lg:my-12 2xl:my-16">
			<GlideCarousel
				controls={true}
				options={carouselOptions}
				carouselSelector="rqProductBanner"
				prevButton={
					<GlideNavButton className="left-9 text-filter-text">
						<BsFillCaretLeftFill size={18} />
					</GlideNavButton>
				}
				nextButton={
					<GlideNavButton className="right-9 text-filter-text">
						<BsFillCaretRightFill size={18} />
					</GlideNavButton>
				}
			>
				{productsBanner.map((banner, index) => (
					<GlideSlide key={`product-banner-${index}`}>
						<img
							className="w-full h-auto"
							src={banner.thumb}
							alt={banner.title}
						/>
					</GlideSlide>
				))}
			</GlideCarousel>
		</div>
	);
}
