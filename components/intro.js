import Container from '../components/container';

export default function Intro() {
	return (
		<section className="mb-16 md:mb-12 bg-light-gray py-24 md:py-32 lg:py-40 relative">
			{/* Start banner dot pattern */}
			<div
				className="absolute hidden sm:block"
				style={{
					opacity: 0.4,
					backgroundColor: '#f4f4f4',
					backgroundImage: 'radial-gradient(#2b6cb0 1px, #f4f4f4 1px)',
					backgroundSize: '22px 22px',
					right: '20px',
					width: '24%',
					height: '68%',
					bottom: '18px',
				}}
			></div>
			{/* End banner dot pattern */}
			<Container>
				<header>
					<h1 className="text-6xl text-gray-900 font-bold tracking-tighter">
						Blog
					</h1>
				</header>
			</Container>
		</section>
	);
}
