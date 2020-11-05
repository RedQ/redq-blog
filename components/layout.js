import { motion } from 'framer-motion';
import Sticky from 'react-stickynode';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
	return (
		<motion.main initial="exit" animate="enter" exit="exit">
			<Meta />
			<Sticky top={0} innerZ={9999} activeClass="sticky-nav">
				<Header />
			</Sticky>
			<div className="min-h-screen">{children}</div>
			<Footer />
		</motion.main>
	);
}
