import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Container from '../ui/container';
import SectionHeader from '../ui/section-header';
import ServiceCard from '../ui/service-card';
import GlideCarousel, {
	GlideSlide,
	GlideNavButton,
} from '../ui/glide-carousel';
// service data
import { serviceData } from '../../public/data/home-page/service.data';

export default function ServiceBlock() {
	const carouselOptions = {
		type: 'carousel',
		perView: 5,
		gap: 35,
		breakpoints: {
			1600: {
				perView: 4,
				gap: 20,
			},
			1200: {
				perView: 3,
				gap: 20,
			},
			768: {
				perView: 2,
				gap: 20,
			},
			420: {
				perView: 1,
				gap: 0,
			},
		},
	};
	return (
		<section className="py-10 lg:py-12 2xl:py-16">
			<SectionHeader
				className="mb-10 md:mb-12 lg:mb-14 xl:mb-16"
				slogan="Area of expertise"
				title="Services we provide to our customers"
			/>
			<Container fluid={true}>
				<GlideCarousel
					options={carouselOptions}
					controls={true}
					carouselSelector="rqServices"
					prevButton={
						<GlideNavButton
							title="Prev"
							className="-left-4 lg:-left-7 border border-solid border-rq-gray-300"
						>
							<HiOutlineChevronLeft size={24} />
						</GlideNavButton>
					}
					nextButton={
						<GlideNavButton
							title="Next"
							className="-right-4 lg:-right-7 border border-solid border-rq-gray-300"
						>
							<HiOutlineChevronRight size={24} />
						</GlideNavButton>
					}
				>
					{serviceData.map((item) => (
						<GlideSlide key={`service-key--${item.id}`}>
							<ServiceCard
								thumb={item.thumb}
								title={item.title}
								description={item.description}
							/>
						</GlideSlide>
					))}
				</GlideCarousel>
			</Container>
		</section>
	);
}
