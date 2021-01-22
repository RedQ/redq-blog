import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import GlideCarousel, {
	GlideSlide,
	GlideNavButton,
} from '../ui/glide-carousel';
import Img from '../ui/image';
// import data
import { productsBanner } from '../../public/data/home-page/product-banner.data';

const ProductCarousel = ({ data }) => {
	const carouselOptions = {
		type: 'carousel',
		perView: 1,
		focusAt: 'center',
		startAt: 0,
		gap: 15,
		peek: {
			before: 64,
			after: 64,
		},
	};
	return (
		<div className="max-w-rq-1920 ml-auto mr-auto w-full my-10 lg:my-12 2xl:my-16">
			<GlideCarousel
				controls={true}
				options={carouselOptions}
				carouselSelector="rqProductBanner"
				prevButton={
					<GlideNavButton title="Prev" className="left-9 text-filter-text">
						<BsFillCaretLeftFill size={18} />
					</GlideNavButton>
				}
				nextButton={
					<GlideNavButton title="Next" className="right-9 text-filter-text">
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
