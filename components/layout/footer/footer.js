import Container from '../../ui/container';
import Widgets from './widgets';
import Copyright from './copyright';

export default function Footer() {
	return (
		<footer id="rqSiteFooter" className="bg-rq-gray-800 py-5 md:py-4">
			<Container>
				<Widgets />
				<Copyright />
			</Container>
		</footer>
	);
}
