import SvgIcon from './ui/svg-icon';
import Container from './ui/container';

export default function TechnologyBlock() {
	return (
		<>
			<Container className="py-14">
				<div className="flex items-center">
					<span className="text-lg mr-8" style={{ color: '#7C8894' }}>
						Technology we used:
					</span>
					<div className="flex flex-auto items-center justify-between">
						<SvgIcon
							src={require('../public/images/technology/react.svg?include')}
						/>
						<SvgIcon
							src={require('../public/images/technology/next.svg?include')}
						/>
						<SvgIcon
							src={require('../public/images/technology/wp.svg?include')}
						/>
						<SvgIcon
							src={require('../public/images/technology/gatsby.svg?include')}
						/>
						<SvgIcon
							src={require('../public/images/technology/laravel.svg?include')}
						/>
						<SvgIcon
							src={require('../public/images/technology/graphql.svg?include')}
						/>
					</div>
				</div>
				<hr className="mt-14" />
			</Container>
		</>
	);
}
