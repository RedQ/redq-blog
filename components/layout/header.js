import { useState } from 'react';
import Link from 'next/link';
import ActiveLink from '../ui/active-link';
import Container from '../ui/container';
import Logo from '../ui/logo';

// menu data
const navItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Blog',
		href: '/blog',
	},
	{
		title: 'Portfolio',
		href: 'https://themeforest.net/user/redqteam/portfolio',
	},
	{
		title: 'Support',
		href: 'https://redqsupport.ticksy.com/',
	},
	{
		title: 'Documentation',
		href: '/documentation',
	},
	{
		title: 'FAQ',
		href: '/faq',
	},
	{
		title: 'About Us',
		href: '/about-us',
	},
];

export default function Header() {
	const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

	return (
		<header className="site-header">
			<nav
				id="rqSiteNav"
				className="fixed w-full top-0 left-0 py-6 lg:py-7 flex items-center transition-colors duration-200"
			>
				<Container fluid={true} className="flex items-center justify-between">
					<Link href="/">
						<a title="RedQ Inc">
							<Logo />
						</a>
					</Link>
					{/* End of site's logo */}
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
						{/* End of nav hamburger btn */}
						<ul
							className={`main-menu flex ${
								mobileMenuToggle ? 'is-active' : ''
							}`}
						>
							{navItems.map((item) => (
								<li className="px-5" key={item.title}>
									<ActiveLink href={item.href}>
										<a
											className="text-rq-gray-700 transition-colors duration-200 hover:text-black"
											onClick={() => setMobileMenuToggle(false)}
										>
											{item.title}
										</a>
									</ActiveLink>
								</li>
							))}
							<li className="px-5">
								<ActiveLink href={'/contact-us'}>
									<a
										className="font-bold text-rq-blue-800 transition-colors duration-200 hover:text-blue-600"
										onClick={() => setMobileMenuToggle(false)}
									>
										Hire Us!
									</a>
								</ActiveLink>
							</li>
						</ul>
						{/* End of main menu */}
					</div>
				</Container>
			</nav>
		</header>
	);
}
