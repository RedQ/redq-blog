import Head from 'next/head';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
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

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404: Not found | RedQ Inc</title>
			</Head>
			<motion.div
				initial="exit"
				animate="enter"
				exit="exit"
				className="w-full min-h-screen flex flex-col items-center justify-center"
			>
				<motion.h1
					variants={fadeInBottom}
					className="text-black text-7xl font-bold leading-tight"
				>
					404
				</motion.h1>
				<motion.p
					variants={fadeInBottom}
					className="p2 text-xl flex items-center justify-center text-gray-700 mb-6"
				>
					Page Not found <span className="text-4xl ml-2">😥</span>
				</motion.p>
				<Link href="/">
					<motion.a
						variants={fadeInBottom}
						className="inline-flex items-center justify-center cursor-pointer bg-gray-900 text-white rounded-full py-3 px-6 hover:bg-gray-800 transition-all duration-300"
					>
						<BsArrowLeft size={24} className="mr-2" /> Back to Home
					</motion.a>
				</Link>
			</motion.div>
		</>
	);
}
