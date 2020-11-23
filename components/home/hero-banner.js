export default function HeroBanner() {
	return (
		<div className="bg-rq-gray-300 min-h-screen relative">
			<div
				dangerouslySetInnerHTML={{
					__html: require('../../public/images/hero-bg-shape.svg?include'),
				}}
			></div>
			<div className="absolute text-center top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
				<div className="inline-block py-3 px-7 rounded-full text-rq-blue-800 bg-white mb-5">
					<strong className="font-black">🎉 UPDATED:</strong>{' '}
					<span className="font-medium">
						Pickbazar Graphql v5.6.2 just released
					</span>
				</div>
				<h1 className="font-bold text-6xl 2xl:text-70px leading-tight tracking-tight mb-5">
					We're a future focused <br className="hidden sm:block" />
					software agency{' '}
				</h1>
				<p className="text-xl leading-loose" style={{ color: '#4A5568' }}>
					We are passionate about building carefully thought out UI
					<br className="hidden sm:block" /> products that will improve your
					design workflow.
				</p>
			</div>
		</div>
	);
}
