import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import GlideCarousel, {
	GlideSlide,
	GlideNavButton,
} from '../ui/glide-carousel';
import TestimonialCard from '../ui/testimonial-card';

export default function DefaultView({ data }) {
	const carouselOptions = {
		type: 'carousel',
		perView: 3,
		focusAt: 'center',
		startAt: 1,
		gap: 15,
		peek: {
			before: 227,
			after: 227,
		},
		breakpoints: {
			1600: {
				perView: 3,
				peek: {
					before: 127,
					after: 127,
				},
			},
			1440: {
				perView: 3,
				peek: {
					before: 60,
					after: 60,
				},
			},
			1360: {
				perView: 2,
				focusAt: 1,
				peek: {
					before: 80,
					after: 80,
				},
			},
			768: {
				perView: 2,
				focusAt: 1,
				peek: {
					before: 40,
					after: 40,
				},
			},
			600: {
				perView: 1,
				focusAt: 0,
				peek: {
					before: 0,
					after: 0,
				},
			},
		},
	};

	return (
		<GlideCarousel
			options={carouselOptions}
			controls={true}
			carouselSelector="rqTestimonial"
			prevButton={
				<GlideNavButton className="-left-3 md:left-4 lg:left-10 border border-solid border-rq-gray-300">
					<HiOutlineChevronLeft size={26} />
				</GlideNavButton>
			}
			nextButton={
				<GlideNavButton className="-right-3 md:right-4 lg:right-10 border border-solid border-rq-gray-300">
					<HiOutlineChevronRight size={26} />
				</GlideNavButton>
			}
		>
			{data.map((item, index) => (
				<GlideSlide key={`testimonial-col-key${index}`}>
					{item.map((review) => (
						<TestimonialCard
							key={`review-${review.id}`}
							comment={review.comment}
							name={review.name}
							userName={review.userName}
						/>
					))}
				</GlideSlide>
			))}
		</GlideCarousel>
	);
}
