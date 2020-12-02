export default function ServiceCard({ src, title, description }) {
	return (
		<div className="min-h-rq-354 px-6 py-12 2xl:py-14 2xl:px-7 text-center rounded-md border border-solid border-rq-gray-100 transition-shadow duration-300 hover:shadow-large">
			<img className="m-auto" src={src} alt={title} />
			<h3 className="text-lg font-medium text-rq-gray-800 mt-8 mb-5">
				{title}
			</h3>
			<p className="leading-loose" style={{ color: '#4A5568' }}>
				{description}
			</p>
		</div>
	);
}
