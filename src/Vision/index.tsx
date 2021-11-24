import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {COLOR_2} from '../colors';

const circleSize = 250;

const Icon: React.FC = () => {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="terminal"
			className="svg-inline--fa fa-terminal fa-w-20"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 512"
			style={{height: 80, width: 80, marginBottom: 10}}
		>
			<path
				fill={COLOR_2}
				d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"
			/>
		</svg>
	);
};

const Renderer: React.FC = () => {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="camera-movie"
			className="svg-inline--fa fa-camera-movie fa-w-18"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
			style={{height: 80, width: 80, marginBottom: 10}}
		>
			<path
				fill={COLOR_2}
				d="M535.68 260.59L448 321.05V447l87.66 60.39c17 11.68 40.32-.23 40.32-20.63V281.22c.02-20.32-23.25-32.32-40.3-20.63zM368.2 288H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h48v112.2a47.81 47.81 0 0 0 47.8 47.8h256.4a47.81 47.81 0 0 0 47.8-47.8V335.8a47.81 47.81 0 0 0-47.8-47.8zM352 0c-48.57 0-90.31 27.37-112 67.23C218.31 27.37 176.57 0 128 0a128 128 0 0 0 0 256h224a128 128 0 0 0 0-256zM128 192a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64zm224 0a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"
			/>
		</svg>
	);
};

const Code: React.FC = () => {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="brackets-curly"
			className="svg-inline--fa fa-brackets-curly fa-w-18"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
			style={{height: 80, width: 80, marginBottom: 10}}
		>
			<path
				fill={COLOR_2}
				d="M208 32h-48a96 96 0 0 0-96 96v37.48a32.06 32.06 0 0 1-9.38 22.65L9.37 233.37a32 32 0 0 0 0 45.26l45.25 45.25A32 32 0 0 1 64 346.51V384a96 96 0 0 0 96 96h48a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-48a32 32 0 0 1-32-32v-37.48a96 96 0 0 0-28.13-67.89L77.25 256l22.63-22.63A96 96 0 0 0 128 165.48V128a32 32 0 0 1 32-32h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm358.63 201.37l-45.25-45.24a32.06 32.06 0 0 1-9.38-22.65V128a96 96 0 0 0-96-96h-48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h48a32 32 0 0 1 32 32v37.47a96 96 0 0 0 28.13 67.91L498.75 256l-22.62 22.63A96 96 0 0 0 448 346.52V384a32 32 0 0 1-32 32h-48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h48a96 96 0 0 0 96-96v-37.49a32 32 0 0 1 9.38-22.63l45.25-45.25a32 32 0 0 0 0-45.26z"
			/>
		</svg>
	);
};

const Question: React.FC = () => {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="question"
			className="svg-inline--fa fa-question fa-w-12"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 384 512"
			style={{height: 100, width: 100}}
		>
			<path
				fill={COLOR_2}
				d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"
			/>
		</svg>
	);
};

const Circle: React.FC<{
	angle: number;
	fatLabel: string;
	thinLabel: string;
	type: 'camera' | 'cli' | 'code' | 'question' | '';
	index: number;
}> = ({angle, fatLabel, thinLabel, type, index}) => {
	const {fps, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();
	const angleManipulator = interpolate(
		frame,
		[0, durationInFrames - 1],
		[0, Math.PI * 2]
	);
	const xOffset = Math.cos(angle + angleManipulator) * 300;
	const yOffset = Math.sin(angle + angleManipulator) * 300;
	const progress = spring({
		fps,
		frame: frame - 4 * index,
		config: {
			damping: 200,
		},
	});
	return (
		<div
			style={{
				position: 'absolute',
				width: circleSize,
				height: circleSize,
				left: width / 2 - circleSize / 2,
				top: height / 2 - circleSize / 2,
				border: `5px solid ${COLOR_2}`,
				borderRadius: '50%',
				transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${progress})`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			{type === 'camera' ? <Renderer /> : null}
			{type === 'cli' ? <Icon /> : null}
			{type === 'code' ? <Code /> : null}
			{type === 'question' ? <Question /> : null}
			<div>
				<div
					style={{
						fontSize: 20,
						fontFamily: 'SF Pro Text',
						display: 'block',
						textAlign: 'center',
					}}
				>
					{thinLabel}
				</div>
				<div
					style={{
						fontSize: 28,
						fontFamily: 'SF Pro Text',
						fontWeight: 700,
						display: 'block',
						textAlign: 'center',
					}}
				>
					{fatLabel}
				</div>
			</div>
		</div>
	);
};

const thinLabels = ['', '@remotion/', '@remotion/'];
const fatLabels = ['remotion', 'cli', 'renderer'];
const icons = ['camera', 'cli', 'code', 'question', 'question'] as const;

export const Vision: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			{new Array(5).fill(true).map((a, i) => {
				return (
					<Circle
						index={i}
						fatLabel={fatLabels[i]}
						thinLabel={thinLabels[i]}
						angle={(i * Math.PI * 2 + 1) / 5 + Math.PI}
						type={icons[i]}
					/>
				);
			})}
		</AbsoluteFill>
	);
};
