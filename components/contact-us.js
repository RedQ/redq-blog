import Container from '../components/ui/container';

export default function StatsBlock() {
	return (
		<Container className="pt-8 lg:pt-12 xl:pt-20 pb-12 lg:pb-16 flex flex-wrap lg:flex-nowrap items-center justify-between">
			<div className=" w-1/2">
				<h2 className="text-3xl leading-normal lg:text-4xl xl:text-44px font-bold tracking-tight lg:leading-snug mb-5 lg:mb-7">
					Elite Author in Envato, build <br className="hidden sm:block" />
					products that creates value.
				</h2>
				<p className="leading-loose text-rq-gray-800 lg:max-w-lg">
					Along With Wordpress Themes & Plugins, We always try to use latest
					trending techs like React, Next Js, Gatsby Js, GraphQl, Shopify etc to
					make our products special.
				</p>
			</div>
			<div className="flex-auto max-w-full w-1/2 mt-10 xl:mt-0">
				<form className="w-full mx-auto flex flex-col justify-center ">
					<div className="flex flex-col space-y-3">
						<div className="w-full ">
							<label
								htmlFor="name"
								className="text-sm text-heading font-semibold"
							>
								Your Name (required)
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="h-12 mt-2 text-placeholder w-full focus:border-gray-800  focus:ring-gray-800 placeholder-body border border-black pl-2"
								placeholder="Enter Your Name"
							/>
						</div>
						<div className="w-full mt-2 md:mt-0">
							<label
								htmlFor="email"
								className="text-sm text-heading font-semibold"
							>
								Your Email (required)
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="h-12 mt-2 text-placeholder w-full focus:border-gray-800  focus:ring-gray-800 placeholder-body border border-black pl-2"
								placeholder="Enter Your Email"
							/>
						</div>
						<div className="relative">
							<label
								htmlFor="Subject"
								className="text-sm text-heading font-semibold"
							>
								Subject
							</label>
							<input
								type="text"
								id="Subject"
								name="Subject"
								className="h-12 mt-2 text-placeholder w-full focus:border-gray-800  focus:ring-gray-800 placeholder-body border border-black pl-2"
								placeholder="Enter Your Subject"
							/>
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="message"
								className="text-sm text-heading font-semibold"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								className="w-full mt-2 px-6 py-4 h-32 appearance-none transition duration-150 ease-in-out border border-heading text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 focus:outline-none"
							></textarea>
						</div>
						<div className="relative">
							<button className="outline-none bg-rq-gray-800 text-white font-semibold rounded py-4 px-10 transition-colors duration-200 hover:bg-rq-gray-700">
								Contact us
							</button>
						</div>
					</div>
				</form>
			</div>
		</Container>
	);
}
