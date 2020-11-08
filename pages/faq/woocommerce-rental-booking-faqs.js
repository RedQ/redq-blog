import Layout from '../../components/layout';
import Intro from '../../components/intro';
import Container from '../../components/container';
import { AccordionWithFilter } from '../../components/accordion';
// faqs data
import { faqs } from '../../public/data/rnb-faqs';

export default function RNBFAQ() {
	return (
		<Layout>
			<Intro title="WooCommerce Rental & Booking FAQs" />
			<Container>
				<AccordionWithFilter items={faqs} />
			</Container>
		</Layout>
	);
}
