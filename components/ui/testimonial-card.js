import Img from '../ui/image';

export default function TestimonialCard({
	className = '',
	avatar,
	comment,
	name,
	userName,
}) {
	const userAvatar = '/images/envato.svg';

	return (
		<div
			className={`${className} rounded-lg pt-6 pb-8 pl-8 pr-10 border border-solid border-rq-gray-100 my-5 transition-shadow duration-200 hover:shadow-medium`}
		>
			<p className="leading-loose text-rq-gray-700 mb-6 2xl:mb-8">{comment}</p>
			<div className="flex items-center">
				<Img src={userAvatar} alt={name} width={45} height={45} />
				<div className="ml-3">
					<h3 className="font-medium text-rq-gray-700 mb-1">{name}</h3>
					<p className="text-sm text-rq-blue-800">{userName}</p>
				</div>
			</div>
		</div>
	);
}
