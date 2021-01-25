import SectionHeader from '../ui/section-header';
import DefaultView from './default-view';
import MobileView from './mobile-view';
// testimonial data
import { testimonials } from '../../public/data/home-page/testimonial.data';

export default function TestimonialBlock() {
	// testimonial data processing for mobile
	let testimonialsMobileData = [];
	testimonials.forEach((items) => {
		items.forEach((item) => {
			testimonialsMobileData.push(item);
		});
	});

	return (
		<section className="py-6 md:py-12 2xl:py-20 px-4 md:px-0">
			<SectionHeader
				className="mb-8 lg:10 xl:mb-12 2xl:mb-14"
				slogan="Client Testimonial"
				title="What our customer say about us"
			/>
			{testimonials.length > 0 && (
				<div className="hidden md:block">
					<DefaultView data={testimonials} />
				</div>
			)}
			{testimonialsMobileData.length > 0 && (
				<div className="block md:hidden">
					<MobileView data={testimonialsMobileData} />
				</div>
			)}
		</section>
	);
}
