import Link from 'next/link';
import { useForm } from 'react-hook-form';
// data
import { footerWidgets } from '../../../public/data/home-page';

export default function Widgets() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="pt-4 2xl:px-8 footer-widgets">
			{footerWidgets.map((widget) => (
				<div className="footer-widget mt-8" key={widget.title}>
					<h3 className="text-white font-semibold capitalize mb-4">
						{widget.title}
					</h3>
					{widget.menu.length > 0 && (
						<ul
							className={
								widget.menu.length > 8
									? 'grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 2xl:gap-x-8 gap-y-3'
									: 'grid grid-cols-1 gap-y-3'
							}
						>
							{widget.menu.map((item) => (
								<li key={item.title}>
									<Link key={item.title} href={item.href}>
										<a className="text-15px text-rq-white-700 transition-all duration-300 hover:text-white">
											{item.title}
											{item?.status && (
												<span className="ml-2 inline-block px-1.5 pt-1 pb-0.5 rounded uppercase font-semibold bg-white text-xs text-rq-gray-800">
													{item?.status}
												</span>
											)}
										</a>
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			))}
			{/* End of footer menu  widgets */}

			<div className="footer-widget subscribe-form max-w-sm 2xl:max-w-md w-full mt-8">
				<h3 className="text-white font-semibold capitalize mb-4">
					Subscribe Newsletter
				</h3>
				<p className="text-rq-white-700 text-15px leading-loose">
					Don’t miss any future updates of our new template and extensions and
					all the astonishing offers.
				</p>
				<form
					className="mt-8 flex items-center"
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						type="email"
						name="subscribedEmail"
						placeholder="Your email address"
						className="px-6 bg-rq-white-100 outline-none text-white h-14 rounded border border-solid border-transparent transition-all duration-300 focus:bg-rq-gray-800 focus:border-rq-white-300"
						ref={register({
							required: true,
							pattern: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
						})}
					/>
					<button
						type="submit"
						className="px-6 bg-white rounded h-14 text-rq-gray-800 font-semibold capitalize ml-2.5 transition-colors duration-300 hover:bg-gray-200"
					>
						Subscribe
					</button>
				</form>
			</div>
			{/* End of subscribe form widget */}
		</div>
	);
}
