import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {COLOR_2} from '../colors';

export const ShowcaseSubmit: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const scale = spring({
		fps,
		frame,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'SF Pro',
					fontWeight: 'bolder',
					fontSize: 80,
					lineHeight: 1.25,
					transform: `scale(${interpolate(scale, [0, 1], [0.5, 1])})`,
				}}
			>
				<div>Submit now:</div>
				<div
					style={{
						color: COLOR_2,
					}}
				>
					remotion.dev/showcase
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
