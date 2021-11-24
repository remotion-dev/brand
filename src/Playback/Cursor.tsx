import * as React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Cursor = (props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const forward = interpolate(frame, [0, 50], [-200, 200], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const backward = interpolate(frame, [50, 90], [0, -200], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const pos = forward + backward;
	const pop = (delay: number) =>
		spring({
			fps,
			frame: frame - delay,
			config: {
				mass: 0.4,
				damping: 200,
			},
		});

	const letter = frame < 50 ? 'L' : frame < 90 ? 'J' : 'K';

	return (
		<AbsoluteFill
			style={{
				boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
			}}
		>
			<svg
				width={1080}
				height={1080}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path fill="#fff" d="M0 0h1080v1080H0z" />
				<g
					style={{
						transform: `translateX(${pos}px) `,
					}}
				>
					<path d="M540 68v1012" stroke="#F02C00" strokeWidth={6} />

					<path
						d="M562.431 60.092L542.5 74.442a3.774 3.774 0 01-4.246.112l-22.521-14.478A3.774 3.774 0 01514 56.902V28.774A3.773 3.773 0 01517.774 25h42.452A3.773 3.773 0 01564 28.774v28.255a3.774 3.774 0 01-1.569 3.063z"
						fill="#F02C00"
						stroke="#F02C00"
						strokeWidth={3.774}
					/>
					<g
						style={{
							transformOrigin: '50% 50%',
							transform: `scale(${
								frame < 48 ? pop(0) : frame < 90 ? pop(48) : pop(88)
							})`,
						}}
					>
						<g filter="url(#prefix__filter0_d_4_23_X)">
							<rect
								x={435}
								y={425}
								width={209}
								height={209}
								rx={31.625}
								fill="#F9F9F9"
							/>
						</g>
						<text
							fill="#303030"
							style={{
								whiteSpace: 'pre',
							}}
							fontFamily="SF Pro Text"
							fontSize={147.125}
							fontWeight="bold"
							letterSpacing="0em"
						>
							<tspan x={492.75} y={579.162}>
								{letter}
							</tspan>
						</text>
					</g>

					<defs>
						<filter
							id="prefix__filter0_d_4_23_X"
							x={429.5}
							y={425}
							width={220}
							height={220}
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity={0} result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy={5.5} />
							<feGaussianBlur stdDeviation={2.75} />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
							<feBlend
								in2="BackgroundImageFix"
								result="effect1_dropShadow_4_23"
							/>
							<feBlend
								in="SourceGraphic"
								in2="effect1_dropShadow_4_23"
								result="shape"
							/>
						</filter>
					</defs>
				</g>
			</svg>
		</AbsoluteFill>
	);
};
