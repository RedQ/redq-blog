import Link from 'next/link';
import {
	RiFacebookCircleLine,
	RiTwitterLine,
	RiInstagramLine,
	RiDribbbleLine,
	RiLinkedinLine,
	RiGoogleLine,
	RiPinterestLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';
import Container from '../container';

export default function Footer() {
	const date = new Date();
	return (
		<footer className="border-t border-solid border-gray-300 py-5 md:py-4">
			<Container className="flex items-center justify-between flex-col md:flex-row">
				<div className="text-gray-700 mb-1 md:mb-0">
					Copyright &copy; {date.getFullYear()}{' '}
					<Link href="/">
						<a className="text-black font-semibold">RedQ Inc</a>
					</Link>
					. All rights reserved
				</div>
				<div className="flex items-center -mb-4 md:mb-0  md:-mr-4">
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						href="https://www.facebook.com/redqinc/"
						className="p-4 transition-all duration-200 hover:text-gray-600"
						title="Facebook"
					>
						<RiFacebookCircleLine size="17px" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						href="https://twitter.com/redqinc"
						className="p-4 transition-all duration-200 hover:text-gray-600"
						title="Twitter"
					>
						<RiTwitterLine size="17px" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						href="https://www.instagram.com/redqinc/"
						className="p-4 transition-all duration-200 hover:text-gray-600"
						title="Instagram"
					>
						<RiInstagramLine size="17px" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						href="https://dribbble.com/redqinc"
						className="p-4 transition-all duration-200 hover:text-gray-600"
						title="Dribbble"
					>
						<RiDribbbleLine size="17px" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						href="https://www.linkedin.com/company/redqinc/"
						className="p-4 transition-all duration-200 hover:text-gray-600"
						title="Linkedin"
					>
						<RiLinkedinLine size="17px" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						href="https://plus.google.com/u/0/+RedQInc"
						className="p-4 transition-all duration-200 hover:text-gray-600"
						title="Google +"
					>
						<RiGoogleLine size="17px" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						href="https://www.pinterest.com/redqinc/"
						className="p-4 transition-all duration-200 hover:text-gray-600"
						title="Pinterest"
					>
						<RiPinterestLine size="17px" />
					</motion.a>
				</div>
			</Container>
		</footer>
	);
}
