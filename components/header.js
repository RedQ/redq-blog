import Link from 'next/link';
import Container from '../components/container';

export default function Header() {
	return (
		<header className="py-6 flex items-center border-b border-solid border-gray-300">
			<Container>
				<h2 className="text-3xl font-bold tracking-tight md:tracking-tighter leading-tight">
					<Link href="/">
						<a className="transition-all duration-200 hover:text-gray-700">
							RedQ
						</a>
					</Link>
				</h2>
			</Container>
		</header>
	);
}
