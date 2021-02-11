import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {Triangle} from '../Triangle';

const Outer = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	align-items: center;
`;

const Title = styled.div`
	font-size: 100px;
	font-family: 'SF Pro Text';
	font-weight: 700;
`;

const Subtitle = styled.div`
	font-size: 100px;
	font-family: 'SF Pro Text';
	font-weight: 400;
`;

const FADE_OUT_START = 60;

export const TutorialGraphic: React.FC = () => {
	const {fps, width, height} = useVideoConfig();
	const frame = useCurrentFrame();
	const cubeAnimation = spring({
		fps,
		frame: frame - FADE_OUT_START,
		config: {
			damping: 200,
			mass: 0.7,
		},
	});
	const finalCubeSize = 600;
	const horizontalInset = interpolate(
		cubeAnimation,
		[0, 1],
		[60, (width - finalCubeSize) / 2]
	);
	const verticalInset = interpolate(
		cubeAnimation,
		[0, 1],
		[60, (height - finalCubeSize) / 2]
	);
	const scale = interpolate(cubeAnimation, [0, 1], [1, 0.5]);
	const textWidth = interpolate(cubeAnimation, [0, 1], [600, 0]);

	const downAnimation = spring({
		fps,
		frame: frame - 30 - FADE_OUT_START,
		config: {
			damping: 200,
			mass: 0.7,
		},
	});
	const translateY = interpolate(
		downAnimation,
		[0, 1],
		[0, height / 2 + finalCubeSize]
	);

	const textFade1 = (delay: number) =>
		spring({
			fps,
			frame: frame - delay,

			config: {
				damping: 200,
			},
		});

	return (
		<div
			style={{
				position: 'absolute',
				left: horizontalInset,
				right: horizontalInset,
				top: verticalInset,
				bottom: verticalInset,
				flex: 1,
				display: 'flex',
			}}
		>
			<div
				style={{
					backgroundColor: 'white',
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					transform: `translateY(${translateY}px) scale(${scale})`,
					boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							flexDirection: 'row',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								height: 550,
								width: 550,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Outer>
								<Triangle size={550} opacity={0.2} />
								<Triangle size={450} opacity={0.4} />
								<Triangle size={350} opacity={1} />
							</Outer>
						</div>
						<div
							style={{
								width: Math.floor(textWidth),
								overflow: 'hidden',
								position: 'relative',
								opacity: 1 - cubeAnimation,
							}}
						>
							<div style={{overflow: 'hidden'}}>
								<Title
									style={{
										transform: `translateY(${interpolate(
											textFade1(0),
											[0, 1],
											[120, 0]
										)}px)`,
									}}
								>
									Remotion
								</Title>
							</div>
							<div
								style={{
									overflow: 'hidden',
									transform: `translateY(${interpolate(
										textFade1(4),
										[0, 1],
										[120, 0]
									)}px)`,
								}}
							>
								<Subtitle>Tutorials</Subtitle>
							</div>
							<div
								style={{
									position: 'absolute',
									background: 'linear-gradient(to left, white, transparent)',
									width: 100,
									right: 0,
									top: 0,
									height: '100%',
								}}
							/>
						</div>
						<div
							style={{
								height: 200,
								width: 3,
								backgroundColor: 'white',
								transform: `translateX(-2px)`,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
