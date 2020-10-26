import Container from '../components/container';
import { CMS_NAME } from '../lib/constants';

export default function Intro() {
	return (
		<section className="mb-16 md:mb-12 bg-gray-200 pt-40 pb-40">
			<Container>
				<header>
					<h1 className="text-6xl md:text-7xl text-gray-900 font-bold tracking-tighter leading-tight md:pr-8">
						Blog.
					</h1>
					<p className="text-gray-700 font-normal text-center md:text-left text-lg mt-8">
						A statically generated blog example using{' '}
						<a
							href="https://nextjs.org/"
							className="underline hover:text-success duration-200 transition-colors"
						>
							Next.js
						</a>{' '}
						and {CMS_NAME}.
					</p>
				</header>
			</Container>
		</section>
	);
}
