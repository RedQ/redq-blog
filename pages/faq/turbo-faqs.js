import { motion } from 'framer-motion';
import Layout from '../../components/layout';
import Intro from '../../components/intro';
import Container from '../../components/container';
import { AccordionWithFilter } from '../../components/accordion';
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
		<Layout>
			<Intro title="Turbo FAQs" />
			<Container>
				<motion.div variants={fadeInBottom}>
					<AccordionWithFilter items={faqs} />
				</motion.div>
			</Container>
		</Layout>
	);
}
