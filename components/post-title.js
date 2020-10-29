export default function PostTitle({ className, children }) {
	return (
		<h1
			className={`text-6xl font-bold tracking-tight mb-16 text-center md:text-left ${className}`}
		>
			{children}
		</h1>
	);
}
