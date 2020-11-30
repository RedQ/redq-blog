import Container from './ui/container';

export default function ProductAdBlock() {
	return (
		<div className="bg-rq-gray-300 relative mt-8">
			<div
				dangerouslySetInnerHTML={{
					__html: require('../public/images/hero-bg-shape.svg?include'),
				}}
			></div>
			<Container className="flex flex-col items-end">
				<div className="text-left" style={{ maxWidth: '617px', width: '100%' }}>
					<h2>Premium React, Wordpress theme & Extensions</h2>
					<p>
						Pick one of our stock themes, or create your custom theme with the
						most advanced theme editor on any online survey building tool. It is
						built to perform and run fast on all of the latest devices.
					</p>
				</div>
			</Container>
		</div>
	);
}
