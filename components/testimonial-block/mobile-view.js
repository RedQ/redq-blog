import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import GlideCarousel, {
	GlideSlide,
	GlideNavButton,
} from '../ui/glide-carousel';
import TestimonialCard from '../ui/testimonial-card';

export default function MobileView({ data }) {
	const carouselOptions = {
		type: 'carousel',
		perView: 2,
		gap: 15,
		breakpoints: {
			480: {
				perView: 1,
			},
		},
	};

	return (
		<GlideCarousel
			options={carouselOptions}
			controls={true}
			carouselSelector="rqTestimonialMobile"
			prevButton={
				<GlideNavButton
					title="Prev"
					className="-left-3 md:left-10 border border-solid border-rq-gray-300"
				>
					<HiOutlineChevronLeft size={26} />
				</GlideNavButton>
			}
			nextButton={
				<GlideNavButton
					title="Next"
					className="-right-3 md:right-10 border border-solid border-rq-gray-300"
				>
					<HiOutlineChevronRight size={26} />
				</GlideNavButton>
			}
		>
			{data.map((item, index) => (
				<GlideSlide key={`testimonial-mobile-col-key${index}`}>
					<TestimonialCard
						className="min-h-rq-354"
						comment={item.comment}
						name={item.name}
						userName={item.userName}
					/>
				</GlideSlide>
			))}
		</GlideCarousel>
	);
}
