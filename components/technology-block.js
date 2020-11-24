import Container from './container';

export default function TechnologyBlock() {
	return (
		<>
			<Container className="pt-16">
				<div className="flex items-center">
					<span className="text-lg" style={{ color: '#7C8894' }}>
						Technology we used:
					</span>
				</div>
				<hr className="mt-16" />
			</Container>
		</>
	);
}
