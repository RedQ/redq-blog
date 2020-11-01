import Link from 'next/link';
import ActiveLink from './active-link';
import Container from './container';

export default function Header() {
	return (
		<header className="site-header">
			<nav className="py-6 flex items-center border-b border-solid border-gray-300">
				<Container className="flex items-center justify-between">
					<h2 className="text-3xl font-bold tracking-tight md:tracking-tighter leading-tight">
						<Link href="/">
							<a className="transition-all duration-200 hover:text-gray-700">
								RedQ
							</a>
						</Link>
					</h2>
					<ul className="main-menu flex items-center">
						<li>
							<ActiveLink href="/">
								<a className="px-4 text-gray-700 transition-all duration-200 hover:text-gray-900">
									Home
								</a>
							</ActiveLink>
						</li>
						<li>
							<a
								className="px-4 text-gray-700 transition-all duration-200 hover:text-gray-900"
								href="https://themeforest.net/user/redqteam/portfolio"
							>
								Portfolio
							</a>
						</li>
						<li>
							<ActiveLink href="/blog">
								<a className="px-4 text-gray-700 transition-all duration-200 hover:text-gray-900">
									Blog
								</a>
							</ActiveLink>
						</li>
						<li>
							<a
								className="px-4 text-gray-700 transition-all duration-200 hover:text-gray-900"
								href="https://redqsupport.ticksy.com/"
							>
								Support
							</a>
						</li>
						<li>
							<Link href="/blog">
								<a className="px-4 text-gray-700 transition-all duration-200 hover:text-gray-900">
									FAQ
								</a>
							</Link>
						</li>
						<li>
							<Link href="/blog">
								<a className="px-4 text-gray-700 transition-all duration-200 hover:text-gray-900">
									Documentation
								</a>
							</Link>
						</li>
					</ul>
				</Container>
			</nav>
		</header>
	);
}
