import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
	return (
		<>
			<Meta />
			<Header />
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
