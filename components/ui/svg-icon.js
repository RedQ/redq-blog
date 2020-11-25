export default function SvgIcon({ src, style, className }) {
	return (
		<span
			style={style}
			className={`svg-icon ${className}`}
			dangerouslySetInnerHTML={{
				__html: src,
			}}
		></span>
	);
}
