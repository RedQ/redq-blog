import Head from 'next/head';
import { motion } from 'framer-motion';
import Sticky from 'react-stickynode';
import Meta from '../meta';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta
					name="google-site-verification"
					content="nmL8cU3s8f8I1u6VApJhbmQgdpKlZdJJeObJ0xNLnK4"
				/>
			</Head>
			<Meta />
			{/* End of default SEO */}

			<motion.main initial="exit" animate="enter" exit="exit">
				<Sticky top={0} innerZ={9999} activeClass="sticky-nav">
					<Header />
				</Sticky>
				<div className="min-h-screen">{children}</div>
				<Footer />
			</motion.main>
		</>
	);
}
