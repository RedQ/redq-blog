import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../components/ui/container';

export default function StatsBlock() {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		success: '',
	});
	const { register, handleSubmit, errors } = useForm();
	async function onSubmit(data) {
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		const res = await (
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
		).json();
		setStatus((prev) => ({
			...prev,
			submitted: true,
			submitting: false,
			success: res.message,
		}));
		// console.log(res, 'msg');
		// console.log(res, data, 'contact response');
	}
	return (
		<Container className="">
			<div className="p-6 lg:p-16 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap flex-start justify-between rounded-xl shadow-base transition-shadow relative -top-8 xl:-top-12 bg-white">
				<div className="w-full lg:w-2/5 2xl:w-1/2">
					<h2 className="text-center md:text-left text-2xl md:text-2xl mb-5 font-bold 2xl:text-3xl">
						Take your project to next level🚀
					</h2>
					<p className="text-center md:text-left leading-loose text-rq-gray-800 lg:max-w-lg">
						Feel free to knock us for any kind of customizations of our products
						or for any custom projects. You are very important to us, all
						information received will always remain confidential. We will
						contact you as soon as we review your message.
					</p>
				</div>
				<div className="flex-auto max-w-full w-full lg:w-1/2 pl-0 lg:pl-20 2xl:pl-0 mt-10 lg:mt-0">
					<form
						className="w-full mx-auto flex flex-col justify-center "
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="flex flex-col space-y-3">
							<div className="w-full flex flex-col md:flex-row">
								<div className="w-full md:w-1/2">
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
										ref={register({ required: 'Name is required' })}
										className="h-12 2xl:h-14 mt-2 w-full text-black focus:border-black  focus:bg-white border border-input-bg bg-input-bg pl-2 focus:outline-none rounded-md focus:border-2 appearance-none"
										placeholder="Enter Your Name"
									/>
									{errors.name && (
										<p className="mt-2 text-sm font-semibold text-red-600">
											{errors.name.message}!
										</p>
									)}
								</div>
								<div className="w-full md:w-1/2  md:ml-6 mt-2 md:mt-0">
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
										ref={register({ required: 'Email is required' })}
										className="h-12 2xl:h-14 mt-2 w-full text-black border-input-bg focus:border-black  focus:bg-white border  bg-input-bg pl-2 focus:outline-none rounded-md focus:border-2 appearance-none"
										placeholder="Enter Your Email"
									/>
									{errors.email && (
										<p className="mt-2 text-sm font-semibold text-red-600">
											{errors.email.message}!
										</p>
									)}
								</div>
							</div>
							<div className="relative">
								<label
									htmlFor="Subject"
									className="text-sm text-heading font-semibold"
								>
									Subject (required)
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									ref={register({ required: 'Subject is required' })}
									className="h-12 2xl:h-14 mt-2 py-2 w-full text-black border-input-bg focus:border-black  focus:bg-white border  bg-input-bg pl-2 focus:outline-none rounded-md focus:border-2 appearance-none"
									placeholder="Enter Your Subject"
								/>
								{errors.subject && (
									<p className=" text-sm mt-2 font-semibold text-red-600">
										{errors.subject.message}!
									</p>
								)}
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
									className="h-32 mt-2 p-2 w-full text-black border-input-bg focus:border-black  focus:bg-white border  bg-input-bg pl-2 focus:outline-none rounded-md focus:border-2 appearance-none"
									ref={register}
								/>
							</div>
							<div className="relative">
								<button className="w-full h-12 outline-none focus:outline-none bg-rq-gray-800 text-white font-semibold rounded  px-10 transition-colors duration-200 hover:bg-rq-gray-700">
									{!status.submitting
										? !status.submitted
											? 'Send Message'
											: 'Message Sent'
										: 'Checking...'}
								</button>
							</div>
						</div>
					</form>
					{status.success && (
						<p className="text-black text-center mt-5 md:mt-5 font-semibold">
							{status.success}
						</p>
					)}
				</div>
			</div>
		</Container>
	);
}
