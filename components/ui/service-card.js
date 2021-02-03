import Img from '../ui/image';

export default function ServiceCard({ thumb, title, description }) {
	return (
		<div className="min-h-rq-354 px-6 py-12 2xl:py-14 xl:mb-10 2xl:px-7 text-center rounded-md border border-solid border-rq-gray-100 transition-shadow duration-300 hover:shadow-large">
			<div className="m-auto min-h-rq-100">
				<Img
					width={thumb.width}
					height={thumb.height}
					src={thumb.url}
					alt={title}
				/>
			</div>
			<h3 className="text-lg font-medium text-rq-gray-800 mt-3 mb-5">
				{title}
			</h3>
			<p className="leading-loose" style={{ color: '#4A5568' }}>
				{description}
			</p>
		</div>
	);
}
