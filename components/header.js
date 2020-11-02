import { useState } from 'react';
import Link from 'next/link';
import ActiveLink from './active-link';
import Container from './container';

export default function Header() {
	const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

	return (
		<header className="site-header">
			<nav className="py-5 lg:py-6 flex items-center border-b border-solid border-gray-300 bg-white">
				<Container className="flex items-center justify-between">
					<h2 className="text-3xl font-bold tracking-tight md:tracking-tighter leading-tight">
						<Link href="/">
							<a className="transition-all duration-200 hover:text-gray-700">
								RedQ
							</a>
						</Link>
					</h2>
					<div className="flex items-center">
						<button
							className={`hamburg-menubar border border-solid border-gray-400 py-1 px-2 rounded transition-all duration-300 focus:outline-none hover:bg-gray-900 hover:border-gray-900 ${
								mobileMenuToggle ? 'is-active' : ''
							}`}
							onClick={() => setMobileMenuToggle(!mobileMenuToggle)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								width="28"
								height="28"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d={`${
										mobileMenuToggle
											? 'M6 18L18 6M6 6l12 12'
											: 'M4 6h16M4 12h16M4 18h16'
									}`}
								/>
							</svg>
						</button>
						<ul
							className={`main-menu flex ${
								mobileMenuToggle ? 'is-active' : ''
							}`}
						>
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
					</div>
				</Container>
			</nav>
		</header>
	);
}
