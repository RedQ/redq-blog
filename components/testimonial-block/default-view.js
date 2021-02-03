import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import GlideCarousel, {
	GlideSlide,
	GlideNavButton,
} from '../ui/glide-carousel';
import TestimonialCard from '../ui/testimonial-card';

export default function DefaultView({ data }) {
	const carouselOptions = {
		type: 'slider',
		perView: 3,
		startAt: 0,
		gap: 15,
		bound: true,
		peek: {
			before: 64,
			after: 64,
		},
		breakpoints: {
			1600: {
				perView: 3,
				peek: {
					before: 64,
					after: 64,
				},
			},
			1440: {
				perView: 3,
				peek: {
					before: 32,
					after: 32,
				},
			},
			1360: {
				perView: 2,
				peek: {
					before: 32,
					after: 32,
				},
			},
			768: {
				perView: 2,
				peek: {
					before: 40,
					after: 40,
				},
			},
			600: {
				perView: 1,
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
				<GlideNavButton
					title="Prev"
					className="-left-3 md:left-4 lg:left-10 border border-solid border-rq-gray-300"
				>
					<HiOutlineChevronLeft size={26} />
				</GlideNavButton>
			}
			nextButton={
				<GlideNavButton
					title="Next"
					className="-right-3 md:right-4 lg:right-10 border border-solid border-rq-gray-300"
				>
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
