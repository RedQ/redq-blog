import { motion } from 'framer-motion';
import Container from '../components/container';

// motion variant
let easing = [0.175, 0.85, 0.42, 0.96];
const fadeInBottom = {
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
			duration: 0.5,
			ease: easing,
		},
	},
	enter: {
		height: 'auto',
		transition: {
			duration: 0.5,
			ease: easing,
		},
	},
};

export default function Intro() {
	return (
		<motion.section
			variants={heightTransition}
			className="mb-16 md:mb-12 bg-light-gray py-24 md:py-32 lg:py-40 relative"
		>
			{/* Start banner dot pattern */}
			<div
				className="absolute hidden sm:block"
				style={{
					opacity: 0.4,
					backgroundColor: '#f4f4f4',
					backgroundImage: 'radial-gradient(#2b6cb0 1px, #f4f4f4 1px)',
					backgroundSize: '22px 22px',
					right: '20px',
					width: '24%',
					height: '68%',
					bottom: '18px',
				}}
			></div>
			{/* End banner dot pattern */}
			<Container>
				<header>
					<motion.h1
						variants={fadeInBottom}
						className="text-6xl text-gray-900 font-bold tracking-tighter"
					>
						Blog
					</motion.h1>
				</header>
			</Container>
		</motion.section>
	);
}
