import Link from 'next/link';
import Layout from '../../components/layout';
import Intro from '../../components/intro';
import Container from '../../components/container';

export default function Index() {
	return (
		<Layout>
			<Intro title="FAQ" />
			<Container>
				<Link href="/faq/woocommerce-rental-booking-faqs">
					<a>RNB FAQs</a>
				</Link>
			</Container>
		</Layout>
	);
}
