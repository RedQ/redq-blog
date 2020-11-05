import Link from 'next/link';
import { motion } from 'framer-motion';

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
		y: 10,
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

const Categories = ({ className, items }) => {
	return (
		<motion.div variants={variants} className={`site-categories ${className}`}>
			{items.map((item, index) => (
				<Link href={item.path} key={`${item.title}-${index}`}>
					<motion.a
						variants={fadeInBottom}
						className="font-semibold uppercase tracking-widest text-sm text-blue-700 mr-4 mb-2 transition-colors duration-300 cursor-pointer"
					>
						{item.title}
					</motion.a>
				</Link>
			))}
		</motion.div>
	);
};

export default Categories;
