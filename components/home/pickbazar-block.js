import Container from '../ui/container';
import Img from '../ui/image';

export default function PickbazarBlock() {
	return (
		<section className="overflow-hidden py-10 md:py-12 2xl:py-16 ">
			<Container fluid={true}>
				<div
					className="rounded relative bg-rq-green-100 bg-no-repeat bg-cover flex flex-col items-center justify-center"
					// style={{ backgroundColor: '#EFF2F9' }}
				>
					{/* End of pattern */}

					<header className="px-4 pt-16 lg:pt-20 pb-16 md:pb-16 text-center">
						<h6 className="text-xl font-semibold mb-6 tracking-wide">
							Pick
							<span className="text-xl text-rq-green-200 font-semibold">
								Bazar
							</span>
						</h6>
						<h2 className="text-2xl leading-snug xl:text-4xl tracking-tight font-bold mb-6">
							PickBazar - React Ecommerce Template!
						</h2>
						<p
							className="mb-8 lg:mb-11 leading-relaxed text-lg"
							style={{ color: '#4A5568' }}
						>
							Fastest Ecommerce template built with React, NextJS, TypeScript,
							GraphQL, REST API, Type-GraphQL & Styled-Components.
						</p>
						<a
							href="https://redq.io/pickbazar"
							target="_blank"
							className="inline-block cursor-pointer outline-none bg-rq-green-200 text-white font-semibold rounded py-4 px-8 transition-colors duration-200 hover:bg-rq-green-300"
						>
							Explore Now
						</a>
					</header>

					<div className="px-5 lg:px-20 2xl:px-28 relative hidden md:block md:-bottom-2 z-0">
						<Img
							src={'/images/pick.png'}
							alt="Ad Product"
							width={1590}
							height={301}
							quality={100}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
