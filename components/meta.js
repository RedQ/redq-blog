import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta() {
	return (
		<Head>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>

			<link rel="shortcut icon" href="/favicon/favicon.ico" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
			<meta name="theme-color" content="#000" />

			<meta
				name="google-site-verification"
				content="nmL8cU3s8f8I1u6VApJhbmQgdpKlZdJJeObJ0xNLnK4"
			/>
		</Head>
	);
}
