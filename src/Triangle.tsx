import styled from 'styled-components';

const Container = styled.svg`
	position: absolute;
	transform: rotate(90deg);
`;

export const Triangle: React.FC<{
	size: number;
	opacity: number;
	color1?: string;
	color2?: string;
}> = ({size, opacity, color1 = '#42e9f5', color2 = '#4290f5'}) => {
	return (
		<Container
			width={size}
			height={size}
			style={{
				opacity,
				width: size,
				height: size,
			}}
			viewBox="0 0 400 400"
		>
			<defs>
				<linearGradient id="gradient">
					<stop stopColor={color1} stopOpacity={1} offset="0" />
					<stop stopColor={color2} stopOpacity={1} offset="100%" />
				</linearGradient>
			</defs>
			<g stroke="url(#gradient)" strokeWidth="100" strokeLinejoin="round">
				<path
					fill="url(#gradient)"
					d="M 102 272 a 196 100 0 0 0 195 5 A 196 240 0 0 0 200 102.259 A 196 240 0 0 0 102 272 z"
				/>
			</g>
		</Container>
	);
};
