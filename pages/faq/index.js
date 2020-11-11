import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../../components/layout';
import Intro from '../../components/intro';
import Container from '../../components/container';

// motion variants
const fadeInBottom = {
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
};

export default function Index() {
	return (
		<Layout>
			<Intro title="FAQ" />
			<Container className="grid col-gap-10 grid-cols-3">
				<motion.div
					variants={fadeInBottom}
					className="border border-gray-300 border-solid rounded overflow-hidden mb-10 transition-shadow duration-300 hover:shadow-small"
				>
					<Link href="/faq/woocommerce-rental-booking-faqs">
						<a>
							<Image
								src="/assets/faq/rnb/preview.jpg"
								alt="RnB thumb"
								width={388}
								height={194}
							/>
						</a>
					</Link>
					<Link href="/faq/woocommerce-rental-booking-faqs">
						<a className="block text-center p-4 text-gray-900 text-lg">
							RNB FAQs
						</a>
					</Link>
				</motion.div>
				<motion.div
					variants={fadeInBottom}
					className="border border-gray-300 border-solid rounded overflow-hidden mb-10 transition-shadow duration-300 hover:shadow-small"
				>
					<Link href="/faq">
						<a>
							<Image
								src="/assets/faq/reactive/preview.png"
								alt="Reactive thumb"
								width={388}
								height={194}
							/>
						</a>
					</Link>
					<Link href="/faq">
						<a className="block text-center p-4 text-gray-900 text-lg">
							Reactive Pro FAQs
						</a>
					</Link>
				</motion.div>
				<motion.div
					variants={fadeInBottom}
					className="border border-gray-300 border-solid rounded overflow-hidden mb-10 transition-shadow duration-300 hover:shadow-small"
				>
					<Link href="/faq">
						<a>
							<Image
								src="/assets/faq/turbo/preview.png"
								alt="Turbo thumb"
								width={388}
								height={194}
							/>
						</a>
					</Link>
					<Link href="/faq">
						<a className="block text-center p-4 text-gray-900 text-lg">
							Turbo FAQs
						</a>
					</Link>
				</motion.div>
			</Container>
		</Layout>
	);
}
