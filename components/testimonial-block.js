import Carousel from 'react-multi-carousel';
import SectionHeader from './ui/section-header';
// testimonial data
import { testimonials } from '../public/data/home-page';

export default function TestimonialBlock() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="py-16">
			<SectionHeader
				className="mb-14 2xl:mb-16"
				slogan="Client Testimonial"
				title="What our customer say about us"
			/>

			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
			>
				{testimonials.map((item, index) => (
					<div key={`testimonial-col-key${index}`}>
						{item.map((review) => (
							<div
								key={`review-${review.id}`}
								className="rounded pt-6 pb-8 pl-8 pr-10 border border-solid border-rq-gray-100 my-5 mx-2.5 transition-shadow duration-200 hover:shadow-medium"
							>
								<p className="leading-loose text-rq-gray-700 mb-8">
									{review.comment}
								</p>
								<div className="flex items-center">
									<img
										src={require('../public/images/envato.svg')}
										alt={review.name}
									/>
									<div className="ml-3">
										<h3 className="font-medium text-rq-gray-700 mb-1">
											{review.name}
										</h3>
										<p className="text-sm text-rq-blue-800">
											{review.userName}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</Carousel>
		</section>
	);
}
