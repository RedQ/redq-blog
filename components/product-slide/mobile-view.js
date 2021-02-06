import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import GlideCarousel, {
	GlideSlide,
	GlideNavButton,
} from '../ui/glide-carousel';
import Img from '../ui/image';
// import data
import { productsBanner } from '../../public/data/home-page/product-bannerMobile.data';

const ProductCarousel = ({ data }) => {
	const carouselOptions = {
		type: 'slider',
		perView: 2,
		startAt: 0,
		gap: 15,
		bound: true,
		peek: {
			before: 32,
			after: 32,
		},
		breakpoints: {
			480: {
				perView: 2,
				gap: 15,
				peek: {
					before: 0,
					after: 0,
				},
			},
			400: {
				perView: 1,
				gap: 15,
				peek: {
					before: 4,
					after: 0,
				},
			},
		},
	};
	return (
		<div className="max-w-rq-1920 ml-auto mr-auto w-full my-10 lg:my-12 2xl:my-16">
			<GlideCarousel
				controls={true}
				options={carouselOptions}
				carouselSelector="rqProductBannerMobile"
				prevButton={
					<GlideNavButton title="Prev" className="left-2 text-filter-text">
						<BsFillCaretLeftFill size={18} />
					</GlideNavButton>
				}
				nextButton={
					<GlideNavButton
						title="Next"
						className="right-4 md:right-4 text-filter-text"
					>
						<BsFillCaretRightFill size={18} />
					</GlideNavButton>
				}
			>
				{data.map((banner, index) => (
					<GlideSlide key={`product-banner-${index}`}>
						<a href={banner.url} target="_blank">
							<Img
								alt={banner.title}
								src={banner.thumb.url}
								width={banner.thumb.width}
								height={banner.thumb.height}
							/>
						</a>
					</GlideSlide>
				))}
			</GlideCarousel>
		</div>
	);
};
export default ProductCarousel;
