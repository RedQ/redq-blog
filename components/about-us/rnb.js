import Container from '../ui/container';
import Img from '../ui/image';
export default function StatsBlock() {
	return (
		<div>
			<Container className="pt-8 lg:pt-12 xl:pt-20 lg:pb-16 2xl:pb-20 flex flex-wrap lg:flex-nowrap justify-between items-center">
				<div className="max-w-full w-full lg:max-w-md xl:max-w-4xl lg:w-1/2 ">
					<Img
						src={'/images/rnb.svg'}
						alt="Ad Product"
						width={890}
						height={613}
						quality={100}
					/>
				</div>
				<div className="flex-auto max-w-full lg:pl-10 2xl:pl-0 text-center lg:text-left 2xl:ml-12 mt-8 lg:md-0 mb-12 lg:mb-0">
					<h2 className="text-center lg:text-left text-xl leading-normal lg:text-3xl 2xl:text-44px font-bold tracking-tight lg:leading-snug mb-5 lg:mb-5">
						RnB - Best Selling Rental Plugin!
					</h2>
					<p className="leading-loose text-rq-gray-800 lg:max-w-lg text-center lg:text-left">
						WooCommerce Booking and Rental Plugin help you to build your booking
						business, it’s super easy to install and setup. You will able to
						rent like cars, bike, dress, tools, gadgets, etc. This is one of the
						best selling WooCommerce Booking Plugin.
					</p>
					<a
						href="https://redq.io/rnb"
						target="_blank"
						className="inline-block cursor-pointer outline-none bg-rq-gray-800 text-white font-semibold rounded py-4 px-8 mt-8 transition-colors duration-200 hover:bg-rq-gray-700 "
					>
						Check Demo
					</a>
				</div>
			</Container>
		</div>
	);
}
