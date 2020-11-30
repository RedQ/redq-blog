import Container from '../ui/container';
import Img from '../ui/image';

export default function PromotionalBlock() {
	return (
		<section className="overflow-hidden py-16">
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

					<header className="pt-20 pb-16 text-center">
						<h2 className="text-3xl xl:text-4xl font-bold tracking-tight mb-6">
							Looking for Readymate template? Try Startup Landing
						</h2>
						<p className="mb-11 text-lg" style={{ color: '#4A5568' }}>
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

					<div className="px-20 2xl:px-28 relative -bottom-2 z-0">
						<Img
							src={'/images/product-ad-banner.png'}
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
