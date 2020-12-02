import { Parallax } from 'react-scroll-parallax';
import Container from './ui/container';
import HeroShape from './ui/hero-shape';
import Img from './ui/image';

export default function ProductBigBanner() {
	return (
		<div className="min-h-rq-600 bg-rq-gray-300 relative mt-4 md:mt-8 lg:mt-10 2xl:mt-6 overflow-hidden">
			<HeroShape
				id="productBigBanner"
				className="absolute block w-full h-full top-0 left-0"
			/>
			{/* End of shape bg */}
			<div className="max-w-rq-1920 w-full m-auto">
				<div className="opacity-0 lg:opacity-100 max-w-rq-850 xl:max-w-rq-1050 2xl:max-w-rq-1350 w-3/4 flex transform rotate-rq-8 -ml-80">
					<Parallax y={[-10, 10]}>
						<Img
							src="/images/product-col-image3.png"
							alt="Product Thumb Col 3"
							width={399}
							height={798}
						/>
					</Parallax>
					<Parallax>
						<Img
							src="/images/product-col-image2.png"
							alt="Product Thumb Col 2"
							width={475}
							height={798}
						/>
					</Parallax>
					<Parallax y={[-20, 20]} className="-ml-7 2xl:-ml-9">
						<Img
							src="/images/product-col-image1.png"
							alt="Product Thumb Col 1"
							width={470}
							height={798}
						/>
					</Parallax>
				</div>
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
							<Img
								width={40}
								height={40}
								src="/images/trophy.svg"
								alt="Trophy"
							/>
							<div className="ml-6">
								<h3 className="text-xl font-medium mb-1.5">
									Highly Crafted Product
								</h3>
								<p className="text-rq-gray-700">
									We just hand made our product with care.
								</p>
							</div>
						</div>
						<div className="flex items-center mt-10 xl:mt-14">
							<Img width={40} height={40} src="/images/chat.svg" alt="Chat" />
							<div className="ml-6">
								<h3 className="text-xl font-medium mb-1.5">
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
