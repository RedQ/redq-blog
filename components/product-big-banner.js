import { Parallax } from 'react-scroll-parallax';
import Container from './ui/container';
import SvgIcon from './ui/svg-icon';
// images
import productColImgOne from '../public/images/product-col-image1.png';
import productColImgTwo from '../public/images/product-col-image2.png';
import productColImgThree from '../public/images/product-col-image3.png';
import trophyIcon from '../public/images/trophy.svg';
import chatIcon from '../public/images/chat.svg';

export default function ProductBigBanner() {
	return (
		<div className="min-h-rq-600 bg-rq-gray-300 relative mt-4 md:mt-8 lg:mt-10 2xl:mt-6 overflow-hidden">
			<SvgIcon
				className="absolute block w-full h-full top-0 left-0"
				src={require('../public/images/hero-bg-shape.svg?include')}
			/>
			<div className="opacity-0 lg:opacity-100 max-w-rq-850 xl:max-w-rq-1050 2xl:max-w-rq-1350 flex transform rotate-rq-8 -ml-80">
				<Parallax y={[-10, 10]}>
					<img src={productColImgThree} alt="Product Thumb Col 3" />
				</Parallax>
				<Parallax>
					<img src={productColImgTwo} alt="Product Thumb Col 2" />
				</Parallax>
				<Parallax y={[-20, 20]}>
					<img
						className="-ml-7 2xl:-ml-9"
						src={productColImgOne}
						alt="Product Thumb Col 1"
					/>
				</Parallax>
			</div>
			<div className="absolute top-0 left-0 w-full h-full flex items-center">
				<Container className="flex flex-col items-center lg:items-end">
					<div className="text-left lg:pl-10 xl:pl-0 w-full max-w-rq-618 lg:max-w-rq-480 xl:max-w-rq-530 2xl:max-w-rq-618">
						<h2 className="leading-snug text-3xl xl:text-4xl xl:leading-snug 2xl:text-5xl 2xl:leading-tight font-bold mb-5 xl:mb-7">
							Premium React, Wordpress theme & Extensions
						</h2>
						<p className="text-rq-gray-800 leading-loose">
							Pick one of our stock themes, or create your custom theme with the
							most advanced theme editor on any online survey building tool. It
							is built to perform and run fast on all of the latest devices.
						</p>
						<div className="flex items-center mt-10 xl:mt-14">
							<img src={trophyIcon} alt="Trophy Icon" />
							<div className="ml-6">
								<h3 className="text-xl font-medium mb-1">
									Highly Crafted Product
								</h3>
								<p className="text-rq-gray-700">
									We just hand made our product with care.
								</p>
							</div>
						</div>
						<div className="flex items-center mt-10 xl:mt-14">
							<img src={chatIcon} alt="Trophy Icon" />
							<div className="ml-6">
								<h3 className="text-xl font-medium mb-1">
									Instant Customer Support
								</h3>
								<p className="text-rq-gray-700">
									We made priority about our valuable customers
								</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
