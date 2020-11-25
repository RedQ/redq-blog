import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/layout';
import Intro from '../../components/ui/intro';
import Container from '../../components/ui/container';
// faq items [data]
const faqItems = [
	{
		title: 'RNB FAQs',
		href: '/faq/woocommerce-rental-booking-faqs',
		thumb: '/assets/faq/rnb/preview.jpg',
	},
	{
		title: 'Reactive Pro FAQs',
		href: '/faq/reactive-pro-faqs',
		thumb: '/assets/faq/reactive/preview.png',
	},
	{
		title: 'Turbo FAQs',
		href: '/faq/turbo-faqs',
		thumb: '/assets/faq/turbo/preview.png',
	},
];
// motion variants
const variants = {
	exit: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
	enter: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
};
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

export default function FAQ() {
	return (
		<Layout>
			<Intro title="FAQ" />
			<Container>
				<motion.div
					variants={variants}
					className="grid gap-x-8 md:gap-x-6 lg:gap-x-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
				>
					{faqItems.map((item) => (
						<motion.div
							key={item.title}
							variants={fadeInBottom}
							className="border border-gray-300 border-solid rounded overflow-hidden mb-8 md:mb-6 lg:mb-10 transition-shadow duration-300 hover:shadow-small"
						>
							<Link href={item.href}>
								<a>
									<Image
										width={388}
										height={194}
										src={item.thumb}
										alt={item.title}
									/>
								</a>
							</Link>
							<Link href={item.href}>
								<a className="block text-center p-4 text-black text-lg">
									{item.title}
								</a>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</Layout>
	);
}
