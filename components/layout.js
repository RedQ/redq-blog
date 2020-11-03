import Sticky from 'react-stickynode';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
	return (
		<>
			<Meta />
			<Sticky top={0} innerZ={9999} activeClass="sticky-nav">
				<Header />
			</Sticky>
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
