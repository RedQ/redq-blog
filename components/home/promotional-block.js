import Container from '../ui/container';
import Img from '../ui/image';

export default function PromotionalBlock() {
	return (
		<section className="overflow-hidden py-10 md:py-12 2xl:py-16">
			<Container fluid={true}>
				<div
					className="rounded relative"
					style={{ backgroundColor: '#EFF2F9' }}
				>
					<div
						className="rq-bg-pattern"
						dangerouslySetInnerHTML={{
							__html: require('../../public/images/pattern.svg?include'),
						}}
					></div>
					{/* End of pattern */}

					<header className="px-4 pt-16 lg:pt-20 pb-16 text-center">
						<h2 className="text-3xl leading-snug xl:text-4xl tracking-tight font-bold mb-6">
							Looking for Readymate template?{' '}
							<br className="hidden sm:block lg:hidden" /> Try Startup Landing
						</h2>
						<p
							className="mb-8 lg:mb-11 leading-relaxed text-lg"
							style={{ color: '#4A5568' }}
						>
							We are passionate about building carefully thought out user
							interface
						</p>
						<a
							href="#"
							className="inline-block cursor-pointer outline-none bg-rq-gray-800 text-white font-semibold rounded py-4 px-8 transition-colors duration-200 hover:bg-rq-gray-700"
						>
							Explore Now
						</a>
					</header>

					<div className="px-5 lg:px-20 2xl:px-28 relative -bottom-2 z-0">
						<Img
							src={'/images/startup-product-banner.png'}
							alt="Ad Product"
							width={1570}
							height={269}
							quality={100}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
