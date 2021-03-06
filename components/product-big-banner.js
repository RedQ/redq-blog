import { Parallax } from 'react-scroll-parallax';
import Container from './ui/container';
import HeroShape from './ui/hero-shape';
import Img from './ui/image';

export default function ProductBigBanner() {
	return (
		<div className="min-h-rq-600 bg-rq-gray-300 relative mt-4 md:mt-8 lg:mt-20 overflow-hidden">
			<HeroShape
				id="productBigBanner"
				className="absolute block w-full h-full top-0 left-0"
			/>
			{/* End of shape bg */}
			<div className="max-w-rq-1920 w-full m-auto">
				<div className="opacity-0 lg:opacity-100 max-w-rq-850 xl:max-w-rq-1050 2xl:max-w-rq-1350 w-3/4 flex transform rotate-rq-8 -ml-72 xl:-ml-80 2xl:-ml-72">
					<Parallax y={[-10, 10]}>
						<img src="/images/3.png" alt="Product Thumb Col 3" />
					</Parallax>
					<Parallax className="ml-7 2xl:ml-7">
						<img src="/images/2.png" alt="Product Thumb Col 2" />
					</Parallax>
					<Parallax y={[-15, 15]} className="ml-7 2xl:ml-7">
						<img src="/images/1.png" alt="Product Thumb Col 1" />
					</Parallax>
				</div>
			</div>
			<div className="absolute top-0 xl:left-5 2xl:left-0 w-full h-full flex items-center">
				<Container className="flex flex-col items-center lg:items-end">
					<div className="text-left lg:pl-10 xl:pl-0 w-full max-w-rq-618 lg:max-w-rq-480 xl:max-w-rq-530 ">
						<h2 className="leading-snug text-2xl xl:text-4xl xl:leading-snug 2xl:text-44px  font-bold mb-5 xl:mb-7">
							Superprops - Premium Next JS & Gatsby Landing Pages.
						</h2>
						<p className="text-rq-gray-800 leading-loose">
							Welcome to React Next Landing Page, built with React, Next Js,
							Gatsby Js & Styled Components. It’s super easy to deploy!
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
						<div className="flex justify-center md:justify-start">
							<a
								href="https://redq.io/react-next-landing"
								target="_blank"
								className="mt-12 lg:mt-12 2xl:mt-16 inline-block cursor-pointer outline-none bg-rq-gray-800 text-white font-semibold rounded py-4 px-8 transition-colors duration-200 hover:bg-rq-gray-700"
							>
								View Demo
							</a>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
