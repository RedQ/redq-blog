import { useEffect } from 'react';
import fitvids from 'fitvids';
import { motion } from 'framer-motion';
import SocialShare from '../../ui/social-share';
import markdownStyles from './markdown-styles.module.css';
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

export default function PostBody({ content }) {
	useEffect(() => {
		fitvids('.post-container');
	}, []);
	return (
		<motion.div
			id="rqPostContent"
			variants={fadeInBottom}
			className="max-w-3xl 2xl:max-w-5xl  mx-5 lg:mx-auto"
		>
			<div
				className={`post-container content ${markdownStyles['markdown']}`}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			<div className="mt-12">
				<h2 className="text-2xl mb-5 leading-snug text-black font-semibold">
					Share on:
				</h2>
				<SocialShare />
			</div>
		</motion.div>
	);
}
