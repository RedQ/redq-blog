import Container from './ui/container';
import SvgIcon from './ui/svg-icon';

export default function CallToAction() {
	return (
		<div className="py-16 relative overflow-hidden">
			<SvgIcon
				className="absolute block w-full h-full top-0 left-0"
				src={require('../public/images/pattern.svg?include')}
				style={{ zIndex: '-1', opacity: 0.07 }}
			/>
			{/* End of bg pattern */}
			<Container className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
				<div>
					<h2 className="text-3xl 2xl:text-4xl font-bold tracking-tight mb-4 lg:mb-3">
						Looking for custom Development? We are ready to help.
					</h2>
					<p className="leading-loose text-rq-gray-800">
						Pick one of our stock themes, or create your custom theme with the
						most advanced theme <br className="hidden lg:block" /> editor on any
						online survey building tool.
					</p>
				</div>
				<div className="mt-8 lg:mt-0">
					<button className="outline-none bg-rq-gray-800 text-white font-semibold rounded py-4 px-10 transition-colors duration-200 hover:bg-rq-gray-700">
						Contact us
					</button>
				</div>
			</Container>
		</div>
	);
}
