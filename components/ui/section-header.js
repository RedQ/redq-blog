export default function SectionHeader({ className = '', slogan, title }) {
	return (
		<header className={`text-center ${className}`}>
			{slogan && (
				<div className="text-rq-blue-800 font-medium 2xl:text-lg mb-3.5">
					{slogan}
				</div>
			)}
			{title && (
				<h2 className="text-3xl font-medium tracking-tight">{title}</h2>
			)}
		</header>
	);
}
