export default function ServiceCard({ src, title, description }) {
	return (
		<div className="py-14 px-7 mb-9 text-center rounded-md border border-solid border-rq-gray-100 transition-shadow duration-300 hover:shadow-large">
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
