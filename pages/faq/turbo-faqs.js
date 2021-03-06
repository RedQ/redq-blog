import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/layout';
import Intro from '../../components/ui/intro';
import Container from '../../components/ui/container';
import { AccordionWithFilter } from '../../components/ui/accordion';
// faqs data
import { faqs } from '../../public/data/turbo-faqs';
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

export default function TurboFAQ() {
	return (
		<>
			<Head>
				<title>Turbo FAQs | RedQ Inc</title>
			</Head>
			<Layout>
				<Intro title="Turbo FAQs" />
				<Container>
					<motion.div variants={fadeInBottom}>
						<AccordionWithFilter items={faqs} />
					</motion.div>
				</Container>
			</Layout>
		</>
	);
}
