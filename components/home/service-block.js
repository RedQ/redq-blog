import Container from '../ui/container';
import SectionHeader from '../ui/section-header';
import ServiceCard from '../ui/service-card';
// service data
import { serviceData } from '../../public/data/home-page';

export default function ServiceBlock() {
	return (
		<section className="py-16">
			<SectionHeader
				className="mb-14 2xl:mb-16"
				slogan="Task we are experted"
				title="What service we provide that"
			/>
			<Container fluid={true} className="grid grid-cols-5 gap-x-8 -mb-9">
				{serviceData.map((item) => (
					<ServiceCard
						key={`service-key--${item.id}`}
						src={item.icon}
						title={item.title}
						description={item.description}
					/>
				))}
			</Container>
		</section>
	);
}
