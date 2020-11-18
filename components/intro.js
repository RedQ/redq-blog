import { motion } from 'framer-motion';
import Container from '../components/container';
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

export default function Intro({ title }) {
	return (
		<motion.section
			variants={heightTransition}
			className="mb-10 sm:mb-12 bg-rq-gray-200 py-20 sm:py-24 md:py-32 relative overflow-hidden"
		>
			{/* Start banner dot pattern */}
			<motion.div
				variants={fadeIn}
				className="absolute hidden sm:block"
				style={{
					opacity: 0.4,
					backgroundColor: '#f4f4f4',
					backgroundImage: 'radial-gradient(#2950DB 1px, #f4f4f4 1px)',
					backgroundSize: '22px 22px',
					right: '20px',
					width: '24%',
					height: '68%',
					bottom: '18px',
				}}
			></motion.div>
			{/* End banner dot pattern */}
			<Container>
				<header>
					<motion.h1
						variants={fadeInBottom}
						className="text-4xl md:text-6xl text-black font-bold tracking-tighter capitalize"
					>
						{title}
					</motion.h1>
				</header>
			</Container>
		</motion.section>
	);
}
