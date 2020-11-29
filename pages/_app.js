import 'fontsource-fira-sans/400.css';
import 'fontsource-fira-sans/500-normal.css';
import 'fontsource-fira-sans/600-normal.css';
import 'fontsource-fira-sans/700-normal.css';
import 'fontsource-fira-sans/900-normal.css';
import 'react-multi-carousel/lib/styles.css';
import '../styles/index.css';
import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	);
}
