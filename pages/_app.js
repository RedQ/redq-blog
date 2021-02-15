import 'fontsource-fira-sans/400.css';
import 'fontsource-fira-sans/500-normal.css';
import 'fontsource-fira-sans/600-normal.css';
import 'fontsource-fira-sans/700-normal.css';
import 'fontsource-fira-sans/900-normal.css';
import '../styles/index.css';
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import { FacebookPixel } from '../lib/facebookPixel';
import * as gtag from '../lib/analytics';
import 'swiper/swiper-bundle.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
// import 'react-alice-carousel/lib/alice-carousel.css';
Router.events.on('routeChangeComplete', (url) => gtag.trackPageview(url));
export default function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	);
}
