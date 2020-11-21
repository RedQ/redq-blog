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

export default function Copyright() {
	const date = new Date();
	return (
		<div className="flex items-center justify-center flex-col border-t border-solid border-rq-white-100 pt-10 pb-8 mt-14">
			<div className="flex items-center mb-2">
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://www.facebook.com/redqinc/"
					className="p-3 transition-all duration-200 text-rq-white-700 hover:text-white"
					title="Facebook"
				>
					<RiFacebookCircleLine size={18} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://twitter.com/redqinc"
					className="p-3 transition-all duration-200 text-rq-white-700 hover:text-white"
					title="Twitter"
				>
					<RiTwitterLine size={18} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://www.instagram.com/redqinc/"
					className="p-3 transition-all duration-200 text-rq-white-700 hover:text-white"
					title="Instagram"
				>
					<RiInstagramLine size={18} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://dribbble.com/redqinc"
					className="p-3 transition-all duration-200 text-rq-white-700 hover:text-white"
					title="Dribbble"
				>
					<RiDribbbleLine size={18} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://www.linkedin.com/company/redqinc/"
					className="p-3 transition-all duration-200 text-rq-white-700 hover:text-white"
					title="Linkedin"
				>
					<RiLinkedinLine size={18} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://plus.google.com/u/0/+RedQInc"
					className="p-3 transition-all duration-200 text-rq-white-700 hover:text-white"
					title="Google +"
				>
					<RiGoogleLine size={18} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://www.pinterest.com/redqinc/"
					className="p-3 transition-all duration-200 text-rq-white-700 hover:text-white"
					title="Pinterest"
				>
					<RiPinterestLine size={18} />
				</motion.a>
			</div>
			{/* End of social share */}
			<div className="text-rq-white-500 text-sm mt-1">
				Copyright &copy; {date.getFullYear()} RedQ Inc. All rights reserved
			</div>
			{/* End of copyright message */}
		</div>
	);
}
