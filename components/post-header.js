import cn from 'classnames';
import { motion } from 'framer-motion';
import Container from './container';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import SocialShare from './social-share';
import Categories from './categories';
import { getPostCategories } from '../lib/utils';
// motion variant
let easing = [0.175, 0.85, 0.42, 0.96];
const fadeIn = {
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: easing,
		},
	},
	enter: {
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: easing,
		},
	},
};
const fadeInTop = {
	exit: {
		y: -8,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
};
const fadeInBottom = {
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
};
const fadeInBottomDelay = {
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
};
const heightTransition = {
	exit: {
		height: 0,
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
	enter: {
		height: 'auto',
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
};

export default function PostHeader({ title, coverImage, date, category }) {
	return (
		<>
			<motion.div
				variants={heightTransition}
				className="mb-10 sm:mb-12 w-screen bg-light-gray transform -translate-x-1/2 py-20 sm:py-24 md:py-32 relative overflow-hidden"
				style={{ marginLeft: '50%' }}
			>
				<Container className="px-5 pb-1">
					<motion.div
						variants={fadeInBottomDelay}
						className="mb-6 text-blue-700 uppercase tracking-widest text-sm font-semibold"
					>
						<DateFormatter dateString={date} />
					</motion.div>
					<motion.h1
						variants={fadeInBottom}
						className="max-w-screen-md text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8"
					>
						{title}
					</motion.h1>
					<motion.div variants={fadeInTop}>
						<SocialShare title={title} />
					</motion.div>
				</Container>
				{/* Start banner dot pattern */}
				<motion.div
					variants={fadeIn}
					className="absolute hidden sm:block"
					style={{
						opacity: 0.4,
						backgroundColor: '#f4f4f4',
						backgroundImage: 'radial-gradient(#2b6cb0 1px, #f4f4f4 1px)',
						backgroundSize: '22px 22px',
						right: '8px',
						width: '25%',
						height: '56%',
						bottom: '18px',
						zIndex: -1,
					}}
				></motion.div>
				{/* End banner dot pattern */}
			</motion.div>

			<div className="max-w-3xl mx-auto mb-10">
				<Categories className="mb-6" items={getPostCategories(category)} />
				<motion.div variants={fadeInBottom}>
					<CoverImage
						className={cn('w-full shadow-xl')}
						title={title}
						src={coverImage}
					/>
				</motion.div>
			</div>
		</>
	);
}
