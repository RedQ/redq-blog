import { motion } from 'framer-motion';
import HeroShape from './hero-shape';
// motion variant
let easing = [0.175, 0.85, 0.42, 0.96];
const fadeIn = {
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: easing,
		},
	},
	enter: {
		opacity: 1,
		transition: {
			duration: 0.5,
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

export default function HeroBanner({
	updateInfo,
	title,
	description,
	className = '',
}) {
	return (
		<div className={`bg-rq-gray-300 overflow-hidden relative ${className}`}>
			<div>
				<HeroShape id="heroBanner" />
			</div>
			{/*End of background shape*/}
			<div className="px-2 pt-10 w-full md:w-auto absolute text-center top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
				{updateInfo && (
					<div className="inline-block py-2 px-3 lg:py-2 lg:px-6 xl:py-3 xl:px-7 rounded-full text-rq-blue-800 bg-white mb-5">
						<strong className="font-blod text-sm xl:text-base">
							🎉 UPDATED:
						</strong>{' '}
						<span className="font-medium text-sm xl:text-base">
							{updateInfo}
						</span>
					</div>
				)}
				<h1
					className="font-bold text-4xl leading-tight lg:text-5xl 2xl:text-6xl lg:leading-tight xl:leading-tight 2xl:leading-tight 2xl:text-70px tracking-tight mb-5"
					dangerouslySetInnerHTML={{ __html: title }}
				></h1>
				<p
					className="text-base md:text-lg leading-loose xl:text-xl xl:leading-loose"
					style={{ color: '#4A5568' }}
					dangerouslySetInnerHTML={{ __html: description }}
				></p>
			</div>
		</div>
	);
}
