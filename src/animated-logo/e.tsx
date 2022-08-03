import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const E: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = spring({
		fps,
		frame: frame - 2,
		config: {
			damping: 200,
		},
	});

	return (
		<g
			style={{
				transformBox: 'fill-box',
				transformOrigin: 'center center',
			}}
		>
			<mask
				id="mask0_108_2"
				style={{
					maskType: 'alpha',
				}}
				maskUnits="userSpaceOnUse"
				x="725"
				y="335"
				width="172"
				height="172"
			>
				<circle
					cx="811"
					cy="421"
					r="66"
					fill="black"
					stroke="black"
					strokeWidth="40"
				/>
			</mask>
			<g mask="url(#mask0_108_2)">
				<path
					d="M742 403H888C900.703 403 911 413.297 911 426V436H742V403Z"
					fill="black"
				/>
			</g>
			<mask
				id="mask1_108_2"
				style={{
					maskType: 'alpha',
				}}
				maskUnits="userSpaceOnUse"
				x="700"
				y="315"
				width="209"
				height="228"
			>
				<path
					d="M835 422H900.5L909 320.5L876.5 315L709.5 320.5L700 543H851L903 452.5H835V422Z"
					fill="black"
				/>
			</mask>
			<g mask="url(#mask1_108_2)">
				<path
					d="M874 421.5C874 456.696 845.668 485 811 485C776.332 485 748 456.696 748 421.5C748 386.304 776.332 358 811 358C845.668 358 874 386.304 874 421.5Z"
					stroke="black"
					strokeWidth="46"
				/>
			</g>
		</g>
	);
};
